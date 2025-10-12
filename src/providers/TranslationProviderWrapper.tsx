"use client";

import React, { useEffect, useState } from "react";

import initTranslations, { Namespaces, Resources } from "../utils/i18n";
import TranslationsProvider from "./translation-provider";

interface TranslationProviderWrapperProps {
  children: React.ReactNode;
  locale: string;
  namespaces: Namespaces;
}

const TranslationProviderWrapper: React.FC<TranslationProviderWrapperProps> = ({
  children,
  locale,
  namespaces,
}) => {
  const [resources, setResources] = useState<Resources | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { resources } = await initTranslations(locale, namespaces);
      setResources(resources);
    };

    fetchTranslations();
  }, [locale, namespaces]);

  if (!resources) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={namespaces}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  );
};

export default TranslationProviderWrapper;
