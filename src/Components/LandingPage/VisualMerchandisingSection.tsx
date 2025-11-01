"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function VisualMerchandisingSection() {
  const { t } = useTranslation("common");

  const visualMerchandisingTypes = [
    {
      name: t("visualMerchandising.displays.name"),
      description: t("visualMerchandising.displays.description"),
      features: t("visualMerchandising.displays.features", {
        returnObjects: true,
      }),
    },
    {
      name: t("visualMerchandising.pop.name"),
      description: t("visualMerchandising.pop.description"),
      features: t("visualMerchandising.pop.features", { returnObjects: true }),
    },
    {
      name: t("visualMerchandising.travelRetail.name"),
      description: t("visualMerchandising.travelRetail.description"),
      features: t("visualMerchandising.travelRetail.features", {
        returnObjects: true,
      }),
    },
    {
      name: t("visualMerchandising.shopWindow.name"),
      description: t("visualMerchandising.shopWindow.description"),
      features: t("visualMerchandising.shopWindow.features", {
        returnObjects: true,
      }),
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase">
            {t("visualMerchandising.subtitle")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("visualMerchandising.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("visualMerchandising.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visualMerchandisingTypes.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow opacity-0 -translate-x-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {solution.name}
              </h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {(solution.features as string[]).map(
                  (feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CustomButton href="/contact">
            {t("visualMerchandising.cta")}
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
