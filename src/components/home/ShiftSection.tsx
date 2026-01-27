"use client";

import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Stat, StatGrid } from "@/components/ui/Stat";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";

export function ShiftSection() {
  const t = useTranslations("home.shift");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <Section variant="dark">
      <FadeInUp>
        <SectionHeader
          title={t("title")}
          centered
        />
      </FadeInUp>

      <StaggerChildren className="mb-16">
        <StatGrid>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <Stat value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </StatGrid>
      </StaggerChildren>

      <FadeInUp delay={0.4}>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {t("experimenting")}
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {t("shipping")}
          </p>
        </div>
      </FadeInUp>
    </Section>
  );
}
