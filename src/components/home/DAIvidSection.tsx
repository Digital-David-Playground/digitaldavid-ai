"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { MessageSquare, Sparkles, Clock, Globe } from "lucide-react";

export function DAIvidSection() {
  const t = useTranslations("home.daivid");

  const features = [
    {
      icon: MessageSquare,
      label: t("naturalConversations"),
    },
    {
      icon: Clock,
      label: t("available247"),
    },
    {
      icon: Globe,
      label: t("multilingual"),
    },
    {
      icon: Sparkles,
      label: t("aiPowered"),
    },
  ];

  return (
    <Section variant="dark">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <FadeInUp>
          <div>
            <Badge variant="default" className="mb-6">
              {t("badge")}
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("title")}{" "}
              <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>

            <p className="text-xl text-gray-300 mb-3">
              {t("role")}
            </p>

            <p className="text-gray-400 mb-8 max-w-lg">
              {t("description")}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
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
              {t("clickToChat")}
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
                    {t("videoPlaceholder")}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {t("placeholderHint")}
                  </p>
                </div>
              </div>

              {/* Interactive Indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300">
                    {t("readyToChat")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </Section>
  );
}
