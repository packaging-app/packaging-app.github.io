"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SpecializedProductsShowcaseSection() {
  const { t } = useTranslation("common");

  const specializedCategories = [
    {
      key: "handmade",
      image: "/img/specialized-products/handmade.jpg",
      icon: "✋",
      color: "from-amber-400 to-orange-500",
    },
    {
      key: "sports",
      image: "/img/specialized-products/sports.jpg",
      icon: "⚽",
      color: "from-blue-400 to-cyan-500",
    },
    {
      key: "medical",
      image: "/img/specialized-products/medical.jpg",
      icon: "🏥",
      color: "from-green-400 to-emerald-500",
    },
    {
      key: "technical",
      image: "/img/specialized-products/technical.jpg",
      icon: "⚙️",
      color: "from-gray-400 to-slate-500",
    },
    {
      key: "safety",
      image: "/img/specialized-products/safety.jpg",
      icon: "🦺",
      color: "from-red-400 to-rose-500",
    },
    {
      key: "luxury",
      image: "/img/specialized-products/luxury.jpg",
      icon: "💎",
      color: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase tracking-wider">
            {t("specializedProducts.subtitle")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("specializedProducts.showcase.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("specializedProducts.showcase.description")}
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedCategories.map((category, index) => (
              <div key={index} className="opacity-100">
                <div className="group cursor-pointer">
                  <div className="relative">
                    {/* Hexagonal Card */}
                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:scale-105 transform-gpu">
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <Image
                          src={category.image}
                          alt={t(
                            `specializedProducts.categories.${category.key}.name`
                          )}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={true}
                          unoptimized={true}
                          onLoad={() =>
                            console.log(
                              `Successfully loaded: ${category.image}`
                            )
                          }
                          onError={e => {
                            console.error(
                              `Failed to load: ${category.image}`,
                              e
                            );
                          }}
                        />

                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300 z-30">
                          <span className="text-2xl">{category.icon}</span>
                        </div>

                        {/* Bottom Overlay for Text */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                          <div className="p-6">
                            <h4 className="text-xl font-bold mb-2 text-white">
                              {t(
                                `specializedProducts.categories.${category.key}.name`
                              )}
                            </h4>
                            <p className="text-sm text-gray-200">
                              {t(
                                `specializedProducts.categories.${category.key}.description`
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-150"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with Innovation Theme */}
        <div className="text-center opacity-0 -translate-y-4">
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-pulse">🌟</div>
              <h3 className="text-2xl font-bold mb-4">
                {t("specializedProducts.ctaSection.title")}
              </h3>
              <p className="mb-6 opacity-90 max-w-xl mx-auto">
                {t("specializedProducts.ctaSection.description")}
              </p>
              <div className="space-x-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-xl border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {t("specializedProducts.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
