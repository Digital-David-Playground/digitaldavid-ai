import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  FadeInUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/FadeInUp";
import { Sparkles, Target, Shield, MapPin, Play, Zap, Users, Heart, MessageCircle, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Digital David",
  description:
    "We're a team of AI Engineers based in Frankfurt. Building production AI since 2020.",
};

const philosophy = [
  {
    icon: Sparkles,
    title: "Boutique Quality",
    description:
      "We choose our projects. High attention, deep expertise, personal relationships. Premium quality over mass production.",
  },
  {
    icon: Target,
    title: "Production Obsessed",
    description:
      "We don't do POCs that never ship. We build for production from day one. Working AI, not slideware.",
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description:
      "AI governance isn't overhead - it's our competitive advantage. Responsible AI, transparent decisions, full compliance.",
  },
];

const ecosystem = [
  {
    name: "Digital David AG",
    role: "AI Engineering & Products",
    description:
      "The AI engineering powerhouse. We architect, build, and deploy production AI systems.",
  },
  {
    name: "Talentschmiede AG",
    role: "IT Talent Academy",
    description:
      "1,000+ talents placed, 92% retention. €25,000 training investment per person.",
  },
  {
    name: "Talentrecruiters GmbH",
    role: "Recruiting Services",
    description:
      "Specialized IT recruiting, powered by our own AI technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              About Us
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We&apos;re AI Engineers.
              <br />
              <span className="text-gray-400">That&apos;s who we are.</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl">
              A small team based in Frankfurt, building production AI since 2020.
              We were AI Engineers before it was trendy - and we&apos;ll be here
              long after the hype settles.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Video & Summary Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <FadeInUp>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">Meet the team</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Engineers First, <span className="gradient-text">Always</span>
              </h2>

              <p className="text-gray-400 mb-8">
                We started as engineers who got frustrated with AI projects that never made it to production.
                PowerPoints don&apos;t solve business problems. Working code does. That&apos;s why we build.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Zap className="text-electric-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Since 2020</h3>
                    <p className="text-gray-400 text-sm">Building production AI before the hype. Still here after.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Users className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Small Team, Big Impact</h3>
                    <p className="text-gray-400 text-sm">Senior engineers only. No junior consultants learning on your project.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Heart className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Frankfurt Based</h3>
                    <p className="text-gray-400 text-sm">In the heart of Europe&apos;s financial and tech hub.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Philosophy */}
      <Section variant="dark">
        <SectionHeader
          title="Our Philosophy"
          subtitle="What drives us. What makes us different."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {philosophy.map((item, index) => (
            <StaggerItem key={index}>
              <Card variant="feature" className="h-full">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <CardTitle className="mb-3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Ecosystem */}
      <Section>
        <SectionHeader
          title="The Ecosystem"
          subtitle="Digital David AG is part of The Digital Workforce Group - a family of companies focused on digital transformation and talent development."
          centered
        />

        {/* Parent Company - DWG */}
        <FadeInUp className="mb-8">
          <a
            href="https://www.dwg.io"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card variant="glass" className="p-8 border-purple/30 hover:border-purple/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">The Digital Workforce Group AG</CardTitle>
                    <ExternalLink size={18} className="text-gray-500 group-hover:text-purple transition-colors" />
                  </div>
                  <p className="text-purple text-sm mb-3">Holding Company</p>
                  <CardDescription className="max-w-2xl">
                    Cross-industry holding for digital transformation. Consulting, services, and software solutions
                    focused on talent acquisition, digitalization, and artificial intelligence.
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-white">80+</p>
                    <p className="text-gray-500">Employees</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-white">30%</p>
                    <p className="text-gray-500">YoY Growth</p>
                  </div>
                </div>
              </div>
            </Card>
          </a>
        </FadeInUp>

        {/* Connector Line */}
        <FadeInUp delay={0.1} className="flex justify-center mb-8">
          <div className="w-px h-8 bg-gradient-to-b from-purple/50 to-slate-light/20" />
        </FadeInUp>

        {/* Subsidiaries */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {ecosystem.map((company, index) => (
            <StaggerItem key={index}>
              <Card
                variant={index === 0 ? "product" : "feature"}
                className={`h-full ${index === 0 ? "border-electric-blue/30" : ""}`}
              >
                <CardTitle className="mb-1">{company.name}</CardTitle>
                <p className="text-electric-blue text-sm mb-4">{company.role}</p>
                <CardDescription>{company.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeInUp delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-400">
              Combined: <span className="text-white font-semibold">1,000+ talents placed</span>,{" "}
              <span className="text-white font-semibold">92% retention rate</span>
            </p>
          </div>
        </FadeInUp>
      </Section>

      {/* Location */}
      <Section variant="dark">
        <FadeInUp>
          <Card variant="glass" className="p-8 md:p-12 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate flex items-center justify-center shrink-0">
                <MapPin className="text-electric-blue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Frankfurt am Main
                </h3>
                <p className="text-gray-400 mb-4">
                  Digital David AG
                  <br />
                  Weserstraße 4
                  <br />
                  60329 Frankfurt am Main
                  <br />
                  Germany
                </p>
                <p className="text-gray-500 text-sm">
                  In the heart of Europe&apos;s financial and tech hub.
                </p>
              </div>
            </div>
          </Card>
        </FadeInUp>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-electric-blue" />
                <span className="text-sm text-gray-300">We build AI, but we talk human to human</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Let&apos;s Build <span className="gradient-text">Together</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Behind every AI solution is a conversation. Let&apos;s start yours.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Our Story
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      From engineers to AI company
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card variant="product" className="h-full flex flex-col border-electric-blue/30">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                </div>
                <CardTitle className="mb-3">For Enterprises</CardTitle>
                <CardDescription className="flex-grow mb-6">
                  Let&apos;s discuss how we can help transform your business with AI. Book a discovery call.
                </CardDescription>
                <Button href="/contact" variant="primary" className="w-full">
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
                  Join the AI engineering revolution. Explore opportunities with karriererakete.ai.
                </CardDescription>
                <Button href="https://talentschmiede-ai.vercel.app/karriererakete" variant="secondary" className="w-full">
                  karriererakete.ai
                </Button>
              </Card>
            </StaggerItem>
          </StaggerChildren>

          <FadeInUp delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-12">
              No chatbots. No forms disappearing into the void. Real conversations with real engineers.
            </p>
          </FadeInUp>
        </div>
      </Section>
    </>
  );
}
