"use client";

import Image from "next/image";
import { CustomButton } from "@/Components/Button/CustomButton";
import FloatingCard from "./FloatingCard";
import { useTranslation } from "react-i18next";

export default function DevelopmentShowcaseSection() {
  const { t } = useTranslation("common");

  const developmentServices = [
    {
      name: t("development.services.sourcing.name"),
      image: "/img/development/Sourcing.jpg",
      description: t("development.services.sourcing.description"),
      icon: "🔍",
    },
    {
      name: t("development.services.rawMaterials.name"),
      image: "/img/development/rawMaterials.jpg",
      description: t("development.services.rawMaterials.description"),
      icon: "🧶",
    },
    {
      name: t("development.services.customCreation.name"),
      image: "/img/development/customCreation.jpg",
      description: t("development.services.customCreation.description"),
      icon: "✨",
    },
    {
      name: t("development.services.prototyping.name"),
      image: "/img/development/prototyping.jpg",
      description: t("development.services.prototyping.description"),
      icon: "🔬",
    },
    {
      name: t("development.services.patternMaking.name"),
      image: "/img/development/patternMaking.jpg",
      description: t("development.services.patternMaking.description"),
      icon: "📐",
    },
    {
      name: t("development.services.designConsultation.name"),
      image: "/img/development/consultationdesgin.jpg",
      description: t("development.services.designConsultation.description"),
      icon: "🎯",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary-25 to-secondary-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase tracking-wider">
            {t("development.subtitle")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("development.showcase.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("development.showcase.description")}
          </p>
        </div>

        {/* Services Timeline Layout */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-30"></div>

          {developmentServices.map((service, index) => (
            <FloatingCard key={index} delay={index * 150}>
              <div
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-full md:w-5/12">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                <div className="w-full md:w-5/12">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center opacity-0 -translate-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-secondary-100">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transform Your Ideas Into Reality
            </h3>
            <p className="text-gray-600 mb-6">
              From concept to creation - let&apos;s develop your next textile
              innovation
            </p>
            <CustomButton href="/contact">{t("development.cta")}</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
