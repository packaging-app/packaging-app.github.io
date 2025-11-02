"use client";

import Image from "next/image";
import FloatingCard from "./FloatingCard";
import { useTranslation } from "react-i18next";

export default function LogisticsShowcaseSection() {
  const { t } = useTranslation("common");

  const logisticsServices = [
    {
      name: t("logistics.services.warehouseManagement.name"),
      image: "/img/logistics/warehouseManagement.jpg",
      icon: "🏪",
      stats: "50K+ items managed",
    },
    {
      name: t("logistics.services.internationalShipping.name"),
      image: "/img/logistics/internationalShipping.jpg",
      icon: "🚛",
      stats: "100+ countries served",
    },
    {
      name: t("logistics.services.orderTracking.name"),
      image: "/img/logistics/orderTracking.jpg",
      icon: "📱",
      stats: "Real-time updates",
    },
    {
      name: t("logistics.services.inventoryManagement.name"),
      image: "/img/logistics/inventoryManagement.jpg",
      icon: "📊",
      stats: "99.8% accuracy",
    },
    {
      name: t("logistics.services.customsClearance.name"),
      image: "/img/logistics/customsClearance.jpg",
      icon: "📋",
      stats: "24/7 support",
    },
    {
      name: t("logistics.services.deliveryOptimization.name"),
      image: "/img/logistics/deliveryOptimization.jpg",
      icon: "🎯",
      stats: "On-time delivery",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary-50 to-secondary-100">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase tracking-wider">
            {t("logistics.subtitle")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("logistics.showcase.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("logistics.showcase.description")}
          </p>
        </div>

        {/* Global Network Visual */}
        <div className="relative mb-16 opacity-0 -translate-y-4">
          <div className="bg-secondary-25 border border-secondary-100 rounded-3xl p-8 shadow-sm overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("logistics.globalNetwork.title")}
              </h3>
              <p className="text-gray-600">
                {t("logistics.globalNetwork.description")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  🌍
                </div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-600">
                  {t("logistics.globalNetwork.stats.countries")}
                </div>
              </div>
              <div className="group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-gray-600">
                  {t("logistics.globalNetwork.stats.shipments")}
                </div>
              </div>
              <div className="group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-gray-600">
                  {t("logistics.globalNetwork.stats.onTime")}
                </div>
              </div>
              <div className="group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  🚚
                </div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">
                  {t("logistics.globalNetwork.stats.support")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {logisticsServices.map((service, index) => (
            <FloatingCard key={index} delay={index * 100}>
              <div className="group cursor-pointer h-full">
                <div className="bg-secondary-25 border border-secondary-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="mt-4 h-1 w-full bg-gray-200 rounded">
                      <div className="h-full w-0 bg-gradient-to-r from-primary to-secondary rounded group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center opacity-0 -translate-y-4">
          <div className="bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-white">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">
              {t("logistics.ctaSection.title")}
            </h3>
            <p className="mb-6 opacity-90">
              {t("logistics.ctaSection.description")}
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-secondary-600 font-semibold rounded-lg border-2 border-secondary-200 hover:bg-secondary-50 hover:border-secondary-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {t("logistics.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
