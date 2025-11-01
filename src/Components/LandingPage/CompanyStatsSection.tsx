"use client";

import { useTranslation } from "react-i18next";

export default function CompanyStatsSection() {
  const { t } = useTranslation("common");

  const stats = [
    {
      number: "23",
      label: t("stats.yearsExperience"),
      suffix: t("stats.years"),
    },
    {
      number: "180",
      label: t("stats.employees"),
      suffix: "",
    },
    {
      number: "10",
      label: t("stats.productionLines"),
      suffix: "",
    },
    {
      number: "100+",
      label: t("stats.clients"),
      suffix: "",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 opacity-0 -translate-x-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("stats.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center opacity-0 -translate-x-1">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
                {stat.suffix && (
                  <span className="text-2xl lg:text-3xl">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm lg:text-base font-semibold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
