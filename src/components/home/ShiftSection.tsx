"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { Stat, StatGrid } from "@/components/ui/Stat";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";

const stats = [
  { value: "40%", label: "Enterprise apps embed AI agents by 2026" },
  { value: "$52B", label: "Agentic AI market by 2030" },
  { value: "155%", label: "NLP demand growth" },
];

export function ShiftSection() {
  return (
    <Section variant="dark">
      <FadeInUp>
        <SectionHeader
          title="2026: The Year AI Gets Real"
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
            Most companies are experimenting.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white">
            We&apos;re shipping.
          </p>
        </div>
      </FadeInUp>
    </Section>
  );
}
