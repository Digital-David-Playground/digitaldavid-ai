"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { href: "https://talenty.ai", label: "Talenty.ai", external: true },
  { href: "https://talky.talenty.ai", label: "Talky.ai", external: true },
  { href: "/products/docuguard", label: "DocuGuard.ai", external: false },
  { href: "/products/factify", label: "Factify.ai", external: false },
  { href: "/products/factify-pharma", label: "Factify Pharma", external: false },
  { href: "/products/factify-finance", label: "Factify Finance", external: false },
];

export function Footer() {
  const t = useTranslations("common.footer");

  const companyLinks = [
    { href: "/about", labelKey: "about" },
    { href: "/contact", labelKey: "contactLink" },
    { href: "/karriererakete", labelKey: "karriererakete" },
  ];

  const servicesLinks = [
    { href: "/engineering", labelKey: "aiEngineering" },
    { href: "/products", labelKey: "productsLink" },
  ];

  const legalLinks = [
    { href: "/legal/impressum", labelKey: "impressum" },
    { href: "/legal/privacy", labelKey: "privacy" },
  ];

  return (
    <footer className="bg-midnight border-t border-slate-light/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Digital</span>
                <span className="gradient-text">David</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs mb-4">
              {t("tagline")}
            </p>
            <p className="text-gray-500 text-sm">
              {t("location")}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("services")}</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("products")}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t("copyright")}{" "}
            <a
              href="https://www.dwg.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("dwg")}
            </a>
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
