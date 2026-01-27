"use client";

import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { Cpu, Box, ArrowUpRight } from "lucide-react";

export function EngineeringSection() {
  const t = useTranslations("home.engineering");
  const tc = useTranslations("common.cta");

  const pillars = [
    {
      icon: Cpu,
      title: t("agenticTitle"),
      description: t("agenticDesc"),
      href: "/engineering",
      cta: tc("learnMore"),
    },
    {
      icon: Box,
      title: t("productsTitle"),
      description: t("productsDesc"),
      href: "/products",
      cta: tc("explore"),
    },
    {
      icon: ArrowUpRight,
      title: t("transformTitle"),
      description: t("transformDesc"),
      href: "/contact",
      cta: tc("talkToUs"),
    },
  ];

  return (
    <Section>
      <SectionHeader
        title={t("title")}
        subtitle={t("subtitle")}
        centered
      />

      <StaggerChildren className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <StaggerItem key={index}>
            <Card variant="feature" className="h-full flex flex-col">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <pillar.icon className="text-white" size={24} />
                </div>
              </div>
              <CardTitle className="mb-3">{pillar.title}</CardTitle>
              <CardDescription className="flex-grow mb-6">
                {pillar.description}
              </CardDescription>
              <Button href={pillar.href} variant="ghost" className="self-start">
                {pillar.cta} →
              </Button>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
