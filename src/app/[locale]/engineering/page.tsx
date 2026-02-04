import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FadeInUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/FadeInUp";
import { TechLogos } from "@/components/engineering/TechLogos";
import {
  Cpu,
  MessageSquare,
  FileSearch,
  Workflow,
  Layers,
  ArrowRight,
  Play,
  CheckCircle,
  Zap,
  Shield,
  Code2,
  Building2,
  Users,
  MessageCircle,
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "engineering.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/engineering", locale),
  };
}

export default async function EngineeringPage() {
  const t = await getTranslations("engineering");
  const tCommon = await getTranslations("common.cta");
  const tHomeCta = await getTranslations("home.cta");

  const competencies = [
    {
      icon: Cpu,
      title: t("competencies.agenticTitle"),
      description: t("competencies.agenticDesc"),
      skills: [
        "Multi-agent orchestration",
        "Agent control planes",
        "MCP integration",
        "Workflow automation",
      ],
    },
    {
      icon: Layers,
      title: t("competencies.llmTitle"),
      description: t("competencies.llmDesc"),
      skills: [
        "RAG systems",
        "Fine-tuning",
        "Prompt engineering",
        "LangChain / LlamaIndex",
        "Vector databases",
      ],
    },
    {
      icon: MessageSquare,
      title: t("competencies.conversationalTitle"),
      description: t("competencies.conversationalDesc"),
      skills: [
        "Voice agents",
        "Chat systems",
        "Multi-channel",
        "50+ languages",
      ],
    },
    {
      icon: FileSearch,
      title: t("competencies.documentTitle"),
      description: t("competencies.documentDesc"),
      skills: [
        "Classification",
        "Entity extraction",
        "Compliance",
        "OCR/processing",
      ],
    },
    {
      icon: Workflow,
      title: t("competencies.productTitle"),
      description: t("competencies.productDesc"),
      skills: [
        "Full-stack AI products",
        "White-label solutions",
        "Platform architecture",
      ],
    },
    {
      icon: ArrowRight,
      title: t("competencies.transformTitle"),
      description: t("competencies.transformDesc"),
      skills: ["Strategy", "Roadmapping", "Training", "Governance", "Scale ops"],
    },
  ];

  const techStack = {
    [t("techStack.models")]: ["Azure OpenAI", "GPT-4/5", "Claude", "Mistral"],
    [t("techStack.frameworks")]: ["LangChain", "LlamaIndex", "Semantic Kernel"],
    [t("techStack.infra")]: ["Azure", "Vercel", "AWS", "Pinecone", "Weaviate"],
    [t("techStack.tools")]: ["GitHub", "MLflow", "DevOps", "MCP"],
  };

  const processSteps = [
    {
      step: "01",
      title: t("process.discover"),
      description: t("process.discoverDesc"),
    },
    {
      step: "02",
      title: t("process.architect"),
      description: t("process.architectDesc"),
    },
    {
      step: "03",
      title: t("process.build"),
      description: t("process.buildDesc"),
    },
    {
      step: "04",
      title: t("process.scale"),
      description: t("process.scaleDesc"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              {t("hero.badge")}
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("hero.title")}
              <br />
              <span className="gradient-text">{t("hero.titleHighlight")}</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl">
              {t("hero.description")}
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
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">{t("video.watchHow")}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t("video.title")} <span className="gradient-text">{t("video.titleHighlight")}</span>
              </h2>

              <p className="text-gray-400 mb-8">
                {t("video.description")}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Zap className="text-electric-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t("video.shipFastTitle")}</h3>
                    <p className="text-gray-400 text-sm">{t("video.shipFastDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Shield className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t("video.productionTitle")}</h3>
                    <p className="text-gray-400 text-sm">{t("video.productionDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Code2 className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t("video.ownershipTitle")}</h3>
                    <p className="text-gray-400 text-sm">{t("video.ownershipDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Competencies */}
      <Section>
        <SectionHeader
          title={t("competencies.title")}
          subtitle={t("competencies.subtitle")}
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, index) => (
            <StaggerItem key={index}>
              <Card variant="feature" className="h-full">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <comp.icon className="text-white" size={20} />
                </div>
                <CardTitle className="mb-2">{comp.title}</CardTitle>
                <CardDescription className="mb-4">
                  {comp.description}
                </CardDescription>
                <ul className="space-y-1">
                  {comp.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-electric-blue rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* AI Ecosystem Logos */}
      <Section variant="dark" className="!py-12">
        <TechLogos />
      </Section>

      {/* Tech Stack */}
      <Section variant="dark">
        <SectionHeader title={t("techStack.title")} centered />

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Tech Stack Grid */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-gray-500 uppercase text-sm font-mono mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* Stats Column */}
          <FadeInUp delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate/30 border border-slate-light/10">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400 text-sm">{t("stats.projects")}</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate/30 border border-slate-light/10">
                <div className="text-3xl font-bold gradient-text">10M+</div>
                <div className="text-gray-400 text-sm">{t("stats.apiCalls")}</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate/30 border border-slate-light/10">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-gray-400 text-sm">{t("stats.uptime")}</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate/30 border border-slate-light/10">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">{t("stats.support")}</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          title={t("process.title")}
          subtitle={t("process.subtitle")}
          centered
        />

        <StaggerChildren className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-light mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </Section>

      {/* CTA Section with Video */}
      <Section variant="gradient" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Headline */}
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-electric-blue" />
                <span className="text-sm text-gray-300">{tHomeCta("badge")}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {tHomeCta("title")} <span className="gradient-text">{tHomeCta("titleHighlight")}</span>?
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {tHomeCta("subtitle")}
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
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {t("cta.videoTitle")}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {t("cta.videoSubtitle")}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

          {/* CTA Cards */}
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card variant="product" className="h-full flex flex-col border-electric-blue/30">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                </div>
                <CardTitle className="mb-3">{tHomeCta("enterpriseTitle")}</CardTitle>
                <CardDescription className="flex-grow mb-6">
                  {t("cta.enterpriseDesc")}
                </CardDescription>
                <Button href="/contact" variant="primary" className="w-full">
                  {tCommon("bookCall")}
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
                <CardTitle className="mb-3">{tHomeCta("talentTitle")}</CardTitle>
                <CardDescription className="flex-grow mb-6">
                  {tHomeCta("talentDesc")}
                </CardDescription>
                <Button href="https://talentschmiede-ai.vercel.app/karriererakete" variant="secondary" className="w-full">
                  karriererakete.ai
                </Button>
              </Card>
            </StaggerItem>
          </StaggerChildren>

          {/* Bottom tagline */}
          <FadeInUp delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-12">
              {tHomeCta("bottomTagline")}
            </p>
          </FadeInUp>
        </div>
      </Section>
    </>
  );
}
