// app/providers.tsx
"use client";

import { LazyI18nProvider, LanguageCodeToTranslations } from "i18n-lazy";

import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import de from "../locales/de.json";

export const codeToLanguage: LanguageCodeToTranslations = {
  en: en,
  de: de,
  es: es,
  fr: fr,
};

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyI18nProvider localeCode="en" translationsObject={codeToLanguage["en"]}>
      {children}
    </LazyI18nProvider>
  );
}
