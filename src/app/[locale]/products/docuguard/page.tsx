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
  ShieldCheck,
  Search,
  FileSearch,
  Trash2,
  CheckCircle,
  Building2,
  Landmark,
  ShoppingCart,
  ArrowRight,
  Play,
  Zap,
  Lock,
  FileCheck,
  MessageCircle,
  Users,
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "DocuGuard.ai | GDPR Compliance Automation | Digital David",
    description:
      "AI-powered GDPR compliance platform. Automated document classification, data redaction, and compliance management for enterprises.",
    keywords: [
      "GDPR Compliance",
      "Document Classification",
      "Data Redaction",
      "AI Compliance",
      "Data Protection",
      "Document Management",
    ],
    alternates: getAlternates("/products/docuguard", locale),
  };
}

const stats = [
  { value: "90%", label: "Effort Reduction", description: "Less manual compliance work" },
  { value: "400K+", label: "Documents Processed", description: "Across enterprise clients" },
  { value: "99.9%", label: "Compliance Rate", description: "Regulatory adherence" },
  { value: "<24h", label: "Processing Time", description: "For large document batches" },
];

const features = [
  {
    icon: Search,
    title: "Automated Data Classification",
    description:
      "AI and machine learning identify and categorize personal data across your entire data inventory automatically.",
  },
  {
    icon: Trash2,
    title: "Data Cleansing & Redaction",
    description:
      "Automatically remove or redact non-compliant or unnecessary data from repositories while maintaining data integrity.",
  },
  {
    icon: FileSearch,
    title: "Data Flow Transparency",
    description:
      "Clear overview of all data flows and storage locations for improved compliance visibility and regulatory adherence.",
  },
  {
    icon: CheckCircle,
    title: "Complete Audit Trails",
    description:
      "Every action logged and documented. Full traceability for auditors and compliance officers.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analysis",
    description:
      "We examine your data inventory and compliance requirements, mapping your current state against GDPR standards.",
  },
  {
    step: "02",
    title: "Training",
    description:
      "Machine learning models are trained on your specific data patterns for automated classification and extraction.",
  },
  {
    step: "03",
    title: "Cleansing",
    description:
      "Automated deletion or redaction of non-conforming data with human-in-the-loop verification for critical decisions.",
  },
];

const useCases = [
  {
    icon: Landmark,
    industry: "Banking & Finance",
    description:
      "Process customer records, transaction histories, and KYC documents while maintaining strict regulatory compliance.",
  },
  {
    icon: ShoppingCart,
    industry: "Retail & Logistics",
    description:
      "Manage customer data across multiple touchpoints, from e-commerce to delivery records.",
  },
  {
    icon: Building2,
    industry: "Real Estate",
    description:
      "Handle tenant information, contracts, and property management documents with GDPR-compliant workflows.",
  },
];

export default function DocuGuardPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-deep-space via-midnight to-deep-space relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="live">Live Product</Badge>
              <Badge variant="default">GDPR Compliance</Badge>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                DocuGuard<span className="gradient-text">.ai</span>
              </h1>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
              AI-Powered GDPR Compliance Automation
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              Identify, classify, and manage personal data across complex IT architectures.
              DocuGuard.ai automates compliance so you can focus on your business.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Request Demo
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                How It Works
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
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">See DocuGuard.ai in action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                GDPR Compliance <span className="gradient-text">Without the Headache</span>
              </h2>

              <p className="text-gray-400 mb-8">
                Manual compliance is slow, expensive, and error-prone. DocuGuard.ai uses
                machine learning to automatically identify, classify, and manage personal data
                across your entire organization—delivering audit-ready results in hours, not months.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Zap className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">90% Faster Processing</h3>
                    <p className="text-gray-400 text-sm">Automated classification replaces weeks of manual work.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Lock className="text-electric-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Enterprise Security</h3>
                    <p className="text-gray-400 text-sm">Your data never leaves your infrastructure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <FileCheck className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Audit-Ready Reports</h3>
                    <p className="text-gray-400 text-sm">Complete documentation for regulators and auditors.</p>
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

      {/* Features */}
      <Section variant="dark">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent Compliance Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              DocuGuard.ai combines AI classification, automated redaction, and complete
              transparency to transform how you handle GDPR compliance.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <Card variant="feature" className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works">
        <FadeInUp>
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How DocuGuard.ai Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A three-step process that takes you from data chaos to GDPR compliance.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.step}>
              <div className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-electric-blue/50 to-transparent -translate-x-1/2" />
                )}
                <Card variant="glass" className="p-6 relative">
                  <div className="text-5xl font-bold text-electric-blue/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </Card>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Use Cases */}
      <Section variant="dark">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              DocuGuard.ai adapts to your industry&apos;s specific compliance requirements.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase) => {
            const IconComponent = useCase.icon;
            return (
              <StaggerItem key={useCase.industry}>
                <Card variant="feature" className="p-6 h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-slate-light/20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-electric-blue" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Human CTA Section */}
      <Section variant="gradient" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Headline */}
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-purple" />
                <span className="text-sm text-gray-300">We build AI, but we talk human to human</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Automate <span className="gradient-text">GDPR Compliance</span>?
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Let us show you how DocuGuard.ai can transform your compliance operations.
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
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      See DocuGuard.ai in Action
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      From data chaos to GDPR compliance
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

          {/* CTA Cards */}
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card variant="product" className="h-full flex flex-col border-purple/30">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">For Enterprises</h3>
                <p className="text-gray-400 flex-grow mb-6">
                  Schedule a personalized demo and see how DocuGuard.ai can reduce your compliance workload by 90%.
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
                  Discover our full suite of AI-powered solutions for enterprise compliance and automation.
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
