import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const strengths = [
  {
    name: "Expertise",
    description:
      "Nous accompagnons nos clients dans la mise en oeuvre de leurs stratégies marketing et commerciales .Une expertise pointue sur combiner vision stratégique et implémentation opérationnelle.",
    icon: AcademicCapIcon,
  },
  {
    name: "Performance",
    description:
      "Flm Solutions vous propose des stratégies et des outils efficaces pour générer du revenu tout en garantissant un retour sur investissement idéal.",
    icon: ChartBarIcon,
  },
  {
    name: "Accompagnement",
    description:
      "De la stratégie à la mise en place opérationnelle,notre mission est de vous accompagner en vous proposant les leviers de croissance les plus pertinents à vos objectifs de développement.",
    icon: UserGroupIcon,
  },
  {
    name: "Solutions sur mesure",
    description:
      "Suivant votre vision et vos ambitions commerciales,nous vous aidons à réaliser vos objectifs par la mise en place de solutions personnalisées et innovantes.",
    icon: PuzzlePieceIcon,
  },
];

export default function StrengthsSection() {
  return (
    <section className="bg-faint py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center opacity-0 -translate-x-1">
        <p className="text-blue-600 font-semibold uppercase">
          Nos Points Forts
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pourquoi choisir FLM Solutions ?
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {strengths.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <service.icon
                  className="h-10 w-10 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 lg:text-2xl text-xl font-bold">
                {service.name}
              </h3>
              <p className="mt-2 text-gray-600 lg:text-lg text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
