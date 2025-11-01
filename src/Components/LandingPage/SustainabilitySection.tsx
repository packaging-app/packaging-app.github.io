"use client";

import {
  CheckCircleIcon,
  GlobeAltIcon,
  TruckIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const sustainabilityFeatures = [
  {
    icon: ArrowPathIcon,
    title: "Recycled Materials",
    description: "Solutions made from recycled and low-impact materials",
  },
  {
    icon: LightBulbIcon,
    title: "Circular Design",
    description: "Solutions designed and developed with a circular approach",
  },
  {
    icon: ShieldCheckIcon,
    title: "Certified Materials",
    description: "Use of certified materials from a transparent supply chain",
  },
  {
    icon: GlobeAltIcon,
    title: "Local Sourcing",
    description:
      "Raw materials sourced and processed within the same continent",
  },
  {
    icon: TruckIcon,
    title: "Low-Emission Transport",
    description: "Transportation conducted using low-emission methods",
  },
];

export default function SustainabilitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase">Sustainability</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Sustainability Highlights
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We guide global brands towards sustainable packaging design &
            material selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sustainabilityFeatures.map((feature, index) => (
            <div key={index} className="text-center opacity-0 -translate-x-1">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center opacity-0 -translate-x-1">
          <div className="flex justify-center mb-4">
            <GlobeAltIcon className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Commitment to Sustainability
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Brandart focuses on partnering with brands on reducing carbon
            footprint across its entire business, manufacturing supply chain,
            and product life cycle.
          </p>
        </div>
      </div>
    </section>
  );
}
