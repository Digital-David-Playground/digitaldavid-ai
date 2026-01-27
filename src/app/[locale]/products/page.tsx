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
import { ArrowUpRight, Rocket, Play, Zap, Shield, Award, MessageCircle, Building2, Users } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/products", locale),
  };
}

const products = [
  {
    id: "talenty",
    name: "Talenty.ai",
    tagline: "AI-Powered Recruiting Platform",
    description:
      "End-to-end recruiting automation. From candidate sourcing to AI interviews, Talenty transforms how companies hire.",
    stats: [
      { value: "70%", label: "Faster time-to-hire" },
      { value: "85%", label: "Quality improvement" },
      { value: "63%", label: "Cost reduction" },
    ],
    features: [
      "Multi-agent candidate sourcing from social platforms",
      "AI voice interviews via Talky (50+ languages)",
      "RAG-powered candidate matching",
      "Multi-channel outreach orchestration",
    ],
    href: "https://talenty.ai",
    external: true,
    status: "live",
    gradient: "from-electric-blue to-cyan",
    videoText: "See Talenty in action",
  },
  {
    id: "talky",
    name: "Talky",
    tagline: "AI Interview Automation",
    description:
      "Automated phone, video, and WhatsApp interviews powered by conversational AI. Screen candidates 24/7 with instant insights.",
    stats: [
      { value: "75%", label: "Time savings" },
      { value: "50+", label: "Languages" },
      { value: "92%", label: "Satisfaction" },
    ],
    features: [
      "Phone, video, and WhatsApp interviews",
      "Sub-200ms AI response time",
      "Real-time competency assessment",
      "Automatic transcription and recording",
    ],
    href: "https://talky.talenty.ai",
    external: true,
    status: "live",
    gradient: "from-emerald to-cyan",
    videoText: "Watch Talky interview demo",
  },
  {
    id: "docuguard",
    name: "DocuGuard.ai",
    tagline: "GDPR Compliance Automation",
    description:
      "Automated document classification and GDPR-compliant data management. Process thousands of documents with AI-powered compliance.",
    stats: [
      { value: "90%", label: "Effort reduction" },
      { value: "99.9%", label: "Compliance rate" },
      { value: "400K+", label: "Docs processed" },
    ],
    features: [
      "Page-by-page AI document classification",
      "Automatic redaction of sensitive data",
      "Seamless SAP and archive integration",
      "Complete audit trails",
    ],
    href: "/products/docuguard",
    external: false,
    status: "live",
    gradient: "from-purple to-electric-blue",
    videoText: "See DocuGuard workflow",
  },
  {
    id: "factify",
    name: "Factify.ai",
    tagline: "AI Foundation Platform",
    description:
      "The AI engine powering business transformation. Three AI Journeys for customer, legal, and market intelligence workflows.",
    stats: [
      { value: "3", label: "AI Journeys" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "65%", label: "Time savings" },
    ],
    features: [
      "Customer Journey - Personalized experiences",
      "Legal Journey - Automated legal processes",
      "Market Intelligence - Competitive analysis",
    ],
    href: "/products/factify",
    external: false,
    status: "live",
    gradient: "from-cyan to-emerald",
    videoText: "Explore AI Journeys",
  },
  {
    id: "factify-pharma",
    name: "Factify Pharma Suite",
    tagline: "AI for Pharmaceutical Research",
    description:
      "Comprehensive AI platform for pharmaceutical research, regulatory compliance, and clinical trial management.",
    stats: [
      { value: "65%", label: "Faster processing" },
      { value: "98%", label: "Entity accuracy" },
      { value: "70%", label: "Fewer errors" },
    ],
    features: [
      "Pharma Research - Data management & NLP",
      "CTD-AI Suite - Regulatory documentation",
      "Study Management - Trial coordination",
      "GxP & 21 CFR Part 11 compliance",
    ],
    href: "/products/factify-pharma",
    external: false,
    status: "live",
    gradient: "from-purple to-cyan",
    videoText: "Pharma AI walkthrough",
  },
  {
    id: "factify-finance",
    name: "Factify Finance Suite",
    tagline: "AI for Banking, Insurance & Investment",
    description:
      "Comprehensive AI platform for the financial services industry. From insurance claims to banking compliance, from fraud detection to investment analysis.",
    stats: [
      { value: "70%", label: "Faster claims" },
      { value: "95%", label: "Fraud detection" },
      { value: "60%", label: "Cost reduction" },
    ],
    features: [
      "Insurance Operations - Claims automation",
      "Banking & Payments - KYC/AML compliance",
      "Investment & Wealth - Portfolio analysis",
      "BaFin & Solvency II compliance",
    ],
    href: "/products/factify-finance",
    external: false,
    status: "live",
    gradient: "from-emerald to-electric-blue",
    videoText: "Finance AI demo",
  },
];

