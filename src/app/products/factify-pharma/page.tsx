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
  Pill,
  FlaskConical,
  FileCheck,
  ClipboardList,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle,
  FileSearch,
  Users,
  Play,
  Lock,
  MessageCircle,
  Building2,
  LayoutDashboard,
  Search,
  BookOpen,
  Lightbulb,
  ListChecks,
  FileText,
  StickyNote,
  Link2,
  Sparkles,
  Target,
  TrendingUp,
  Database,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Factify Pharma Suite | AI for Pharmaceutical Research | Digital David",
  description:
    "Factify Pharma Suite - Comprehensive AI platform for pharmaceutical research, regulatory compliance, and clinical trial management.",
  keywords: [
    "Pharma AI",
    "Clinical Trials",
    "CTD Automation",
    "Regulatory Compliance",
    "Drug Development",
    "GxP Compliance",
    "Pharmaceutical Research",
  ],
};

const stats = [
  { value: "65%", label: "Faster Processing", description: "CTD update time reduction" },
  { value: "98%", label: "Entity Accuracy", description: "Active ingredient recognition" },
  { value: "70%", label: "Fewer Errors", description: "Documentation error reduction" },
  { value: "92%", label: "Validation Rate", description: "Protocol validation accuracy" },
];

const modules = [
  {
    icon: FlaskConical,
    name: "Pharma Research",
    description:
      "Accelerate pharmaceutical research with intelligent data management. Automated classification, NLP-powered analysis, and seamless integration with laboratory systems.",
    features: [
      "Research data aggregation from clinical studies",
      "Automated data classification and OCR extraction",
      "NLP-powered analysis with 65% time reduction",
      "Intelligent document retrieval system",
      "Advanced entity recognition for pharma terminology",
    ],
  },
  {
    icon: FileCheck,
    name: "Regulatory AI (CTD-AI Suite)",
    description:
      "Automated regulatory documentation maintenance. Monitor ICH, EMA, and FDA guidelines with proactive compliance management and specialized AI agents.",
    features: [
      "Automated monitoring of regulatory guideline changes",
      "AI-driven documentation update identification",
      "Proactive risk detection and compliance management",
      "Specialized agents: Safety, Regulatory, Research, Compliance",
      "GxP-compliant audit trails and version control",
    ],
  },
  {
    icon: ClipboardList,
    name: "Study Management",
    description:
      "End-to-end preclinical trial management. From study planning through protocol definition to final data analysis with AI-powered quality assurance.",
    features: [
      "Structured study planning and resource management",
      "Automated protocol definition and validation",
      "Intelligent workflow management system",
      "Real-time data quality monitoring",
      "21 CFR Part 11 compliance",
    ],
  },
];

const aiAgents = [
  {
    name: "Safety Agent",
    description: "Monitors safety signals and adverse event patterns across studies",
  },
  {
    name: "Regulatory Agent",
    description: "Tracks guideline changes from ICH, EMA, FDA, and other authorities",
  },
  {
    name: "Research Agent",
    description: "Analyzes research data and identifies patterns in clinical outcomes",
  },
  {
    name: "Compliance Agent",
    description: "Ensures documentation meets GxP and regulatory requirements",
  },
];

const capabilities = [
  {
    icon: Brain,
    title: "NLP & Entity Recognition",
    description: "98% accuracy in active ingredient recognition, 95% in indication identification.",
  },
  {
    icon: Shield,
    title: "GxP Compliance",
    description: "Full audit trails, version control, and regulatory documentation support.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "65% reduction in CTD processing time through intelligent automation.",
  },
  {
    icon: Globe,
    title: "System Integration",
    description: "RESTful APIs connect to LIMS, CTMS, and existing pharma infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "AI-driven insights for research planning and risk assessment.",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Interdisciplinary team coordination with real-time updates.",
  },
];

