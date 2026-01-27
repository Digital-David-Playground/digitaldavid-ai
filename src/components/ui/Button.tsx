"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Link } from "@/i18n/routing";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out-expo focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-deep-space disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "gradient-primary text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-electric-blue/25 active:scale-[0.98]",
      secondary:
        "border border-electric-blue text-electric-blue bg-transparent hover:bg-electric-blue/10 active:bg-electric-blue/20",
      ghost:
        "text-electric-blue hover:text-electric-blue-light hover:underline underline-offset-4",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 rounded-lg",
      md: "text-base px-6 py-3 rounded-xl",
      lg: "text-lg px-8 py-4 rounded-xl",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      // External links use plain <a>
      if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      // Internal links use locale-aware Link
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
