import { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { FadeInUp } from "@/components/animations/FadeInUp";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital David",
  description: "Privacy Policy and Data Protection Information for Digital David AG",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="prose prose-invert prose-gray max-w-none">
            <p className="text-gray-400 mb-6">
              Last updated: January 2026
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-400 mb-6">
              Digital David AG (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website digitaldavid.ai.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              2. Data Controller
            </h2>
            <p className="text-gray-400 mb-6">
              Digital David AG
              <br />
              Weserstraße 4
              <br />
              60329 Frankfurt am Main
              <br />
              Germany
              <br />
              Email: hello@digitaldavid.ai
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              3. Information We Collect
            </h2>
            <p className="text-gray-400 mb-4">
              We may collect information about you in a variety of ways:
            </p>
            <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong className="text-white">Personal Data:</strong> Name, email address,
                and other contact information you voluntarily provide when
                contacting us.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Information about how you
                access and use our website, including your IP address, browser
                type, and pages visited.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              4. How We Use Your Information
            </h2>
            <p className="text-gray-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              5. Your Rights (GDPR)
            </h2>
            <p className="text-gray-400 mb-4">
              Under the General Data Protection Regulation (GDPR), you have the
              right to:
            </p>
            <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Restrict processing of your personal data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-400 mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized or unlawful
              processing, accidental loss, destruction, or damage.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-400 mb-6">
              We retain your personal data only for as long as necessary to
              fulfill the purposes for which it was collected, or as required by
              applicable laws.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-400 mb-6">
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us at:
              <br />
              <br />
              Email:{" "}
              <a
                href="mailto:hello@digitaldavid.ai"
                className="text-electric-blue hover:underline"
              >
                hello@digitaldavid.ai
              </a>
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
