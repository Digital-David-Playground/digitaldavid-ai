"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animations/FadeInUp";
import { Building2, Users, Play, MessageCircle, Sparkles } from "lucide-react";

export function CTASection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const t = useTranslations("home.cta");
  const tc = useTranslations("common.cta");

  const ctaOptions = [
    {
      icon: Building2,
      title: t("enterpriseTitle"),
      description: t("enterpriseDesc"),
      cta: tc("bookCall"),
      href: "/contact",
      primary: true,
    },
    {
      icon: Users,
      title: t("talentTitle"),
      description: t("talentDesc"),
      cta: "karriererakete.ai",
      href: "https://talentschmiede-ai.vercel.app/karriererakete",
      primary: false,
    },
  ];

  return (
    <Section variant="gradient" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Main headline with emphasis */}
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
              <MessageCircle size={16} className="text-electric-blue" />
              <span className="text-sm text-gray-300">{t("badge")}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>?
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </FadeInUp>

        {/* Video/Interactive element */}
        <FadeInUp delay={0.2}>
          <div className="mb-16">
            <div
              className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer"
              onClick={() => setIsVideoPlaying(true)}
            >
              {!isVideoPlaying ? (
                <>
                  {/* Video placeholder/thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse delay-1000" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {t("videoTitle")}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">
                        {t("videoSubtitle")}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-deep-space">
                  {/* Video placeholder - replace with actual video embed */}
                  <div className="text-center">
                    <Sparkles size={48} className="text-electric-blue mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-400">{t("videoComingSoon")}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoPlaying(false);
                      }}
                      className="mt-4 text-sm text-electric-blue hover:underline"
                    >
                      {tc("close")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeInUp>

        {/* CTA Cards */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => (
            <StaggerItem key={index}>
              <Card
                variant={option.primary ? "product" : "feature"}
                className={`h-full flex flex-col ${
                  option.primary ? "border-electric-blue/30" : ""
                }`}
              >
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      option.primary ? "gradient-primary" : "bg-slate-light"
                    }`}
                  >
                    <option.icon className="text-white" size={24} />
                  </div>
                </div>
                <CardTitle className="mb-3">{option.title}</CardTitle>
                <CardDescription className="flex-grow mb-6">
                  {option.description}
                </CardDescription>
                <Button
                  href={option.href}
                  variant={option.primary ? "primary" : "secondary"}
                  className="w-full"
                >
                  {option.cta}
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom tagline */}
        <FadeInUp delay={0.4}>
          <p className="text-center text-gray-500 text-sm mt-12">
            {t("bottomTagline")}
          </p>
        </FadeInUp>
      </div>
    </Section>
  );
}
