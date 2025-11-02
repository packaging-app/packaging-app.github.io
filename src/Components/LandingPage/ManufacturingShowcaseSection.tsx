"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function ManufacturingShowcaseSection() {
  const { t } = useTranslation("common");

  // Add intersection observer for animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "-translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".manufacturing-card");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const manufacturingCapabilities = [
    {
      name: t("manufacturing.capabilities.automation.name"),
      image: "/img/packaging/usine.jpg",
      description: t("manufacturing.capabilities.automation.description"),
      color: "from-blue-50 to-blue-100",
      icon: "🤖",
    },
    {
      name: t("manufacturing.capabilities.screenPrinting.name"),
      image: "/img/packaging/screenPrinting.jpg",
      description: t("manufacturing.capabilities.screenPrinting.description"),
      color: "from-purple-50 to-purple-100",
      icon: "🎨",
    },
    {
      name: t("manufacturing.capabilities.embroidery.name"),
      image: "/img/packaging/embroidery.jpg",
      description: t("manufacturing.capabilities.embroidery.description"),
      color: "from-green-50 to-green-100",
      icon: "🧵",
    },
    {
      name: t("manufacturing.capabilities.heatTransfer.name"),
      image: "/img/packaging/heatTransfer.jpg",
      description: t("manufacturing.capabilities.heatTransfer.description"),
      color: "from-orange-50 to-orange-100",
      icon: "🔥",
    },
    {
      name: t("manufacturing.capabilities.washing.name"),
      image: "/img/packaging/washing.jpg",
      description: t("manufacturing.capabilities.washing.description"),
      color: "from-cyan-50 to-cyan-100",
      icon: "💧",
    },
    {
      name: t("manufacturing.capabilities.qualityControl.name"),
      image: "/img/packaging/qualityControl.jpg",
      description: t("manufacturing.capabilities.qualityControl.description"),
      color: "from-emerald-50 to-emerald-100",
      icon: "✅",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-25 to-primary-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase tracking-wider">
            {t("manufacturing.subtitle")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("manufacturing.showcase.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("manufacturing.showcase.description")}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-16 opacity-0 -translate-y-4">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/img/packaging/usine.jpg"
              alt="Manufacturing Facility"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-start p-8 lg:p-16">
              <div className="text-white max-w-2xl">
                <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                  Advanced Manufacturing Excellence
                </h3>
                <p className="text-lg lg:text-xl opacity-90 mb-6">
                  State-of-the-art facility with 23+ years of manufacturing
                  expertise
                </p>
                <CustomButton href="/manufacturing">
                  Explore Manufacturing
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {manufacturingCapabilities.map((capability, index) => (
            <div
              key={index}
              className="manufacturing-card group cursor-pointer opacity-0 -translate-y-4 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={capability.image}
                    alt={capability.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {capability.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center opacity-0 -translate-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("manufacturing.ctaSection.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("manufacturing.ctaSection.description")}
            </p>
            <CustomButton href="/contact">
              {t("manufacturing.cta")}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
