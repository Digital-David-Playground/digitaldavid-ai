import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  inquiryType: string;
  message: string;
  turnstileToken: string;
}

const inquiryTypeLabels: Record<string, string> = {
  discovery: "Discovery Call",
  project: "Project Inquiry",
  partnership: "Partnership",
  other: "Other",
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_REQUEST_BODY_BYTES = 16_384;
const TURNSTILE_TIMEOUT_MS = 5_000;
const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

function normalizeString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function getAllowedOrigins(request: Request) {
  const allowedOrigins = new Set<string>([
    "https://digitaldavid.io",
    "https://www.digitaldavid.io",
  ]);

  if (process.env.NODE_ENV !== "production") {
    allowedOrigins.add("http://localhost:3000");
    allowedOrigins.add("http://127.0.0.1:3000");
  }

  const configuredOrigins = process.env.ALLOWED_ORIGINS?.split(",") ?? [];
  for (const origin of configuredOrigins) {
    const normalizedOrigin = origin.trim();
    if (normalizedOrigin) {
      allowedOrigins.add(normalizedOrigin);
    }
  }

  try {
    allowedOrigins.add(new URL(request.url).origin);
  } catch {
    // Ignore malformed request URLs and fall back to the explicit allowlist.
  }

  return allowedOrigins;
}

function hasAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) {
    return process.env.NODE_ENV !== "production";
  }

  return getAllowedOrigins(request).has(origin);
}

function hasJsonContentType(request: Request) {
  const contentType = request.headers.get("content-type");
  return contentType?.split(";")[0]?.trim().toLowerCase() === "application/json";
}

function hasValidContentLength(request: Request) {
  const contentLength = request.headers.get("content-length");
  if (!contentLength) {
    return true;
  }

  const bytes = Number(contentLength);
  return Number.isFinite(bytes) && bytes > 0 && bytes <= MAX_REQUEST_BODY_BYTES;
}

function getAllowedTurnstileHostnames(request: Request) {
  const hostnames = new Set<string>(["digitaldavid.io", "www.digitaldavid.io"]);
  const configuredHostnames = process.env.TURNSTILE_ALLOWED_HOSTNAMES?.split(",") ?? [];

  for (const hostname of configuredHostnames) {
    const normalizedHostname = hostname.trim();
    if (normalizedHostname) {
      hostnames.add(normalizedHostname);
    }
  }

  try {
    hostnames.add(new URL(request.url).hostname);
  } catch {
    // Ignore malformed request URLs and fall back to the explicit allowlist.
  }

  return hostnames;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const timestamps = rateLimitStore.get(key) ?? [];
  const recentTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(key, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  rateLimitStore.set(key, recentTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    if (!hasAllowedOrigin(request)) {
      return NextResponse.json(
        { error: "Invalid origin" },
        { status: 403 }
      );
    }

    if (!hasJsonContentType(request)) {
      return NextResponse.json(
        { error: "Unsupported content type" },
        { status: 415 }
      );
    }

    if (!hasValidContentLength(request)) {
      return NextResponse.json(
        { error: "Request body too large" },
        { status: 413 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests" },
        {
          status: 429,
          headers: {
            "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000),
          },
        }
      );
    }

    const payload = (await request.json()) as Partial<ContactFormData>;
    const name = normalizeString(payload.name, MAX_NAME_LENGTH);
    const email = normalizeString(payload.email, MAX_EMAIL_LENGTH).toLowerCase();
    const company = normalizeString(payload.company, MAX_COMPANY_LENGTH);
    const message = normalizeString(payload.message, MAX_MESSAGE_LENGTH);
    const turnstileToken = normalizeString(payload.turnstileToken, 2048);
    const inquiryType = normalizeString(payload.inquiryType, 32);

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Bot verification required" },
        { status: 400 }
      );
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("Turnstile secret key not configured");
      return NextResponse.json(
        { error: "Bot verification unavailable" },
        { status: 500 }
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: clientIp,
        }),
        signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
      }
    );

    const turnstileResult = (await turnstileResponse.json()) as {
      success?: boolean;
      hostname?: string;
      ["error-codes"]?: string[];
    };

    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: "Bot verification failed" },
        { status: 403 }
      );
    }

    const allowedHostnames = getAllowedTurnstileHostnames(request);
    if (!turnstileResult.hostname || !allowedHostnames.has(turnstileResult.hostname)) {
      console.error("Turnstile hostname mismatch", {
        hostname: turnstileResult.hostname,
      });
      return NextResponse.json(
        { error: "Bot verification failed" },
        { status: 403 }
      );
    }

    const inquiryLabel = inquiryTypeLabels[inquiryType] || inquiryTypeLabels.other;

    // Check if Resend is configured
    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send notification email to team
    // Use onboarding@resend.dev until domain is verified, then switch to noreply@digitaldavid.io
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Digital David <onboarding@resend.dev>";
    // RESEND_TO_EMAIL should be set to the email you verified in Resend, or hello@digitaldavid.io once domain is verified
    const toEmail = process.env.RESEND_TO_EMAIL || "hello@digitaldavid.io";
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedCompany = escapeHtml(company || "Not provided");
    const escapedInquiryLabel = escapeHtml(inquiryLabel);
    const escapedMessage = escapeHtml(message);
    const subjectSafeName = sanitizeHeaderValue(name);
    const replySubject = encodeURIComponent("Re: Your inquiry to Digital David");

    const { error: teamEmailError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New ${sanitizeHeaderValue(inquiryLabel)} from ${subjectSafeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">${escapedInquiryLabel}</p>
          </div>

          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapedName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${encodeURIComponent(email)}" style="color: #0ea5e9; text-decoration: none;">${escapedEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapedCompany}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapedInquiryLabel}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <h3 style="color: #64748b; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1e293b; white-space: pre-wrap;">${escapedMessage}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;">
              <a href="mailto:${encodeURIComponent(email)}?subject=${replySubject}" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Reply to ${escapedName}</a>
            </div>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Sent from digitaldavid.io contact form
          </p>
        </body>
        </html>
      `,
    });

    if (teamEmailError) {
      console.error("Failed to send team notification:", teamEmailError);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const { error: userEmailError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We received your message - Digital David",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Digital<span style="background: linear-gradient(135deg, #22d3ee, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">David</span></h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0;">Hi ${escapedName},</h2>

            <p style="color: #475569; margin: 0 0 16px 0;">
              Thanks for reaching out! We've received your message and will get back to you within 24 hours.
            </p>

            <p style="color: #475569; margin: 0 0 24px 0;">
              In the meantime, feel free to explore our engineering capabilities and products on our website.
            </p>

            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
              <h3 style="color: #64748b; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Your message</h3>
              <p style="color: #1e293b; margin: 0; white-space: pre-wrap;">${escapedMessage}</p>
            </div>

            <p style="color: #475569; margin: 0;">
              Best regards,<br>
              <strong>The Digital David Team</strong>
            </p>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://digitaldavid.io" style="color: #0ea5e9; text-decoration: none; font-size: 14px;">digitaldavid.io</a>
            <span style="color: #cbd5e1; margin: 0 8px;">|</span>
            <a href="mailto:hello@digitaldavid.io" style="color: #0ea5e9; text-decoration: none; font-size: 14px;">hello@digitaldavid.io</a>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 16px;">
            Digital David AG · Weserstraße 4 · 60329 Frankfurt am Main · Germany
          </p>
        </body>
        </html>
      `,
    });

    if (userEmailError) {
      // Log but don't fail - team already received the notification
      console.error("Failed to send user confirmation:", userEmailError);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
