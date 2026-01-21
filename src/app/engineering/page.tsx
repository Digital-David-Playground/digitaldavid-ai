import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FadeInUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/FadeInUp";
import { TechLogos } from "@/components/engineering/TechLogos";
import {
  Cpu,
  MessageSquare,
  FileSearch,
  Workflow,
  Layers,
  ArrowRight,
  Play,
  CheckCircle,
  Zap,
  Shield,
  Code2,
  Building2,
  Users,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Engineering | Digital David",
  description:
    "We architect, build, and deploy AI systems. Agentic AI, LLM engineering, conversational AI, and document intelligence.",
};

const competencies = [
  {
    icon: Cpu,
    title: "Agentic AI Systems",
    description:
      "Multi-agent orchestration, agent control planes, MCP integration, and workflow automation for enterprise.",
    skills: [
      "Multi-agent orchestration",
      "Agent control planes",
      "MCP integration",
      "Workflow automation",
    ],
  },
  {
    icon: Layers,
    title: "LLM Engineering",
    description:
      "RAG systems, fine-tuning, prompt engineering, model selection, and vector database integration.",
    skills: [
      "RAG systems",
      "Fine-tuning",
      "Prompt engineering",
      "LangChain / LlamaIndex",
      "Vector databases",
    ],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Voice agents, chat systems, multi-channel deployment, and 50+ language support.",
    skills: [
      "Voice agents",
      "Chat systems",
      "Multi-channel",
      "50+ languages",
    ],
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description:
      "Classification, entity extraction, compliance automation, and OCR processing.",
    skills: [
      "Classification",
      "Entity extraction",
      "Compliance",
      "OCR/processing",
    ],
  },
  {
    icon: Workflow,
    title: "AI Product Development",
    description:
      "Full-stack AI products, white-label solutions, and platform architecture.",
    skills: [
      "Full-stack AI products",
      "White-label solutions",
      "Platform architecture",
    ],
  },
  {
    icon: ArrowRight,
    title: "AI Transformation",
    description:
      "Strategy development, roadmapping, team training, governance, and scale operations.",
    skills: ["Strategy", "Roadmapping", "Training", "Governance", "Scale ops"],
  },
];

const techStack = {
  models: ["Azure OpenAI", "GPT-4/5", "Claude", "Mistral"],
  frameworks: ["LangChain", "LlamaIndex", "Semantic Kernel"],
  infra: ["Azure", "Vercel", "AWS", "Pinecone", "Weaviate"],
  tools: ["GitHub", "MLflow", "DevOps", "MCP"],
};

const process = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your business context and AI potential",
  },
  {
    step: "02",
    title: "Architect",
    description: "Design the AI system architecture",
  },
  {
    step: "03",
    title: "Build",
    description: "Ship working AI in weeks, not months",
  },
  {
    step: "04",
    title: "Scale",
    description: "Operate, monitor, optimize",
  },
];

export default function EngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              AI Engineering
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Engineering
              <br />
              <span className="gradient-text">for the Agentic Era</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl">
              We don&apos;t advise. We architect, build, and deploy. Production AI
              systems that work from day one.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Video & Summary Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <FadeInUp>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">Watch how we work</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Summary */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Engineering AI That <span className="gradient-text">Actually Works</span>
              </h2>

              <p className="text-gray-400 mb-8">
                We&apos;re not consultants who hand over slide decks. We&apos;re engineers who
                build production AI systems. From multi-agent orchestration to document
                intelligence, we ship working solutions in weeks, not months.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Zap className="text-electric-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Ship Fast</h3>
                    <p className="text-gray-400 text-sm">Days to first value. Working prototypes, not PowerPoints.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <Shield className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Production Ready</h3>
                    <p className="text-gray-400 text-sm">Enterprise-grade security, scalability, and reliability built in.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Code2 className="text-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Full Ownership</h3>
                    <p className="text-gray-400 text-sm">Your code, your IP, your infrastructure. No vendor lock-in.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Competencies */}
      <Section>
        <SectionHeader
          title="Our Competencies"
          subtitle="Deep expertise in the technologies that matter for 2026 and beyond."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, index) => (
            <StaggerItem key={index}>
              <Card variant="feature" className="h-full">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <comp.icon className="text-white" size={20} />
                </div>
                <CardTitle className="mb-2">{comp.title}</CardTitle>
                <CardDescription className="mb-4">
                  {comp.description}
                </CardDescription>
                <ul className="space-y-1">
                  {comp.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-electric-blue rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* AI Ecosystem Logos */}
      <Section variant="dark" className="!py-0">
        <TechLogos />
      </Section>

      {/* Tech Stack */}
      <Section variant="dark">
        <SectionHeader title="Our Tech Stack" centered />

        <FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-gray-500 uppercase text-sm font-mono mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          title="How We Work"
          subtitle="Days to first value. Not months."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-light mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </Section>

      {/* CTA Section with Video */}
      <Section variant="gradient" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Headline */}
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-electric-blue" />
                <span className="text-sm text-gray-300">We build AI, but we talk human to human</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Build the <span className="gradient-text">Future</span>?
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Behind every AI solution is a conversation. Let&apos;s start yours.
              </p>
            </div>
          </FadeInUp>

          {/* Video */}
          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                  {/* Animated background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      See Our Engineering in Action
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      From concept to production in weeks
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

          {/* CTA Cards */}
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card variant="product" className="h-full flex flex-col border-electric-blue/30">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                </div>
                <CardTitle className="mb-3">For Enterprises</CardTitle>
                <CardDescription className="flex-grow mb-6">
                  Let&apos;s discuss how AI engineering can transform your operations. Book a 30-minute discovery call.
                </CardDescription>
                <Button href="/contact" variant="primary" className="w-full">
                  Book a Discovery Call
                </Button>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card variant="feature" className="h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-light flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                </div>
                <CardTitle className="mb-3">For Talents</CardTitle>
                <CardDescription className="flex-grow mb-6">
                  Join the AI engineering revolution. Explore opportunities with karriererakete.ai.
                </CardDescription>
                <Button href="https://talentschmiede-ai.vercel.app/karriererakete" variant="secondary" className="w-full">
                  karriererakete.ai
                </Button>
              </Card>
            </StaggerItem>
          </StaggerChildren>

          {/* Bottom tagline */}
          <FadeInUp delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-12">
              No chatbots. No forms disappearing into the void. Real conversations with real engineers.
            </p>
          </FadeInUp>
        </div>
      </Section>
    </>
  );
}
