"use client";

import React from "react";
import TranslationProviderWrapper from "@/providers/TranslationProviderWrapper";
import { useLanguage } from "@/Context/Language/LanguageContext";

const i18nNamespaces = ["common"];

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const { locale } = useLanguage();

  return (
    <TranslationProviderWrapper locale={locale} namespaces={i18nNamespaces}>
      {children}
    </TranslationProviderWrapper>
  );
}
