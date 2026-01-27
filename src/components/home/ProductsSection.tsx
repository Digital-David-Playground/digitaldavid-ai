"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { ArrowUpRight, Users, ShieldCheck, Layers, Phone, Pill, Landmark, type LucideIcon } from "lucide-react";

interface Product {
  key: string;
  icon: LucideIcon;
  gradient: string;
  statValues: string[];
  featureCount: number;
  link: {
    href: string;
    external?: boolean;
  };
}

const products: Product[] = [
  {
    key: "talenty",
    icon: Users,
    gradient: "from-electric-blue to-cyan",
    statValues: ["70%", "85%", "63%"],
    featureCount: 4,
    link: { href: "https://talenty.ai", external: true },
  },
  {
    key: "talky",
    icon: Phone,
    gradient: "from-emerald to-cyan",
    statValues: ["75%", "50+", "92%"],
    featureCount: 4,
    link: { href: "https://talky.talenty.ai", external: true },
  },
  {
    key: "docuguard",
    icon: ShieldCheck,
    gradient: "from-purple to-electric-blue",
    statValues: ["90%", "400K+"],
    featureCount: 3,
    link: { href: "/products/docuguard" },
  },
  {
    key: "factify",
    icon: Layers,
    gradient: "from-cyan to-emerald",
    statValues: ["3", "99.9%"],
    featureCount: 3,
    link: { href: "/products/factify" },
  },
  {
    key: "factifyPharma",
    icon: Pill,
    gradient: "from-purple to-electric-blue",
    statValues: ["65%", "98%"],
    featureCount: 4,
    link: { href: "/products/factify-pharma" },
  },
  {
    key: "factifyFinance",
    icon: Landmark,
    gradient: "from-emerald to-cyan",
    statValues: ["70%", "95%"],
    featureCount: 4,
    link: { href: "/products/factify-finance" },
  },
];

export function ProductsSection() {
  const t = useTranslations("home.products");

  return (
    <Section variant="dark">
      <SectionHeader
        title={t("title")}
        subtitle={t("subtitle")}
        centered
      />

      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const IconComponent = product.icon;
          const stats = product.statValues.map((value, i) => ({
            value,
            label: t(`${product.key}.stat${i + 1}`),
          }));
          const features = Array.from({ length: product.featureCount }, (_, i) =>
            t(`${product.key}.feature${i + 1}`)
          );

          return (
            <StaggerItem key={product.key}>
              <div className="group relative h-full">
                <div className="relative h-full bg-slate/50 border border-slate-light/20 rounded-2xl p-6 transition-all duration-300 hover:border-electric-blue/30 hover:bg-slate/70">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <Badge variant="live">{t("live")}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{t(`${product.key}.name`)}</h3>
                  <p className="text-gray-400 text-sm mb-6">{t(`${product.key}.tagline`)}</p>

                  <div className="flex gap-6 mb-6 pb-6 border-b border-slate-light/10">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {features.map((feature) => (
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
                      {t(`${product.key}.link`)}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <Link
                      href={product.link.href}
                      className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue-light transition-colors text-sm font-medium"
                    >
                      {t(`${product.key}.link`)}
                      <ArrowUpRight size={14} />
                    </Link>
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
