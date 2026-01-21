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
import {
  Compass,
  Route,
  Settings2,
  Shield,
  Workflow,
  Users,
  Brain,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  MessageCircle,
  Building2,
  Sparkles,
  GraduationCap,
  FileCheck,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Digital David",
  description:
    "High-end AI engineering consultancy. Strategic AI consulting, team ramp-up, methodology frameworks, AI transformation, and enterprise-grade AI implementation.",
};

const services = [
  {
    id: "strategy",
    icon: Compass,
    title: "AI Strategy Development",
    tagline: "From vision to value creation",
    description:
      "We develop enterprise-specific AI strategies aligned with your business goals. We help formulate a clear AI vision, identify high-impact use cases, and create a roadmap that delivers measurable results.",
    deliverables: [
      "AI vision and opportunity assessment",
      "Use case prioritization matrix",
      "Business case with ROI projections",
      "Executive readiness workshop",
    ],
    gradient: "from-electric-blue to-cyan",
  },
  {
    id: "roadmap",
    icon: Route,
    title: "AI Roadmaps & Planning",
    tagline: "Structured path to AI adoption",
    description:
      "Detailed implementation roadmaps that prioritize use cases, define milestones, and incorporate change management. We ensure your AI journey is systematic, achievable, and aligned with organizational capacity.",
    deliverables: [
      "Phased implementation plan",
      "Technology stack recommendations",
      "Resource and skill gap analysis",
      "Risk mitigation framework",
    ],
    gradient: "from-purple to-electric-blue",
  },
  {
    id: "transformation",
    icon: Sparkles,
    title: "AI Transformation",
    tagline: "Enterprise-wide AI integration",
    description:
      "Comprehensive support for organization-wide AI transformation. We build AI competencies, train teams, and manage change so AI becomes an integral part of your business processes.",
    deliverables: [
      "AI Center of Excellence setup",
      "Operating model design",
      "Skills framework and training",
      "Change management program",
    ],
    gradient: "from-cyan to-emerald",
  },
  {
    id: "team-ramp",
    icon: Users,
    title: "Team Ramp-Up",
    tagline: "Build your AI capability",
    description:
      "Accelerate your internal AI capabilities with embedded experts who work alongside your team. Knowledge transfer, hands-on coaching, and practical skills development.",
    deliverables: [
      "Embedded AI engineers",
      "Pair programming and mentoring",
      "Technical architecture guidance",
      "Best practices documentation",
    ],
    gradient: "from-emerald to-cyan",
  },
  {
    id: "mlops",
    icon: Workflow,
    title: "MLOps & AI Operations",
    tagline: "Production-grade AI systems",
    description:
      "Implement MLOps best practices for productive AI operations. We automate the ML lifecycle from data preparation through training, deployment, and continuous monitoring.",
    deliverables: [
      "CI/CD pipelines for ML",
      "Model monitoring and observability",
      "Automated retraining workflows",
      "Infrastructure optimization",
    ],
    gradient: "from-electric-blue to-purple",
  },
  {
    id: "governance",
    icon: Shield,
    title: "AI Governance & Ethics",
    tagline: "Responsible AI at scale",
    description:
      "Advisory on responsible AI deployment aligned with data privacy, regulation, and ethics. We establish robust AI governance structures that minimize risk and build trust.",
    deliverables: [
      "AI governance framework",
      "Risk assessment methodology",
      "Compliance documentation",
      "Bias detection and mitigation",
    ],
    gradient: "from-purple to-cyan",
  },
];

const methodology = [
  {
    phase: "01",
    title: "Discover",
    description: "Deep dive into your business context, current capabilities, and AI potential.",
    activities: ["Stakeholder interviews", "Data landscape assessment", "Opportunity mapping"],
  },
  {
    phase: "02",
    title: "Design",
    description: "Architect the solution, define the approach, and align on success metrics.",
    activities: ["Solution architecture", "Technology selection", "Success metrics definition"],
  },
  {
    phase: "03",
    title: "Deliver",
    description: "Iterative implementation with continuous validation and stakeholder engagement.",
    activities: ["Agile sprints", "Stakeholder demos", "Quality assurance"],
  },
  {
    phase: "04",
    title: "Scale",
    description: "Operationalize, transfer knowledge, and enable continuous improvement.",
    activities: ["Knowledge transfer", "Documentation", "Optimization roadmap"],
  },
];

