import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "gradient";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-deep-space",
    dark: "bg-midnight",
    gradient: "bg-gradient-to-b from-deep-space to-midnight",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variants[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
