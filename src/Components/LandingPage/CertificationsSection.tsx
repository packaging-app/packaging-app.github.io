"use client"

import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const certifications = [
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "FSC Certified", description: "Forest Stewardship Council" },
  { name: "PEFC Certified", description: "Programme for Endorsement" },
  { name: "ISO 9001", description: "Quality Management" },
  { name: "OHSAS 18001", description: "Occupational Health & Safety" },
  { name: "ISO 45001", description: "Occupational Health & Safety" },
  { name: "ISO 50001", description: "Energy Management" }
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase">Certifications</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards in environmental management,
            quality control, and sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center opacity-0 -translate-x-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 -translate-x-1">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quality & Sustainability Commitment
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our certifications demonstrate our commitment to environmental responsibility,
              quality management, and sustainable business practices. We continuously
              improve our processes to minimize environmental impact while delivering
              exceptional packaging and visual merchandising solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