// AI Research Platform Modules
const aiResearchModules = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    tagline: "Central Command Center",
    description: "Real-time overview of all research activities, KPIs, and project status. Your single source of truth for pharmaceutical R&D.",
    features: [
      "Real-time KPIs and metrics",
      "Project status overview",
      "Team activity feed",
      "Alert and notification center",
    ],
  },
  {
    icon: Search,
    name: "Discovery Hub",
    tagline: "Intelligent Literature Exploration",
    description: "AI-powered literature search across PubMed, clinical trials, and proprietary databases with semantic understanding.",
    features: [
      "Semantic search across multiple databases",
      "Automatic relevance scoring",
      "Citation network analysis",
      "Saved searches with alerts",
    ],
  },
  {
    icon: BookOpen,
    name: "Evidence Synthesis",
    tagline: "PRISMA-Compliant Systematic Reviews",
    description: "Automated systematic review workflows following PRISMA guidelines with AI-assisted screening and data extraction.",
    features: [
      "PRISMA-compliant workflow",
      "AI-assisted abstract screening",
      "Automated data extraction",
      "Risk of bias assessment",
    ],
  },
  {
    icon: Lightbulb,
    name: "Hypotheses",
    tagline: "AI-Powered Hypothesis Generation",
    description: "Generate and evaluate research hypotheses based on evidence synthesis and knowledge graph connections.",
    features: [
      "AI-generated hypothesis suggestions",
      "Evidence strength scoring",
      "Knowledge graph visualization",
      "Hypothesis versioning and tracking",
    ],
  },
  {
    icon: ListChecks,
    name: "Prioritization",
    tagline: "Multi-Criteria Decision Analysis",
    description: "Systematic prioritization of research directions using configurable criteria and stakeholder input.",
    features: [
      "Weighted scoring models",
      "Stakeholder voting system",
      "Scenario analysis",
      "Decision audit trails",
    ],
  },
  {
    icon: FileText,
    name: "Study Proposals",
    tagline: "Protocol Generation",
    description: "AI-assisted study protocol generation with templates, regulatory alignment, and feasibility assessment.",
    features: [
      "Protocol template library",
      "Regulatory requirement checker",
      "Feasibility assessment tools",
      "Budget estimation",
    ],
  },
  {
    icon: StickyNote,
    name: "Research Notes",
    tagline: "Collaborative Knowledge Management",
    description: "Structured note-taking with AI tagging, cross-referencing, and knowledge base integration.",
    features: [
      "AI-powered tagging",
      "Cross-reference suggestions",
      "Team collaboration features",
      "Version history and comments",
    ],
  },
  {
    icon: Link2,
    name: "CTD Bridge",
    tagline: "Regulatory Submission Preparation",
    description: "Seamless connection to CTD-AI Suite for preparing regulatory submissions from research findings.",
    features: [
      "Evidence package export",
      "CTD module mapping",
      "Gap analysis for submissions",
      "Audit-ready documentation",
    ],
  },
];

const aiResearchBenefits = [
  {
    icon: TrendingUp,
    value: "10x",
    label: "Faster Literature Analysis",
    description: "Reduce weeks of manual review to hours",
  },
  {
    icon: Lightbulb,
    value: "100+",
    label: "Hypothesis Suggestions",
    description: "AI-generated research directions per project",
  },
  {
    icon: Target,
    value: "85%",
    label: "Screening Accuracy",
    description: "AI-assisted relevance classification",
  },
  {
    icon: Database,
    value: "50M+",
    label: "Indexed Publications",
    description: "Comprehensive literature coverage",
  },
];

