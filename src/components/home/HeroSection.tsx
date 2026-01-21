"use client";

import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/animations/ParticleBackground";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space to-midnight" />
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <FadeInUp>
          <p className="text-electric-blue font-mono text-sm md:text-base mb-6 tracking-wider">
            AI ENGINEERING FOR THE AGENTIC ERA
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            We Engineer
            <br />
            <span className="gradient-text">The Future.</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We architect, build, and deploy AI systems that work.
            Multi-agent orchestration, LLM engineering, and production-ready AI products.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/engineering" size="lg">
              Explore Our Work
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Call
            </Button>
          </div>
        </FadeInUp>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={32} />
      </div>
    </section>
  );
}
