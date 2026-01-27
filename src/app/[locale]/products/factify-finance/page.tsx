import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/lib/metadata";
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
  Landmark,
  ShieldCheck,
  TrendingUp,
  FileSearch,
  PenTool,
  Scale,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Building2,
  Banknote,
  Play,
  Lock,
  MessageCircle,
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Factify Finance Suite | AI for Banking, Insurance & Investment | Digital David",
    description:
      "Factify Finance Suite - Comprehensive AI platform for banking, insurance, and investment management. Fraud detection, compliance automation, and intelligent decision support.",
    keywords: [
      "Finance AI",
      "Insurance AI",
      "Banking AI",
      "Investment AI",
      "Fraud Detection",
      "AML Compliance",
      "Claims Processing",
      "Risk Assessment",
      "BaFin Compliance",
    ],
    alternates: getAlternates("/products/factify-finance", locale),
  };
}

const stats = [
  { value: "70%", label: "Faster Claims", description: "Processing time reduction" },
  { value: "95%", label: "Fraud Detection", description: "Suspicious pattern recognition" },
  { value: "60%", label: "Cost Reduction", description: "In compliance processes" },
  { value: "99.9%", label: "Compliance Rate", description: "Regulatory adherence" },
];

const modules = [
  {
    icon: ShieldCheck,
    name: "Insurance Operations",
    description:
      "End-to-end insurance lifecycle automation. From sales and underwriting to claims processing with AI-powered fraud detection and risk assessment.",
    features: [
      "Automated claims processing and validation",
      "Real-time fraud detection with network analysis",
      "Dynamic quote generation and policy management",
      "Integration with comparison portals (Check24)",
      "Intelligent underwriting decision support",
    ],
  },
  {
    icon: Landmark,
    name: "Banking & Payments",
    description:
      "Streamline banking operations with intelligent transaction monitoring, customer onboarding automation, and regulatory compliance management.",
    features: [
      "Automated KYC/KYB verification processes",
      "Real-time transaction monitoring and alerts",
      "Credit risk assessment and scoring",
      "Payment fraud prevention systems",
      "Core banking system integration",
    ],
  },
  {
    icon: TrendingUp,
    name: "Investment & Wealth",
    description:
      "AI-powered investment analysis and portfolio management. Risk profiling, market intelligence, and automated compliance for wealth management.",
    features: [
      "Automated risk profiling and suitability checks",
      "Portfolio analysis and optimization",
      "Market intelligence and trend detection",
      "MiFID II compliance automation",
      "Client reporting and documentation",
    ],
  },
];

const aiAgents = [
  {
    icon: FileSearch,
    name: "Document Analysis Agent",
    description: "Extracts and validates information from policies, IDs, invoices using advanced OCR and NLP",
  },
  {
    icon: PenTool,
    name: "Signature Verification Agent",
    description: "Verifies signature authenticity via biometric analysis and pattern recognition",
  },
  {
    icon: Scale,
    name: "AML/GwG Compliance Agent",
    description: "Automated checks against sanctions lists, PEP databases, and internal watchlists",
  },
  {
    icon: Brain,
    name: "Risk Assessment Agent",
    description: "Evaluates transaction risk based on customer history and behavioral patterns",
  },
  {
    icon: Shield,
    name: "Compliance Documentation Agent",
    description: "Creates audit-proof documentation of all verification processes and decisions",
  },
];

const capabilities = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "ML-powered insights for risk trends and proactive decision-making in underwriting.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Full compliance with GDPR, BaFin, Solvency II, MiFID II, and GwG requirements.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "65-90% reduction in manual effort through intelligent workflow automation.",
  },
  {
    icon: Globe,
    title: "System Integration",
    description: "Open APIs connect to core banking, policy admin, and claims management systems.",
  },
  {
    icon: BarChart3,
    title: "Explainable AI",
    description: "Transparent decision protocols with full audit trails for regulatory review.",
  },
  {
    icon: Users,
    title: "Sales & Distribution",
    description: "Modern portals for quotes, digital applications, and customer communication.",
  },
];

const industries = [
  { icon: ShieldCheck, name: "Insurance Carriers" },
  { icon: Landmark, name: "Banks & Credit Unions" },
  { icon: TrendingUp, name: "Asset Managers" },
  { icon: Building2, name: "Investment Firms" },
  { icon: Banknote, name: "Payment Providers" },
  { icon: Users, name: "Wealth Advisors" },
];

