"use client"

import Image from "next/image";
import {
  CubeIcon,
  ShoppingBagIcon,
  BeakerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation("common");

  const services = [
    {
      name: t("services.packagingSolutions.name"),
      description: t("services.packagingSolutions.description"),
      icon: CubeIcon,
      link: "/packaging",
      image: "/img/p6.jpg",
    },
    {
      name: t("services.visualMerchandising.name"),
      description: t("services.visualMerchandising.description"),
      icon: ShoppingBagIcon,
      link: "/visual-merchandising",
      image: "/img/p7.jpg",
    },
    {
      name: t("services.ecoDesign.name"),
      description: t("services.ecoDesign.description"),
      icon: BeakerIcon,
      link: "/eco-design",
      image: "/img/p8.jpg",
    },
    {
      name: t("services.globalSourcing.name"),
      description: t("services.globalSourcing.description"),
      icon: GlobeAltIcon,
      link: "/global-sourcing",
      image: "/img/p9.jpg",
    },
  ];

  return (
    <section className="bg-faint py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center opacity-0 -translate-x-1">
        <p className="text-primary font-semibold uppercase">{t("services.subtitle")}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("services.title")}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 text-left">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="flex">
                {/* Image on the left */}
                <div className="w-1/3 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content on the right */}
                <div className="w-2/3 p-8">

                  <h3 className="lg:text-xl text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600 lg:text-lg text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {/* <a
                    href={service.link}
                    className="mt-4 inline-block lg:text-lg text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
