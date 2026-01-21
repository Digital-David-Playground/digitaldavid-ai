import { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FadeInUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/FadeInUp";
import {
  Layers,
  Users,
  Scale,
  TrendingUp,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  Lock,
  MessageCircle,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Factify.ai | AI Foundation Platform | Digital David",
  description:
    "Factify.ai - The AI platform powering business transformation. 3 AI Journeys for Customer, Legal, and Market Intelligence workflows.",
  keywords: [
    "AI Platform",
    "Customer Journey",
    "Legal AI",
    "Market Intelligence",
    "Process Automation",
    "Enterprise AI",
  ],
};

const stats = [
  { value: "3", label: "AI Journeys", description: "Industry-specific solutions" },
  { value: "65%", label: "Time Savings", description: "On document processing" },
  { value: "90%", label: "Less Manual Work", description: "Through automation" },
  { value: "99.9%", label: "Uptime SLA", description: "Enterprise reliability" },
];

const journeys = [
  {
    icon: Users,
    name: "Customer Journey",
    description:
      "Optimize every customer touchpoint. AI-driven personalization, predictive analytics, and automated engagement across the entire lifecycle.",
    features: ["Real-time personalization", "Predictive churn analysis", "Automated onboarding"],
  },
  {
    icon: Scale,
    name: "Legal Journey",
    description:
      "End-to-end digitalization of legal proceedings. From client acquisition to case closure with AI-powered document management.",
    features: ["Automated document creation", "E-Discovery tools", "Digital signatures"],
  },
  {
    icon: TrendingUp,
    name: "Market Intelligence",
    description:
      "Proactive market and competitive intelligence. Real-time scanning, autonomous research agents, and early warning systems.",
    features: ["24/7 market monitoring", "Competitive analysis", "Trend prediction"],
  },
];

const coreCapabilities = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Machine learning and NLP for pattern recognition, text analysis, and predictive analytics.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automated workflows, intelligent chatbots, and 65-90% reduction in manual effort.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR compliance, encryption, audit trails, and GxP-compliant documentation.",
  },
  {
    icon: Globe,
    title: "Seamless Integration",
    description: "Open APIs, microservices architecture, compatible with existing enterprise systems.",
  },
  {
    icon: BarChart3,
    title: "Decision Intelligence",
    description: "Predictive modeling, trend identification, and actionable recommendations.",
  },
  {
    icon: CheckCircle,
    title: "Explainable AI",
    description: "Transparent decision protocols, full traceability, and audit support.",
  },
];

const industries = [
  "Insurance",
  "Pharmaceutical",
  "Legal Services",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
];

