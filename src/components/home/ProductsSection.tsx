"use client";

import React from "react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { ArrowUpRight, Users, ShieldCheck, Layers, Phone, Pill, Landmark, type LucideIcon } from "lucide-react";

interface ProductStat {
  value: string;
  label: string;
}

interface Product {
  name: string;
  tagline: string;
  icon: LucideIcon;
  gradient: string;
  stats: ProductStat[];
  features: string[];
  link: {
    href: string;
    label: string;
    external?: boolean;
  };
}

const products: Product[] = [
  {
    name: "Talenty.ai",
    tagline: "AI-Powered Recruiting Platform",
    icon: Users,
    gradient: "from-electric-blue to-cyan",
    stats: [
      { value: "70%", label: "faster hiring" },
      { value: "85%", label: "quality improvement" },
      { value: "63%", label: "cost savings" },
    ],
    features: [
      "Multi-agent candidate sourcing",
      "AI voice interviews via Talky",
      "RAG-powered matching",
      "Multi-channel orchestration",
    ],
    link: { href: "https://talenty.ai", label: "Visit Talenty.ai", external: true },
  },
  {
    name: "Talky",
    tagline: "AI Interview Automation",
    icon: Phone,
    gradient: "from-emerald to-cyan",
    stats: [
      { value: "75%", label: "time savings" },
      { value: "50+", label: "languages" },
      { value: "92%", label: "satisfaction" },
    ],
    features: [
      "Phone, video & WhatsApp interviews",
      "24/7 automated screening",
      "Real-time AI responses",
      "Instant candidate insights",
    ],
    link: { href: "https://talky.talenty.ai", label: "Visit Talky", external: true },
  },
  {
    name: "DocuGuard.ai",
    tagline: "GDPR Compliance Automation",
    icon: ShieldCheck,
    gradient: "from-purple to-electric-blue",
    stats: [
      { value: "90%", label: "effort reduction" },
      { value: "400K+", label: "docs processed" },
    ],
    features: [
      "Document classification",
      "Auto-redaction",
      "Compliance agents",
    ],
    link: { href: "/products/docuguard", label: "Learn More" },
  },
  {
    name: "Factify.ai",
    tagline: "AI Foundation Platform",
    icon: Layers,
    gradient: "from-cyan to-emerald",
    stats: [
      { value: "3", label: "AI Journeys" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    features: [
      "Customer Journey",
      "Legal Journey",
      "Market Intelligence",
    ],
    link: { href: "/products/factify", label: "Learn More" },
  },
  {
    name: "Factify Pharma",
    tagline: "Pharmaceutical AI Suite",
    icon: Pill,
    gradient: "from-purple to-electric-blue",
    stats: [
      { value: "65%", label: "faster processing" },
      { value: "98%", label: "entity accuracy" },
    ],
    features: [
      "Pharma Research",
      "CTD-AI Suite",
      "Study Management",
      "GxP Compliance",
    ],
    link: { href: "/products/factify-pharma", label: "Learn More" },
  },
  {
    name: "Factify Finance",
    tagline: "Banking & Insurance AI",
    icon: Landmark,
    gradient: "from-emerald to-cyan",
    stats: [
      { value: "70%", label: "faster claims" },
      { value: "95%", label: "fraud detection" },
    ],
    features: [
      "Insurance Operations",
      "Banking & Payments",
      "Investment & Wealth",
      "AML Compliance",
    ],
    link: { href: "/products/factify-finance", label: "Learn More" },
  },
];

export function ProductsSection() {
  return (
    <Section variant="dark">
      <SectionHeader
        title="Production AI - Live Today"
        subtitle="We don't just consult - we build and ship. These products serve customers right now."
        centered
      />

      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const IconComponent = product.icon;
          return (
            <StaggerItem key={product.name}>
              <div className="group relative h-full">
                <div className="relative h-full bg-slate/50 border border-slate-light/20 rounded-2xl p-6 transition-all duration-300 hover:border-electric-blue/30 hover:bg-slate/70">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <Badge variant="live">Live</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{product.tagline}</p>

                  <div className="flex gap-6 mb-6 pb-6 border-b border-slate-light/10">
                    {product.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-electric-blue rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {product.link.external ? (
                    <a
                      href={product.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue-light transition-colors text-sm font-medium"
                    >
                      {product.link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <a
                      href={product.link.href}
                      className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue-light transition-colors text-sm font-medium"
                    >
                      {product.link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
