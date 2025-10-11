"use client"

import Image from "next/image";
import {
  CubeIcon,
  ShoppingBagIcon,
  BeakerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Packaging Solutions",
    description:
      "Comprehensive packaging solutions including paper packaging, textile packaging, cases, jewelry & watch packaging, and e-commerce packaging designed for sustainability and brand impact.",
    icon: CubeIcon,
    link: "/packaging",
    image: "/img/p6.jpg",
  },
  {
    name: "Visual Merchandising",
    description:
      "Complete visual merchandising solutions including displays, point of purchase materials, travel retail installations, and shop window & backlit panels to enhance brand presence.",
    icon: ShoppingBagIcon,
    link: "/visual-merchandising",
    image: "/img/p7.jpg",
  },
  {
    name: "Eco Design & R&D",
    description:
      "In-house research and development focused on sustainable materials, circular design approaches, and innovative packaging solutions that reduce environmental impact.",
    icon: BeakerIcon,
    link: "/eco-design",
    image: "/img/p8.jpg",
  },
  {
    name: "Global Sourcing",
    description:
      "Global network of manufacturing partners with transparent supply chains, certified materials, and low-emission transportation methods for sustainable procurement.",
    icon: GlobeAltIcon,
    link: "/global-sourcing",
    image: "/img/p9.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-faint py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center opacity-0 -translate-x-1">
        <p className="text-primary font-semibold uppercase">Our Solutions</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sustainable Packaging & Visual Merchandising
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
