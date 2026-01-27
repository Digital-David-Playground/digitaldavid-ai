"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/engineering", labelKey: "engineering" },
  { href: "/services", labelKey: "services" },
  { href: "/products", labelKey: "products" },
  { href: "/about", labelKey: "about" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("common.nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Digital David Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold">
            <span className="text-white">Digital</span>
            <span className="gradient-text">David</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Button href="/contact" size="sm">
            {t("contact")}
          </Button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <Button href="/contact" className="mt-4">
              {t("contact")}
            </Button>
            <div className="mt-2 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
