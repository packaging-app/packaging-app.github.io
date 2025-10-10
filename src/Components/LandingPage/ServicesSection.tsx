"use client"

import {
  ChartPieIcon,
  ComputerDesktopIcon,
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Image de Marque",
    description:
      "Les experts de Flm solutions vous accompagnent dans la réflexion stratégique à propos de l’installation, le développement ou du repositionnement de votre image de marque en Online et en Offline.",
    icon: ChartPieIcon,
    link: "/branding",
  },
  {
    name: "Gestion des relations clients",
    description:
      "Que ce soit sur votre site, vos réseaux sociaux, votre contact téléphonique, vos points de vente ou votre SAV, nous créons de la valeur à chaque interaction client.",
    icon: UserGroupIcon,
    link: "/crm",
  },
  {
    name: "Digitalisation",
    description:
      "Fort de son expertise et de son expérience en solutions innovantes, Flm Solutions accompagne vos projets de digitalisation en relation client, développement commercial et communication.",
    icon: ComputerDesktopIcon,
    link: "/digitalization",
  },
  {
    name: "Retail",
    description:
      "Flm Solutions vous aide à moderniser, structurer et développer vos process commerciaux (acquisition, ventes, outils digitaux, etc.) afin d’accélérer votre performance et gagner en croissance.",
    icon: SquaresPlusIcon,
    link: "/retail",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-faint py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center opacity-0 -translate-x-1">
        <p className="text-blue-600 font-semibold uppercase">Services</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          La meilleure qualité, pour vous
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <service.icon
                  className="h-6 w-6 text-blue-600"
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
                className="mt-4 inline-block lg:text-lg text-sm font-semibold text-blue-600 hover:underline"
              >
                Voir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
