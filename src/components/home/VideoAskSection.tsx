"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { FadeInUp } from "@/components/animations/FadeInUp";

export function VideoAskSection() {
  const t = useTranslations("home.videoask");

  return (
    <Section className="py-24 bg-midnight/50">
      <FadeInUp>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium mb-6">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.videoask.com/fi7yx23t1"
            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
            width="100%"
            height="600"
            style={{
              border: "none",
              borderRadius: "24px",
              minWidth: "100%",
              maxWidth: "1024px",
              margin: "0 auto",
              display: "block",
            }}
            title="Digital David VideoAsk"
          />
        </div>
      </FadeInUp>
    </Section>
  );
}
