import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info" | "live";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-slate text-gray-300 border-slate-light/30",
    success: "bg-emerald/10 text-emerald border-emerald/30",
    warning: "bg-amber/10 text-amber border-amber/30",
    info: "bg-electric-blue/10 text-electric-blue border-electric-blue/30",
    live: "bg-emerald/20 text-emerald border-emerald/40 animate-pulse",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border",
        variants[variant],
        className
      )}
    >
      {variant === "live" && (
        <span className="w-2 h-2 bg-emerald rounded-full mr-2" />
      )}
      {children}
    </span>
  );
}
