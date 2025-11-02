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

export default function ManufacturingServicePage() {
  const { t } = useTranslation("common");

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollAnimator();
  }, []);

  const definitionParams: DefinitionSectionProps = {
    title: t("manufacturing.definitionSection.title"),
    description: [
      t("manufacturing.definitionSection.description1"),
      t("manufacturing.definitionSection.description2"),
      t("manufacturing.definitionSection.description3"),
    ],
    rightImage: "/img/packaging/usine.jpg",
    leftImage: "/img/packaging/nimtex-agents.jpg",
  };

  const manufacturingCapabilities = [
    {
      name: t("manufacturing.capabilities.automation.name"),
      image: "/img/packaging/usine.jpg",
      description: t("manufacturing.capabilities.automation.description"),
      icon: "🤖",
    },
    {
      name: t("manufacturing.capabilities.screenPrinting.name"),
      image: "/img/packaging/screenPrinting.jpg",
      description: t("manufacturing.capabilities.screenPrinting.description"),
      icon: "🎨",
    },
    {
      name: t("manufacturing.capabilities.embroidery.name"),
      image: "/img/packaging/embroidery.jpg",
      description: t("manufacturing.capabilities.embroidery.description"),
      icon: "🧵",
    },
    {
      name: t("manufacturing.capabilities.heatTransfer.name"),
      image: "/img/packaging/heatTransfer.jpg",
      description: t("manufacturing.capabilities.heatTransfer.description"),
      icon: "🔥",
    },
    {
      name: t("manufacturing.capabilities.washing.name"),
      image: "/img/packaging/washing.jpg",
      description: t("manufacturing.capabilities.washing.description"),
      icon: "💧",
    },
    {
      name: t("manufacturing.capabilities.qualityControl.name"),
      image: "/img/packaging/qualityControl.jpg",
      description: t("manufacturing.capabilities.qualityControl.description"),
      icon: "✅",
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
              {t("manufacturing.title")}
            </h1>
            <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
              {t("manufacturing.heroDescription")}
            </p>
            <CustomButton href="/contact">
              {t("manufacturing.getStarted")}
            </CustomButton>
          </div>

          <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end">
            <Image
              src="/img/packaging/usine.jpg"
              alt="Manufacturing Facility"
              width={800}
              height={500}
              className="max-h-[500px] h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <DefinitionSection props={definitionParams} />

      {/* Manufacturing Capabilities Showcase */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary/5">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {manufacturingCapabilities.map((capability, index) => (
              <FloatingCard key={index} delay={index * 100}>
                <div className="group hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={capability.image}
                        alt={capability.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-80 rounded-full p-2">
                        {capability.icon}
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {capability.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {capability.description}
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
                <span className="relative z-10">{t("manufacturing.cta")}</span>
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
