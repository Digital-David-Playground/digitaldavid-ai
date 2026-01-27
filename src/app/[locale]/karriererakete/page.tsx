import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { Rocket, Users, Brain, Gamepad2, Target, GraduationCap } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "karriererakete.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/karriererakete", locale),
  };
}

const featureIcons = [Brain, Users, Target, Gamepad2, Rocket, GraduationCap];

const featureKeys = [
  { titleKey: "coachTitle", descKey: "coachDesc" },
  { titleKey: "communityTitle", descKey: "communityDesc" },
  { titleKey: "ambassadorsTitle", descKey: "ambassadorsDesc" },
  { titleKey: "gamifiedTitle", descKey: "gamifiedDesc" },
  { titleKey: "matchingTitle", descKey: "matchingDesc" },
  { titleKey: "learningTitle", descKey: "learningDesc" },
] as const;

export default async function KarrierraketenPage() {
  const t = await getTranslations("karriererakete");
  const tCommon = await getTranslations("common.cta");
  const tFuture = await getTranslations("home.future");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-purple/5 to-cyan/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              {tFuture("badge")}
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
              {t("hero.subtitle")}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              {t("hero.description")}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <Button
              href="https://talentschmiede-ai.vercel.app/karriererakete"
              size="lg"
            >
              {tCommon("joinWaitlist")}
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Features */}
      <Section>
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <StaggerItem key={index}>
                <Card variant="feature" className="h-full">
                  <div className="w-10 h-10 rounded-lg gradient-future flex items-center justify-center mb-4">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`features.${feature.titleKey}`)}
                  </h3>
                  <p className="text-gray-400 text-sm">{t(`features.${feature.descKey}`)}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Built on Proven Foundation */}
      <Section variant="dark">
        <FadeInUp>
          <Card variant="glass" className="p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t("foundation.title")}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {t("foundation.description")}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold gradient-text">1,000+</div>
                <div className="text-gray-500 text-sm">{t("foundation.talentsPlaced")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">92%</div>
                <div className="text-gray-500 text-sm">{t("foundation.retentionRate")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">&euro;25K</div>
                <div className="text-gray-500 text-sm">{t("foundation.trainingPerTalent")}</div>
              </div>
            </div>

            <Button
              href="https://talentschmiede-ai.vercel.app/karriererakete"
              size="lg"
            >
              {tCommon("getStarted")}
            </Button>
          </Card>
        </FadeInUp>
      </Section>
    </>
  );
}
