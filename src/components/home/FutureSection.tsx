"use client";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { Rocket } from "lucide-react";

export function FutureSection() {
  return (
    <Section>
      <FadeInUp>
        <div className="flex items-center gap-3 mb-8">
          <Badge variant="info">Launching Mid-2026</Badge>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <Card
          variant="glass"
          className="p-8 md:p-12 border-electric-blue/20 glow-blue"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl gradient-future flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-white" size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">karriererakete.ai</span>
            </h2>

            <p className="text-xl text-gray-300 mb-3">
              Our Next AI Product: The Career Community
            </p>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              AI-powered career coaching meets community. Where talents find their tribe,
              companies build authentic connections, and AI guides every step.
            </p>

            <Button
              href="https://talentschmiede-ai.vercel.app/karriererakete"
              size="lg"
            >
              Join the Waitlist
            </Button>

            <p className="text-gray-500 text-sm mt-8">
              Built on Talentschmiede&apos;s proven model - 1,000+ talents placed,
              92% retention, €25,000 training investment each.
            </p>
          </div>
        </Card>
      </FadeInUp>
    </Section>
  );
}
