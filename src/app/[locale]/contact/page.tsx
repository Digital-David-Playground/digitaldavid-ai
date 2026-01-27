import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/lib/metadata";
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/contact", locale),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common.cta");
  const tHomeCta = await getTranslations("home.cta");

  const tDaivid = await getTranslations("home.daivid");

  const daividFeatures = [
    { icon: MessageSquare, label: tDaivid("naturalConversations") },
    { icon: Clock, label: tDaivid("available247") },
    { icon: Globe, label: tDaivid("multilingual") },
    { icon: Sparkles, label: tDaivid("aiPowered") },
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

      {/* DAIvid Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <FadeInUp>
            <div>
              <Badge variant="info" className="mb-6">
                {t("daivid.badge")}
              </Badge>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {t("daivid.title")}{" "}
                <span className="gradient-text">{t("daivid.titleHighlight")}</span>
              </h2>

              <p className="text-xl text-gray-300 mb-3">
                {t("daivid.role")}
              </p>

              <p className="text-gray-400 mb-8 max-w-lg">
                {t("daivid.description")}
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
                {t("daivid.clickToChat")}
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
                      {t("daivid.videoPlaceholder")}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {t("daivid.placeholderHint")}
                    </p>
                  </div>
                </div>

                {/* Interactive Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">
                      {t("daivid.readyToChat")}
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
                {t("form.title")}
              </h2>
              <p className="text-gray-400 mb-8">
                {t("form.subtitle")}
              </p>

              <ContactForm />
            </div>
          </FadeInUp>

          {/* Right: Contact Info */}
          <FadeInUp delay={0.2}>
            <div className="lg:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t("info.title")}
              </h2>
              <p className="text-gray-400 mb-8">
                {t("info.subtitle")}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <Card variant="feature" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center shrink-0">
                      <Mail className="text-electric-blue" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-1 text-lg">{t("info.email")}</CardTitle>
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
                      <CardTitle className="mb-1 text-lg">{t("info.phone")}</CardTitle>
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
                      <CardTitle className="mb-1 text-lg">{t("info.office")}</CardTitle>
                      <p className="text-gray-400">
                        Digital David AG
                        <br />
                        Weserstra&szlig;e 4
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
          title={t("quickActions.title")}
          subtitle={t("quickActions.subtitle")}
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
              <CardTitle className="mb-3">{tHomeCta("enterpriseTitle")}</CardTitle>
              <CardDescription className="flex-grow mb-6">
                {t("quickActions.enterpriseDesc")}
              </CardDescription>
              <Button
                href="mailto:hello@digitaldavid.io?subject=Discovery Call Request"
                variant="primary"
                className="w-full"
              >
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
                {t("quickActions.talentDesc")}
              </CardDescription>
              <Button
                href="https://talentschmiede-ai.vercel.app/karriererakete"
                variant="secondary"
                className="w-full"
              >
                {t("quickActions.joinKarriererakete")}
              </Button>
            </Card>
          </StaggerItem>
        </StaggerChildren>

        <FadeInUp delay={0.3}>
          <p className="text-center text-gray-500 text-sm mt-12">
            {tHomeCta("bottomTagline")}
          </p>
        </FadeInUp>
      </Section>
    </>
  );
}
