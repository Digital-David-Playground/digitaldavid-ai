"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("de")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "de"
            ? "text-white font-semibold"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        DE
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-white font-semibold"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
