"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<string>("fr"); // Default to French

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && (savedLocale === "en" || savedLocale === "fr")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
