"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { Cpu, Box, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Agentic Systems",
    description:
      "Multi-agent orchestration for enterprise. We build autonomous AI systems that reason, plan, and execute complex workflows.",
    href: "/engineering",
    cta: "Learn More",
  },
  {
    icon: Box,
    title: "AI Products",
    description:
      "Production-ready AI platforms. From recruiting automation to document intelligence - we ship AI that works.",
    href: "/products",
    cta: "Explore",
  },
  {
    icon: ArrowUpRight,
    title: "AI Transformation",
    description:
      "Strategy to scale operations. We guide enterprises from AI experimentation to production deployment.",
    href: "/contact",
    cta: "Talk to Us",
  },
];

export function EngineeringSection() {
  return (
    <Section>
      <SectionHeader
        title="What We Engineer"
        subtitle="Three pillars of our work. Clean, focused, production-obsessed."
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