export default function FactifyFinancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-deep-space via-midnight to-deep-space relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="live">Live Product</Badge>
              <Badge variant="default">Financial Services AI</Badge>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald to-cyan flex items-center justify-center">
                <Landmark className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Factify <span className="gradient-text">Finance Suite</span>
              </h1>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
              AI-Powered Banking, Insurance & Investment Platform
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              Comprehensive AI platform for the financial services industry. From
              insurance claims to banking compliance, from fraud detection to
              investment analysis - one unified solution.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Request Demo
              </Button>
              <Button href="#modules" variant="secondary" size="lg">
                Explore Modules
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
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan/10 rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald to-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">See Factify Finance in action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Financial AI <span className="gradient-text">That Delivers</span>
              </h2>

              <p className="text-gray-400 mb-8">
                From insurance claims to banking compliance, from fraud detection to investment
                analysis - Factify Finance Suite unifies AI capabilities for the entire financial
                services industry with full regulatory compliance.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <Zap className="text-emerald" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">70% Faster Claims</h3>
                    <p className="text-gray-400 text-sm">Automated processing and intelligent validation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Lock className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">BaFin & MiFID II Compliant</h3>
                    <p className="text-gray-400 text-sm">Full regulatory compliance with audit trails.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Shield className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">95% Fraud Detection</h3>
                    <p className="text-gray-400 text-sm">AI-powered pattern recognition and network analysis.</p>
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

      {/* Modules */}
      <Section variant="dark" id="modules">
        <FadeInUp>
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">Platform Modules</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Integrated Finance Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each module addresses specific financial services challenges,
              working together as a unified platform with shared AI infrastructure.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="space-y-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <StaggerItem key={module.name}>
                <Card variant="feature" className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald to-cyan flex items-center justify-center shrink-0">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {module.name}
                      </h3>
                      <p className="text-gray-400 mb-6">{module.description}</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {module.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <CheckCircle className="text-emerald shrink-0 mt-0.5" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* AI Agents */}
      <Section>
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized AI Agents
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Coordinated AI agents work together to automate complex
              financial workflows and ensure compliance.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiAgents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <StaggerItem key={agent.name}>
                <Card variant="glass" className="p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-emerald/20 flex items-center justify-center mb-4">
                    <IconComponent className="text-emerald" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
                  <p className="text-gray-400 text-sm">{agent.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Capabilities */}
      <Section variant="dark">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for financial services
              regulatory requirements.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => {
            const IconComponent = capability.icon;
            return (
              <StaggerItem key={capability.title}>
                <Card variant="glass" className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-light/20 flex items-center justify-center mb-4">
                    <IconComponent className="text-emerald" size={24} />
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
      <Section>
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Factify Finance Suite adapts to your specific regulatory
              requirements and business processes.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="flex flex-col items-center gap-3 p-6 bg-slate/50 border border-slate-light/20 rounded-xl"
                >
                  <IconComponent className="text-emerald" size={28} />
                  <span className="text-gray-300 text-sm text-center">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </FadeInUp>
      </Section>

      {/* Human CTA Section */}
      <Section variant="gradient" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Headline */}
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-emerald" />
                <span className="text-sm text-gray-300">We build AI, but we talk human to human</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Transform Your <span className="gradient-text">Financial Operations</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                See how Factify Finance Suite can reduce claims processing time by 70% while improving fraud detection.
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
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple/5 rounded-full blur-3xl" />
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald to-cyan flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      See Factify Finance in Action
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      Banking, insurance, and investment AI unified
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

          {/* CTA Cards */}
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card variant="product" className="h-full flex flex-col border-emerald/30">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald to-cyan flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">For Financial Institutions</h3>
                <p className="text-gray-400 flex-grow mb-6">
                  Schedule a personalized demo and see how we can transform your operations while ensuring compliance.
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
                <h3 className="text-xl font-bold text-white mb-3">Explore Platform</h3>
                <p className="text-gray-400 flex-grow mb-6">
                  Learn more about the full Factify.ai platform and our other industry solutions.
                </p>
                <Button href="/products/factify" variant="secondary" className="w-full">
                  View Factify.ai Platform
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
