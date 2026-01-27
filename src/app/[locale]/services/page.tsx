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
import {
  Compass,
  Route,
  Settings2,
  Shield,
  Workflow,
  Users,
  Brain,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  MessageCircle,
  Building2,
  Sparkles,
  GraduationCap,
  FileCheck,
  Layers,
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/services", locale),
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("services");
  const tCommon = await getTranslations("common.cta");
  const tHomeCta = await getTranslations("home.cta");

  const services = [
    {
      id: "strategy",
      icon: Compass,
      title: t("services.strategyTitle"),
      tagline: t("services.strategyTagline"),
      description: t("services.strategyDesc"),
      deliverables: [
        t("services.strategyD1"),
        t("services.strategyD2"),
        t("services.strategyD3"),
        t("services.strategyD4"),
      ],
      gradient: "from-electric-blue to-cyan",
    },
    {
      id: "roadmap",
      icon: Route,
      title: t("services.roadmapTitle"),
      tagline: t("services.roadmapTagline"),
      description: t("services.roadmapDesc"),
      deliverables: [
        t("services.roadmapD1"),
        t("services.roadmapD2"),
        t("services.roadmapD3"),
        t("services.roadmapD4"),
      ],
      gradient: "from-purple to-electric-blue",
    },
    {
      id: "transformation",
      icon: Sparkles,
      title: t("services.transformTitle"),
      tagline: t("services.transformTagline"),
      description: t("services.transformDesc"),
      deliverables: [
        t("services.transformD1"),
        t("services.transformD2"),
        t("services.transformD3"),
        t("services.transformD4"),
      ],
      gradient: "from-cyan to-emerald",
    },
    {
      id: "team-ramp",
      icon: Users,
      title: t("services.teamTitle"),
      tagline: t("services.teamTagline"),
      description: t("services.teamDesc"),
      deliverables: [
        t("services.teamD1"),
        t("services.teamD2"),
        t("services.teamD3"),
        t("services.teamD4"),
      ],
      gradient: "from-emerald to-cyan",
    },
    {
      id: "mlops",
      icon: Workflow,
      title: t("services.mlopsTitle"),
      tagline: t("services.mlopsTagline"),
      description: t("services.mlopsDesc"),
      deliverables: [
        t("services.mlopsD1"),
        t("services.mlopsD2"),
        t("services.mlopsD3"),
        t("services.mlopsD4"),
      ],
      gradient: "from-electric-blue to-purple",
    },
    {
      id: "governance",
      icon: Shield,
      title: t("services.governanceTitle"),
      tagline: t("services.governanceTagline"),
      description: t("services.governanceDesc"),
      deliverables: [
        t("services.governanceD1"),
        t("services.governanceD2"),
        t("services.governanceD3"),
        t("services.governanceD4"),
      ],
      gradient: "from-purple to-cyan",
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: t("methodology.discoverTitle"),
      description: t("methodology.discoverDesc"),
      activities: [
        t("methodology.discoverA1"),
        t("methodology.discoverA2"),
        t("methodology.discoverA3"),
      ],
    },
    {
      phase: "02",
      title: t("methodology.designTitle"),
      description: t("methodology.designDesc"),
      activities: [
        t("methodology.designA1"),
        t("methodology.designA2"),
        t("methodology.designA3"),
      ],
    },
    {
      phase: "03",
      title: t("methodology.deliverTitle"),
      description: t("methodology.deliverDesc"),
      activities: [
        t("methodology.deliverA1"),
        t("methodology.deliverA2"),
        t("methodology.deliverA3"),
      ],
    },
    {
      phase: "04",
      title: t("methodology.scaleTitle"),
      description: t("methodology.scaleDesc"),
      activities: [
        t("methodology.scaleA1"),
        t("methodology.scaleA2"),
        t("methodology.scaleA3"),
      ],
    },
  ];

  const differentiators = [
    {
      icon: Brain,
      title: t("whyUs.expertiseTitle"),
      description: t("whyUs.expertiseDesc"),
    },
    {
      icon: Target,
      title: t("whyUs.industryTitle"),
      description: t("whyUs.industryDesc"),
    },
    {
      icon: Layers,
      title: t("whyUs.e2eTitle"),
      description: t("whyUs.e2eDesc"),
    },
    {
      icon: GraduationCap,
      title: t("whyUs.boutiqueTitle"),
      description: t("whyUs.boutiqueDesc"),
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

      {/* Video & Value Prop Section */}
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
                  <p className="text-gray-400 text-sm">{t("video.ourApproach")}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Value Proposition */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t("video.title")} <span className="gradient-text">{t("video.titleHighlight")}</span>
              </h2>

              <p className="text-gray-400 mb-8">
                {t("video.description")}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">{t("video.check1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">{t("video.check2")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">{t("video.check3")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">{t("video.check4")}</span>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Services Grid */}
      <Section variant="dark">
        <SectionHeader
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Card variant="feature" className="h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <p className="text-electric-blue text-sm mb-3">{service.tagline}</p>
                  <CardDescription className="mb-4 flex-grow">
                    {service.description}
                  </CardDescription>
                  <div className="pt-4 border-t border-slate-light/10">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">{t("services.deliverables")}</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <ArrowRight size={12} className="text-electric-blue mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Methodology */}
      <Section>
        <SectionHeader
          title={t("methodology.title")}
          subtitle={t("methodology.subtitle")}
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((phase, index) => (
            <StaggerItem key={index}>
              <div className="relative">
                <div className="text-6xl font-bold text-slate-light/30 mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {phase.description}
                </p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-electric-blue rounded-full" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Why Us */}
      <Section variant="dark">
        <SectionHeader
          title={t("whyUs.title")}
          subtitle={t("whyUs.subtitle")}
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-light/30 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-electric-blue" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Engagement Models */}
      <Section>
        <SectionHeader
          title={t("engagement.title")}
          subtitle={t("engagement.subtitle")}
          centered
        />

        <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StaggerItem>
            <Card variant="feature" className="h-full text-center">
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-electric-blue" size={24} />
              </div>
              <CardTitle className="mb-3">{t("engagement.advisoryTitle")}</CardTitle>
              <CardDescription>
                {t("engagement.advisoryDesc")}
              </CardDescription>
              <p className="text-gray-500 text-sm mt-4">{t("engagement.advisoryType")}</p>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="product" className="h-full text-center border-electric-blue/30">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <CardTitle className="mb-3">{t("engagement.embeddedTitle")}</CardTitle>
              <CardDescription>
                {t("engagement.embeddedDesc")}
              </CardDescription>
              <p className="text-electric-blue text-sm mt-4">{t("engagement.embeddedType")}</p>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="feature" className="h-full text-center">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mx-auto mb-4">
                <Settings2 className="text-purple" size={24} />
              </div>
              <CardTitle className="mb-3">{t("engagement.managedTitle")}</CardTitle>
              <CardDescription>
                {t("engagement.managedDesc")}
              </CardDescription>
              <p className="text-gray-500 text-sm mt-4">{t("engagement.managedType")}</p>
            </Card>
          </StaggerItem>
        </StaggerChildren>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-electric-blue" />
                <span className="text-sm text-gray-300">{tHomeCta("badge")}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {t("cta.title")} <span className="gradient-text">{t("cta.titleHighlight")}</span>?
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {t("cta.subtitle")}
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