export default async function ProductsPage() {
  const t = await getTranslations("products");
  const tCommon = await getTranslations("common.cta");
  const tHomeCta = await getTranslations("home.cta");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <Badge variant="success" className="mb-6">
              Production AI
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("hero.title")}
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
                  <p className="text-gray-400 text-sm">{t("video.seeProducts")}</p>
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
                    <h3 className="font-semibold text-white mb-1">{t("video.battleTested")}</h3>
                    <p className="text-gray-400 text-sm">{t("video.battleTestedDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Shield className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t("video.enterpriseGrade")}</h3>
                    <p className="text-gray-400 text-sm">{t("video.enterpriseGradeDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Award className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t("video.provenRoi")}</h3>
                    <p className="text-gray-400 text-sm">{t("video.provenRoiDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Products - Alternating Layout */}
      <div className="space-y-0">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <Section
              key={product.id}
              variant={isEven ? "default" : "dark"}
              className="scroll-mt-24"
            >
              <div id={product.id}>
                <FadeInUp>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Video - alternates position */}
                    <div className={`${!isEven ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                          {/* Animated background with product gradient */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl animate-pulse`} />
                            <div className={`absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl animate-pulse`} style={{ animationDelay: "1s" }} />
                          </div>

                          {/* Play button */}
                          <div className="relative z-10 text-center px-6">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <Play size={28} className="text-white ml-1" />
                            </div>
                            <p className="text-gray-400 text-sm">{product.videoText}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Content - alternates position */}
                    <div className={`${!isEven ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {product.name}
                        </h2>
                        <Badge variant="live">Live</Badge>
                      </div>

                      <p className="text-lg text-gray-300 mb-2">
                        {product.tagline}
                      </p>

                      <p className="text-gray-400 mb-6">{product.description}</p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-slate-light/10">
                        {product.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold gradient-text">
                              {stat.value}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className={`w-1.5 h-1.5 bg-gradient-to-br ${product.gradient} rounded-full mt-1.5 shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      {product.external ? (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue-light transition-colors font-medium"
                        >
                          Visit {product.name}
                          <ArrowUpRight size={18} />
                        </a>
                      ) : (
                        <Button href={product.href} variant="secondary">
                          {tCommon("learnMore")}
                        </Button>
                      )}
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </Section>
          );
        })}
      </div>

      {/* Coming Soon */}
      <Section variant="dark">
        <FadeInUp>
          <Card
            variant="glass"
            className="p-8 md:p-12 border-electric-blue/20 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <Badge variant="info" className="mb-6">
                Launching Mid-2026
              </Badge>

              <div className="w-16 h-16 rounded-2xl gradient-future flex items-center justify-center mx-auto mb-6">
                <Rocket className="text-white" size={32} />
              </div>

              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">karriererakete.ai</span>
              </h2>

              <p className="text-xl text-gray-300 mb-3">
                {t("comingSoon.subtitle")}
              </p>

              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {t("comingSoon.description")}
              </p>

              <Button
                href="https://talentschmiede-ai.vercel.app/karriererakete"
                size="lg"
              >
                {tCommon("joinWaitlist")}
              </Button>
            </div>
          </Card>
        </FadeInUp>
      </Section>

      {/* CTA Section */}
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
