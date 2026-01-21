"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "feature" | "product" | "glass";
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hover = true,
}: CardProps) {
  const variants = {
    default: "bg-slate border border-slate-light/20",
    feature: "bg-midnight border border-slate-light/10",
    product: "bg-gradient-to-br from-slate to-midnight border border-slate-light/20",
    glass: "glass",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variants[variant],
        hover && "hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-xl font-semibold text-white", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-gray-400 leading-relaxed", className)}>{children}</p>
  );
}
