"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 rounded-lg border border-border bg-white/90 px-3 py-1 text-sm font-medium text-foreground shadow-sm backdrop-blur transition-all duration-300 hover:border-accent/30 hover:bg-white"
      aria-label="Toggle language"
    >
      {language === "de" ? "EN" : "DE"}
    </button>
  );
}
