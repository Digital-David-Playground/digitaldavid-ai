import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Building2,
  Users,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  Clock,
  Globe,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Digital David",
  description:
    "Get in touch with Digital David. Book a discovery call, send us a message, or chat with DAIvid - our AI assistant.",
};

const daividFeatures = [
  { icon: MessageSquare, label: "Natural Conversations" },
  { icon: Clock, label: "24/7 Available" },
  { icon: Globe, label: "Multilingual" },
  { icon: Sparkles, label: "AI-Powered" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              Contact
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s Build
              <br />
              <span className="gradient-text">Something.</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl">
              Whether you&apos;re looking to transform your business with AI or
              have questions about our services - we&apos;d love to hear from you.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* DAIvid Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <FadeInUp>
            <div>
              <Badge variant="info" className="mb-6">
                Meet Our AI
              </Badge>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Say Hello to{" "}
                <span className="gradient-text">DAIvid</span>
              </h2>

              <p className="text-xl text-gray-300 mb-3">
                Your AI Sales Development Representative
              </p>

              <p className="text-gray-400 mb-8 max-w-lg">
                DAIvid is our AI-powered video avatar - always ready to answer your
                questions about Digital David, our services, and how we can help
                transform your business with AI engineering.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {daividFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate border border-slate-light/20"
                  >
                    <feature.icon size={16} className="text-electric-blue" />
                    <span className="text-sm text-gray-300">{feature.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm">
                Click on the video to start a conversation with DAIvid.
              </p>
            </div>
          </FadeInUp>

          {/* Right: Video Avatar Embed */}
          <FadeInUp delay={0.2}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue/20 via-purple/20 to-cyan/20 rounded-3xl blur-2xl opacity-50" />

              {/* Avatar Container */}
              <div className="relative bg-gradient-to-br from-slate to-midnight rounded-2xl border border-slate-light/20 overflow-hidden aspect-[4/5] max-w-md mx-auto">
                {/* Placeholder for Video Embed */}
                <div
                  id="daivid-avatar-container"
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Placeholder UI - Replace with actual embed */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">D</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Video avatar embed will appear here
                    </p>
                    <p className="text-gray-500 text-xs">
                      Add your video avatar embed code to replace this placeholder
                    </p>
                  </div>
                </div>

                {/* Interactive Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">
                      DAIvid is ready to chat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section variant="dark">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <FadeInUp>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <ContactForm />
            </div>
          </FadeInUp>

          {/* Right: Contact Info */}
          <FadeInUp delay={0.2}>
            <div className="lg:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Other Ways to Reach Us
              </h2>
              <p className="text-gray-400 mb-8">
                Prefer a different channel? Here&apos;s how else you can connect.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <Card variant="feature" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center shrink-0">
                      <Mail className="text-electric-blue" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-1 text-lg">Email</CardTitle>
                      <a
                        href="mailto:hello@digitaldavid.io"
                        className="text-gray-400 hover:text-electric-blue transition-colors"
                      >
                        hello@digitaldavid.io
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Phone */}
                <Card variant="feature" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                      <Phone className="text-purple" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-1 text-lg">Phone</CardTitle>
                      <a
                        href="tel:+496997097958"
                        className="text-gray-400 hover:text-electric-blue transition-colors"
                      >
                        +49 69 970 979 58
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Office */}
                <Card variant="feature" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-cyan" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-1 text-lg">Office</CardTitle>
                      <p className="text-gray-400">
                        Digital David AG
                        <br />
                        Weserstraße 4
                        <br />
                        60329 Frankfurt am Main
                        <br />
                        Germany
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Quick Actions */}
      <Section>
        <SectionHeader
          title="Quick Actions"
          subtitle="Not sure where to start? Here are some common paths."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <StaggerItem>
            <Card
              variant="product"
              className="h-full flex flex-col border-electric-blue/30"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Building2 className="text-white" size={24} />
                </div>
              </div>
              <CardTitle className="mb-3">For Enterprises</CardTitle>
              <CardDescription className="flex-grow mb-6">
                Book a 30-minute discovery call to discuss your AI engineering needs.
                We&apos;ll explore how we can help transform your operations.
              </CardDescription>
              <Button
                href="mailto:hello@digitaldavid.io?subject=Discovery Call Request"
                variant="primary"
                className="w-full"
              >
                Book a Discovery Call
              </Button>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="feature" className="h-full flex flex-col">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-light flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
              </div>
              <CardTitle className="mb-3">For Talents</CardTitle>
              <CardDescription className="flex-grow mb-6">
                Interested in AI Engineering? Join karriererakete.ai - our AI-native
                career community launching mid-2026.
              </CardDescription>
              <Button
                href="https://talentschmiede-ai.vercel.app/karriererakete"
                variant="secondary"
                className="w-full"
              >
                Join karriererakete.ai
              </Button>
            </Card>
          </StaggerItem>
        </StaggerChildren>

        <FadeInUp delay={0.3}>
          <p className="text-center text-gray-500 text-sm mt-12">
            No chatbots. No forms disappearing into the void. Real conversations with real engineers.
          </p>
        </FadeInUp>
      </Section>
    </>
  );
}
