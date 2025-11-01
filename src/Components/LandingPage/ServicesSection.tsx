"use client"

import Image from "next/image";
import {
  CubeIcon,
  CogIcon,
  BeakerIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface Service {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  image: string;
  subservices: string[];
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group rounded-2xl bg-white  hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/30">
      <div className="flex">
        {/* Image section - Left side */}
        <div className="w-1/3 relative min-h-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Content section - Right side */}
        <div className="w-2/3 p-4 lg:p-8 flex flex-col justify-between min-h-full">
          {/* Main content */}
          <div>
            {/* Header with numbered icon and title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                {service.name}
              </h3>
            </div>

            {/* Description - Limited to 2 lines */}
            <p
              className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4 overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {service.description}
            </p>

            {/* Subservices - Display 1-2 subservices in one row */}
            {service.subservices && service.subservices.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.subservices.slice(0, 2).map((subservice, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center p-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {subservice}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action buttons - positioned at bottom */}
          <div className="flex gap-2 mt-auto">
            <button
              onClick={toggleExpanded}
              className="px-3 py-1.5 text-xs font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
            <a
              href={service.link}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default function ServicesSection() {
  const { t } = useTranslation("common");

  const services = [
    {
      name: t("services.textilePackaging.name"),
      description: t("services.textilePackaging.description"),
      icon: CubeIcon,
      link: "/packaging",
      image: "/img/p6.jpg",
      subservices: t("services.textilePackaging.subservices", { returnObjects: true }) as string[],
    },
    {
      name: t("services.manufacturing.name"),
      description: t("services.manufacturing.description"),
      icon: CogIcon,
      link: "/manufacturing",
      image: "/img/p7.jpg",
      subservices: t("services.manufacturing.subservices", { returnObjects: true }) as string[],
    },
    {
      name: t("services.development.name"),
      description: t("services.development.description"),
      icon: BeakerIcon,
      link: "/development",
      image: "/img/p8.jpg",
      subservices: t("services.development.subservices", { returnObjects: true }) as string[],
    },
    {
      name: t("services.logistics.name"),
      description: t("services.logistics.description"),
      icon: TruckIcon,
      link: "/logistics",
      image: "/img/p9.jpg",
      subservices: t("services.logistics.subservices", { returnObjects: true }) as string[],
    },
    {
      name: t("services.specializedProducts.name"),
      description: t("services.specializedProducts.description"),
      icon: WrenchScrewdriverIcon,
      link: "/specialized-products",
      image: "/img/p1.jpg",
      subservices: t("services.specializedProducts.subservices", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className=" mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* First row: 3 services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>

          {/* Second row: 2 services centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index + 3} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}