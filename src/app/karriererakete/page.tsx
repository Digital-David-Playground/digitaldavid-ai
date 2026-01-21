import { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { Rocket, Users, Brain, Gamepad2, Target, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Karriererakete | Digital David",
  description:
    "karriererakete.ai - Our AI-native career community launching mid-2026. Where talents find their tribe and AI guides every step.",
};

const features = [
  {
    icon: Brain,
    title: "AI Career Coach",
    description:
      "Personalized career guidance, CV review, interview prep, and learning recommendations.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Tribes based on skills and interests. Network with peers, find mentors, grow together.",
  },
  {
    icon: Target,
    title: "Company Ambassadors",
    description:
      "Real employees, not recruiters. Authentic connections with actual team members.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Growth",
    description:
      "Rocket Points for engagement. 7 career levels from Starter to Rocket Star.",
  },
  {
    icon: Rocket,
    title: "Smart Matching",
    description:
      "92% accuracy AI matching. Intelligent fit scoring between talents and companies.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Mentorship",
    description:
      "Structured programs, virtual projects, and 1:1 mentorship matching.",
  },
];

export default function KarrierraketenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-purple/5 to-cyan/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              Launching Mid-2026
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-future flex items-center justify-center">
                <Rocket className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">karriererakete.ai</span>
              </h1>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Our Next AI Product: The Career Community
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              AI-powered career coaching meets community. Where talents find their
              tribe, companies build authentic connections, and AI guides every step.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <Button
              href="https://talentschmiede-ai.vercel.app/karriererakete"
              size="lg"
            >
              Join the Waitlist
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Features */}
      <Section>
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card variant="feature" className="h-full">
                <div className="w-10 h-10 rounded-lg gradient-future flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Built on Proven Foundation */}
      <Section variant="dark">
        <FadeInUp>
          <Card variant="glass" className="p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Built on Proven Foundation
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              karriererakete.ai combines Talentschmiede&apos;s 14+ years of talent
              expertise with Digital David&apos;s AI engineering capabilities.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold gradient-text">1,000+</div>
                <div className="text-gray-500 text-sm">Talents placed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">92%</div>
                <div className="text-gray-500 text-sm">Retention rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">€25K</div>
                <div className="text-gray-500 text-sm">Training per talent</div>
              </div>
            </div>

            <Button
              href="https://talentschmiede-ai.vercel.app/karriererakete"
              size="lg"
            >
              Get Early Access
            </Button>
          </Card>
        </FadeInUp>
      </Section>
    </>
  );
}
