import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  inquiryType: string;
  message: string;
}

const inquiryTypeLabels: Record<string, string> = {
  discovery: "Discovery Call",
  project: "Project Inquiry",
  partnership: "Partnership",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const inquiryLabel = inquiryTypeLabels[data.inquiryType] || data.inquiryType;

    // Send notification email to team
    const { error: teamEmailError } = await resend.emails.send({
      from: "Digital David <noreply@digitaldavid.ai>",
      to: ["hello@digitaldavid.ai"],
      replyTo: data.email,
      subject: `New ${inquiryLabel} from ${data.name}`,
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
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">${inquiryLabel}</p>
          </div>

          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${data.email}" style="color: #0ea5e9; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${inquiryLabel}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <h3 style="color: #64748b; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1e293b; white-space: pre-wrap;">${data.message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: Your inquiry to Digital David" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Reply to ${data.name}</a>
            </div>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Sent from digitaldavid.ai contact form
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
      from: "Digital David <noreply@digitaldavid.ai>",
      to: [data.email],
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
            <h2 style="color: #1e293b; margin: 0 0 16px 0;">Hi ${data.name},</h2>

            <p style="color: #475569; margin: 0 0 16px 0;">
              Thanks for reaching out! We've received your message and will get back to you within 24 hours.
            </p>

            <p style="color: #475569; margin: 0 0 24px 0;">
              In the meantime, feel free to explore our engineering capabilities and products on our website.
            </p>

            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
              <h3 style="color: #64748b; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Your message</h3>
              <p style="color: #1e293b; margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>

            <p style="color: #475569; margin: 0;">
              Best regards,<br>
              <strong>The Digital David Team</strong>
            </p>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://digitaldavid.ai" style="color: #0ea5e9; text-decoration: none; font-size: 14px;">digitaldavid.ai</a>
            <span style="color: #cbd5e1; margin: 0 8px;">|</span>
            <a href="mailto:hello@digitaldavid.ai" style="color: #0ea5e9; text-decoration: none; font-size: 14px;">hello@digitaldavid.ai</a>
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
