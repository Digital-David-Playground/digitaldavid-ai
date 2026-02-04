"use client";

import { FadeInUp } from "@/components/animations/FadeInUp";

// Using jsdelivr CDN for Simple Icons - more reliable
// https://simpleicons.org/
const techPartners = [
  // Row 1 - AI Models & Cloud
  { name: "OpenAI", slug: "openai" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Meta", slug: "meta" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "LangChain", slug: "langchain" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
  { name: "Docker", slug: "docker" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Supabase", slug: "supabase" },
  { name: "Cloudflare", slug: "cloudflare" },
];

const techPartnersRow2 = [
  // Row 2 - Tools & Platforms
  { name: "Python", slug: "python" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Redis", slug: "redis" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Terraform", slug: "terraform" },
  { name: "Grafana", slug: "grafana" },
  { name: "Datadog", slug: "datadog" },
  { name: "Stripe", slug: "stripe" },
];

function LogoIcon({ slug, name }: { slug: string; name: string }) {
  // Using jsdelivr CDN with Simple Icons package
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

  return (
    <div
      className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        WebkitMaskImage: `url(${iconUrl})`,
        maskImage: `url(${iconUrl})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        backgroundColor: 'white',
      }}
      aria-label={name}
    />
  );
}

export function TechLogos() {
  // Duplicate for seamless loop
  const duplicatedRow1 = [...techPartners, ...techPartners];
  const duplicatedRow2 = [...techPartnersRow2, ...techPartnersRow2];

  return (
    <div className="py-8 overflow-hidden">
      <FadeInUp>
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
          Building with the AI ecosystem
        </p>
      </FadeInUp>

      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex animate-scroll-left mb-4">
          {duplicatedRow1.map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-3"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate/30 border border-slate-light/10 hover:border-electric-blue/30 transition-all duration-300 group hover:bg-slate/50">
                <LogoIcon slug={partner.slug} name={partner.name} />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium whitespace-nowrap text-sm">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex animate-scroll-right">
          {duplicatedRow2.map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-3"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate/30 border border-slate-light/10 hover:border-purple/30 transition-all duration-300 group hover:bg-slate/50">
                <LogoIcon slug={partner.slug} name={partner.name} />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium whitespace-nowrap text-sm">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