const differentiators = [
  {
    icon: Brain,
    title: "Deep AI Expertise",
    description: "Specialized engineers in ML, data engineering, and modern AI architectures. We solve complex challenges others can't.",
  },
  {
    icon: Target,
    title: "Industry Know-How",
    description: "Focused expertise in HR Tech, Finance, Healthcare, Legal Tech, and Pharma. We understand your domain.",
  },
  {
    icon: Layers,
    title: "End-to-End Capability",
    description: "From strategy through implementation to operations. One partner for your entire AI journey.",
  },
  {
    icon: GraduationCap,
    title: "Boutique Approach",
    description: "Selected projects with highest care. Direct access to senior experts, not junior consultants.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-space to-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <Badge variant="info" className="mb-6">
              High-End AI Consultancy
            </Badge>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic AI
              <br />
              <span className="gradient-text">Engineering Services</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl">
              We&apos;re not generalists. We&apos;re specialized AI engineers who help
              enterprises navigate the complexity of AI adoption and scale.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Video & Value Prop Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <FadeInUp>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm">Our consulting approach</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInUp>

          {/* Value Proposition */}
          <FadeInUp delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                AI Consulting <span className="gradient-text">That Delivers</span>
              </h2>

              <p className="text-gray-400 mb-8">
                Most AI initiatives fail not because of technology, but because of
                strategy, execution, and change management. We bring the engineering
                depth to make AI work and the consulting expertise to make it stick.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">Strategy grounded in technical reality</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">Hands-on engineers, not slide deck consultants</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">Knowledge transfer and capability building</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-electric-blue shrink-0" size={20} />
                  <span className="text-gray-300">Long-term partnership, not project churn</span>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Services Grid */}
      <Section variant="dark">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive AI consulting services designed for enterprise complexity."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Card variant="feature" className="h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <p className="text-electric-blue text-sm mb-3">{service.tagline}</p>
                  <CardDescription className="mb-4 flex-grow">
                    {service.description}
                  </CardDescription>
                  <div className="pt-4 border-t border-slate-light/10">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <ArrowRight size={12} className="text-electric-blue mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Methodology */}
      <Section>
        <SectionHeader
          title="Our Methodology"
          subtitle="A structured approach that balances rigor with agility."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((phase, index) => (
            <StaggerItem key={index}>
              <div className="relative">
                <div className="text-6xl font-bold text-slate-light/30 mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {phase.description}
                </p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-electric-blue rounded-full" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Why Us */}
      <Section variant="dark">
        <SectionHeader
          title="Why Digital David"
          subtitle="What sets our consulting apart from traditional firms."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-light/30 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-electric-blue" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Engagement Models */}
      <Section>
        <SectionHeader
          title="Engagement Models"
          subtitle="Flexible ways to work together based on your needs."
          centered
        />

        <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StaggerItem>
            <Card variant="feature" className="h-full text-center">
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-electric-blue" size={24} />
              </div>
              <CardTitle className="mb-3">Advisory</CardTitle>
              <CardDescription>
                Strategic guidance and expert review. Ideal for validation, second opinions, and executive-level AI strategy.
              </CardDescription>
              <p className="text-gray-500 text-sm mt-4">Retainer or project-based</p>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="product" className="h-full text-center border-electric-blue/30">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <CardTitle className="mb-3">Embedded Teams</CardTitle>
              <CardDescription>
                Our engineers work alongside your team. Full integration, knowledge transfer, and capability building.
              </CardDescription>
              <p className="text-electric-blue text-sm mt-4">Most popular</p>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="feature" className="h-full text-center">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mx-auto mb-4">
                <Settings2 className="text-purple" size={24} />
              </div>
              <CardTitle className="mb-3">Managed Delivery</CardTitle>
              <CardDescription>
                End-to-end project ownership. We take full responsibility for delivering defined outcomes.
              </CardDescription>
              <p className="text-gray-500 text-sm mt-4">Fixed scope or T&M</p>
            </Card>
          </StaggerItem>
        </StaggerChildren>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate/50 border border-slate-light/20 rounded-full mb-6">
                <MessageCircle size={16} className="text-electric-blue" />
                <span className="text-sm text-gray-300">We build AI, but we talk human to human</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Transform <span className="gradient-text">Your AI Capability</span>?
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Let&apos;s discuss how our consulting services can accelerate your AI journey.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-light/20 bg-slate/30 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-midnight to-slate flex items-center justify-center">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative z-10 text-center px-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      See Our Consulting in Action
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      How we helped enterprises transform with AI
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </FadeInUp>

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
                  Book a discovery call to discuss your AI challenges and how we can help.
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
