"use client";

import DefinitionSection, {
  DefinitionSectionProps,
} from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import NavBar from "@/Components/Navigation/NavBar";
import { CustomButton } from "@/Components/Button/CustomButton";
import ReservationSection from "@/Components/LandingPage/ReservationSection";
import Footer from "@/Components/Navigation/Footer";
import FloatingCard from "@/Components/LandingPage/FloatingCard";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SpecializedProductsServicePage() {
  const { t } = useTranslation("common");

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollAnimator();
  }, []);

  const definitionParams: DefinitionSectionProps = {
    title: t("specializedProducts.definitionSection.title"),
    description: [
      t("specializedProducts.definitionSection.description1"),
      t("specializedProducts.definitionSection.description2"),
      t("specializedProducts.definitionSection.description3"),
    ],
    rightImage: "/img/specialized-products/specialized1.jpg",
    leftImage: "/img/specialized-products/specialized2.jpg",
  };

  const specializedCategories = [
    {
      name: t("specializedProducts.categories.handmade.name"),
      image: "/img/packaging/bijoux-packaging.jpg",
      description: t("specializedProducts.categories.handmade.description"),
      icon: "✋",
    },
    {
      name: t("specializedProducts.categories.sports.name"),
      image: "/img/specialized-products/sports.jpg",
      description: t("specializedProducts.categories.sports.description"),
      icon: "⚽",
    },
    {
      name: t("specializedProducts.categories.medical.name"),
      image: "/img/specialized-products/medical.jpg",
      description: t("specializedProducts.categories.medical.description"),
      icon: "🏥",
    },
    {
      name: t("specializedProducts.categories.technical.name"),
      image: "/img/specialized-products/technical.jpg",
      description: t("specializedProducts.categories.technical.description"),
      icon: "⚙️",
    },
    {
      name: t("specializedProducts.categories.safety.name"),
      image: "/img/specialized-products/safety.jpg",
      description: t("specializedProducts.categories.safety.description"),
      icon: "🦺",
    },
    {
      name: t("specializedProducts.categories.luxury.name"),
      image: "/img/specialized-products/luxury.jpg",
      description: t("specializedProducts.categories.luxury.description"),
      icon: "💎",
    },
  ];

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section className="md:pt-20 pt-8 pb-20">
        <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-20 opacity-0 -translate-x-1">
          <div className="space-y-6 w-full">
            <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
              {t("specializedProducts.title")}
            </h1>
            <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
              {t("specializedProducts.heroDescription")}
            </p>
            <CustomButton href="/contact">
              {t("specializedProducts.getStarted")}
            </CustomButton>
          </div>

          <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end">
            <Image
              src="/img/specialized-products/specialized-products.jpg"
              alt="Specialized Products"
              width={800}
              height={500}
              className="max-h-[500px] h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <DefinitionSection props={definitionParams} />

      {/* Specialized Products Showcase */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="container mx-auto px-6 lg:px-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specializedCategories.map((category, index) => (
              <FloatingCard key={index} delay={index * 100}>
                <div className="group hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-80 rounded-full p-2">
                        {category.icon}
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {category.description}
                      </p>
                      <div className="mt-4 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center opacity-0 -translate-y-4">
            <div className="inline-block group relative overflow-hidden">
              <CustomButton href="/contact">
                <span className="relative z-10">
                  {t("specializedProducts.cta")}
                </span>
              </CustomButton>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <ReservationSection />
      <Footer />
    </>
  );
}