export default function FactifyPharmaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-deep-space via-midnight to-deep-space relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="live">Live Product</Badge>
              <Badge variant="default">Pharmaceutical AI</Badge>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center">
                <Pill className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Factify <span className="gradient-text">Pharma Suite</span>
              </h1>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
              AI-Powered Pharmaceutical Research & Compliance
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              Comprehensive AI platform for pharmaceutical research, regulatory
              documentation, and clinical trial management. From preclinical studies
              to regulatory submissions.
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
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">See Factify Pharma in action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Pharmaceutical AI <span className="gradient-text">That Delivers</span>
              </h2>

              <p className="text-gray-400 mb-8">
                From research data management to regulatory submissions, Factify Pharma Suite
                automates the entire pharmaceutical documentation lifecycle while maintaining
                GxP compliance and full audit trails.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Zap className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">65% Faster CTD Processing</h3>
                    <p className="text-gray-400 text-sm">Automated documentation updates and regulatory monitoring.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Lock className="text-electric-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">GxP Compliant</h3>
                    <p className="text-gray-400 text-sm">21 CFR Part 11, full audit trails, and version control.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <Brain className="text-emerald" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">98% Entity Accuracy</h3>
                    <p className="text-gray-400 text-sm">Industry-trained NLP for active ingredients and indications.</p>
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
              Three Integrated Pharma Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each module addresses specific pharmaceutical research challenges,
              working together as a unified platform.
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center shrink-0">
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

      {/* AI Research Platform */}
      <Section id="ai-research">
        <FadeInUp>
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">New Module</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Research <span className="gradient-text">Platform</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-4">
              An integrated AI platform revolutionizing pharmaceutical R&D. From literature discovery
              to regulatory submission preparation - eight powerful modules working in harmony.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Systematically generate and prioritize research hypotheses, accelerate evidence synthesis,
              and seamlessly bridge research findings to regulatory submissions.
            </p>
          </div>
        </FadeInUp>

        {/* Benefits Stats */}
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {aiResearchBenefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <StaggerItem key={benefit.label}>
                <Card variant="glass" className="p-5 text-center h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-purple" size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {benefit.value}
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{benefit.label}</div>
                  <div className="text-gray-500 text-xs">{benefit.description}</div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Platform Architecture Visual */}
        <FadeInUp delay={0.2}>
          <div className="mb-16">
            <div className="relative bg-gradient-to-br from-slate/50 to-midnight/50 rounded-2xl border border-slate-light/20 p-8 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl" />

              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Integrated Research Workflow</h3>
                  <p className="text-gray-400 text-sm">Eight modules connected through a unified knowledge layer</p>
                </div>

                {/* Module Flow */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {aiResearchModules.map((module, index) => {
                    const IconComponent = module.icon;
                    return (
                      <div key={module.name} className="relative">
                        <div className="bg-slate/50 border border-slate-light/20 rounded-xl p-4 hover:border-purple/40 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple/20 to-electric-blue/20 flex items-center justify-center mb-3 group-hover:from-purple/30 group-hover:to-electric-blue/30 transition-colors">
                            <IconComponent className="text-purple" size={20} />
                          </div>
                          <h4 className="font-semibold text-white text-sm mb-1">{module.name}</h4>
                          <p className="text-gray-500 text-xs">{module.tagline}</p>
                        </div>
                        {/* Connector arrow (except last in each row on mobile, all except last on desktop) */}
                        {index < aiResearchModules.length - 1 && index % 4 !== 3 && (
                          <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                            <ArrowRight size={16} className="text-slate-light/40" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Detailed Module Cards */}
        <FadeInUp>
          <h3 className="text-2xl font-bold text-center mb-8">
            Eight Integrated Modules
          </h3>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {aiResearchModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <StaggerItem key={module.name}>
                <Card variant="feature" className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center shrink-0">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-white">{module.name}</h4>
                      </div>
                      <p className="text-purple text-sm mb-2">{module.tagline}</p>
                      <p className="text-gray-400 text-sm mb-4">{module.description}</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {module.features.map((feature) => (
                          <li key={feature} className="text-gray-300 text-xs flex items-start gap-2">
                            <CheckCircle className="text-emerald shrink-0 mt-0.5" size={12} />
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

        {/* Vision Statement */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 text-center">
            <Card variant="glass" className="p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-purple" size={20} />
                <span className="text-purple font-medium text-sm uppercase tracking-wider">Platform Vision</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Transform pharmaceutical research from reactive literature reviews to proactive,
                AI-driven hypothesis generation. Connect the dots across millions of publications,
                clinical trials, and internal data to uncover novel therapeutic opportunities faster.
              </p>
            </Card>
          </div>
        </FadeInUp>
      </Section>

      {/* AI Agents */}
      <Section>
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized AI Agents
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Purpose-built AI agents work together to automate complex
              pharmaceutical workflows.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiAgents.map((agent) => (
            <StaggerItem key={agent.name}>
              <Card variant="glass" className="p-6 h-full text-center">
                <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-purple" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
                <p className="text-gray-400 text-sm">{agent.description}</p>
              </Card>
            </StaggerItem>
          ))}
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
              Enterprise-grade infrastructure designed for pharmaceutical
              research requirements.
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
                    <IconComponent className="text-purple" size={24} />
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
                Accelerate Your <span className="gradient-text">Pharmaceutical Research</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                See how Factify Pharma Suite can reduce documentation time by 65% while improving compliance.
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald/5 rounded-full blur-3xl" />
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-electric-blue flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      See Factify Pharma in Action
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      From research to regulatory compliance
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
                <h3 className="text-xl font-bold text-white mb-3">For Pharma Companies</h3>
                <p className="text-gray-400 flex-grow mb-6">
                  Schedule a personalized demo and see how we can accelerate your research and compliance workflows.
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