export default function FactifyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-deep-space via-midnight to-deep-space relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="live">Live Product</Badge>
              <Badge variant="default">AI Platform</Badge>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-emerald flex items-center justify-center">
                <Layers className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Factify<span className="gradient-text">.ai</span>
              </h1>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
              The AI Foundation Platform for Enterprise Transformation
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              Three AI Journeys powering business processes across industries.
              From customer engagement to market intelligence - Factify.ai
              transforms how enterprises operate.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Request Demo
              </Button>
              <Button href="#journeys" variant="secondary" size="lg">
                Explore Journeys
              </Button>
              <Button href="/products/factify-pharma" variant="ghost" size="lg">
                Pharma Suite →
              </Button>
              <Button href="/products/factify-finance" variant="ghost" size="lg">
                Finance Suite →
              </Button>
            </div>
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
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald/10 rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan to-emerald flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">See Factify.ai in action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Enterprise AI <span className="gradient-text">That Delivers</span>
              </h2>

              <p className="text-gray-400 mb-8">
                Factify.ai is not another AI experiment. It&apos;s a production-ready platform
                powering critical business processes across regulated industries. Three AI Journeys
                deliver measurable results from day one.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Zap className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">65% Time Savings</h3>
                    <p className="text-gray-400 text-sm">Automated workflows replace manual document processing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <Lock className="text-emerald" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Enterprise Compliance</h3>
                    <p className="text-gray-400 text-sm">GDPR, GxP, and industry-specific regulatory requirements built in.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Brain className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">98% AI Accuracy</h3>
                    <p className="text-gray-400 text-sm">Industry-trained models for reliable entity recognition.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Stats */}
      <Section variant="dark">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card variant="glass" className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* AI Journeys */}
      <Section variant="dark" id="journeys">
        <FadeInUp>
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">AI Journeys</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each Journey is a complete AI-powered transformation of specific business
              processes, designed for your industry&apos;s unique requirements.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="space-y-6">
          {journeys.map((journey) => {
            const IconComponent = journey.icon;
            return (
              <StaggerItem key={journey.name}>
                <Card variant="feature" className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-emerald flex items-center justify-center shrink-0">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {journey.name}
                      </h3>
                      <p className="text-gray-400 mb-4">{journey.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {journey.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-slate-light/10 rounded-full text-gray-300 text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Core Capabilities */}
      <Section>
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on enterprise-grade AI infrastructure with security,
              compliance, and scalability at its core.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((capability) => {
            const IconComponent = capability.icon;
            return (
              <StaggerItem key={capability.title}>
                <Card variant="glass" className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-light/20 flex items-center justify-center mb-4">
                    <IconComponent className="text-cyan" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Industries */}
      <Section variant="dark">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Factify.ai adapts to your industry&apos;s specific regulatory
              requirements and business processes.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-6 py-3 bg-slate/50 border border-slate-light/20 rounded-full text-gray-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Results */}
      <Section>
        <FadeInUp>
          <Card variant="glass" className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Proven Results</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">
                      <strong className="text-white">65% faster</strong> document
                      processing in regulated industries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">
                      <strong className="text-white">70% reduction</strong> in
                      documentation error rates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">
                      <strong className="text-white">98% accuracy</strong> in
                      entity recognition for pharma
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">
                      <strong className="text-white">90% less</strong> manual
                      research effort with Market Intelligence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-emerald shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">
                      <strong className="text-white">24/7 monitoring</strong> for
                      regulatory and market changes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">65%</div>
                  <div className="text-gray-500 text-sm">Time Savings</div>
                </div>
                <div className="bg-slate/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">70%</div>
                  <div className="text-gray-500 text-sm">Fewer Errors</div>
                </div>
                <div className="bg-slate/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                  <div className="text-gray-500 text-sm">AI Accuracy</div>
                </div>
                <div className="bg-slate/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">90%</div>
                  <div className="text-gray-500 text-sm">Less Manual Work</div>
                </div>
              </div>
            </div>
          </Card>
        </FadeInUp>
      </Section>

      {/* Human CTA Section */}
      <Section variant="gradient" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Headline */}
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-cyan" />
                <span className="text-sm text-gray-300">We build AI, but we talk human to human</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Transform <span className="gradient-text">Your Business</span>?
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Discover which AI Journey is right for your organization.
              </p>
            </div>
          </FadeInUp>

          {/* Video */}
          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                  {/* Animated background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple/5 rounded-full blur-3xl" />
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan to-emerald flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      See Factify.ai in Action
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      Three AI Journeys powering enterprise transformation
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

          {/* CTA Cards */}
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card variant="product" className="h-full flex flex-col border-cyan/30">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-emerald flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">For Enterprises</h3>
                <p className="text-gray-400 flex-grow mb-6">
                  Schedule a discovery call to identify the highest-impact AI opportunities for your organization.
                </p>
                <Button href="/contact" variant="primary" className="w-full">
                  Schedule a Demo
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
                <h3 className="text-xl font-bold text-white mb-3">Explore Products</h3>
                <p className="text-gray-400 flex-grow mb-6">
                  Discover our full suite of AI-powered solutions including industry-specific Pharma and Finance suites.
                </p>
                <Button href="/products" variant="secondary" className="w-full">
                  View All Products
                </Button>
              </Card>
            </StaggerItem>
          </StaggerChildren>

          {/* Bottom tagline */}
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
