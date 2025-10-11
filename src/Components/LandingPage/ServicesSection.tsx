"use client"

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
  },
  {
    name: "Visual Merchandising",
    description:
      "Complete visual merchandising solutions including displays, point of purchase materials, travel retail installations, and shop window & backlit panels to enhance brand presence.",
    icon: ShoppingBagIcon,
    link: "/visual-merchandising",
  },
  {
    name: "Eco Design & R&D",
    description:
      "In-house research and development focused on sustainable materials, circular design approaches, and innovative packaging solutions that reduce environmental impact.",
    icon: BeakerIcon,
    link: "/eco-design",
  },
  {
    name: "Global Sourcing",
    description:
      "Global network of manufacturing partners with transparent supply chains, certified materials, and low-emission transportation methods for sustainable procurement.",
    icon: GlobeAltIcon,
    link: "/global-sourcing",
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <service.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 lg:text-xl text-lg font-semibold text-gray-900">
                {service.name}
              </h3>
              <p className="mt-2 text-gray-600 lg:text-lg text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="mt-4 inline-block lg:text-lg text-sm font-semibold text-primary hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
