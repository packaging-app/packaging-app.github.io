"use client";

import Image from "next/image";
import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function PackagingShowcaseSection() {
  const { t } = useTranslation("common");

  const packagingTypes = [
    {
      key: "paperPackaging",
      image: "/img/packaging/paper-packaging.jpg",
      icon: "📄",
      color: "from-blue-400 to-indigo-500",
    },
    {
      key: "textilePackaging",
      image: "/img/packaging/blue-textile-package.jpg",
      icon: "🧵",
      color: "from-green-400 to-emerald-500",
    },
    {
      key: "cases",
      image: "/img/packaging/cases-packaging.jpg",
      icon: "💼",
      color: "from-gray-400 to-slate-500",
    },
    {
      key: "jewelleryWatch",
      image: "/img/packaging/jewelleryWatch.jpg",
      icon: "💎",
      color: "from-purple-400 to-indigo-500",
    },
    {
      key: "ecommerce",
      image: "/img/packaging/ecommerce-packaging.jpg",
      icon: "📦",
      color: "from-orange-400 to-red-500",
    },
    {
      key: "luxuryGift",
      image: "/img/packaging/gift-packaging.jpg",
      icon: "🎁",
      color: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase tracking-wider">
            {t("packaging.subtitle")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("packaging.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("packaging.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packagingTypes.map((packaging, index) => (
            <div key={index} className="opacity-100">
              <div className="group cursor-pointer">
                <div className="relative">
                  {/* Card */}
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:scale-105 transform-gpu">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image
                        src={packaging.image}
                        alt={t(`packaging.${packaging.key}.name`)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                        unoptimized={true}
                        onLoad={() =>
                          console.log(`Successfully loaded: ${packaging.image}`)
                        }
                        onError={e => {
                          console.error(
                            `Failed to load: ${packaging.image}`,
                            e
                          );
                        }}
                      />

                      {/* Bottom Overlay for Text - Always Visible */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-2 text-white">
                            {t(`packaging.${packaging.key}.name`)}
                          </h4>
                          <p className="text-sm text-gray-200 leading-relaxed">
                            {t(`packaging.${packaging.key}.description`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-150"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center opacity-0 -translate-y-4">
          <div className="inline-block group relative overflow-hidden">
            <CustomButton href="/contact">
              <span className="relative z-10">{t("packaging.cta")}</span>
            </CustomButton>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
