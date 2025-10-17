import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function StrengthsSection() {
  const { t } = useTranslation("common");

  const strengths = [
    {
      name: t("about.strengths.innovation.name"),
      description: t("about.strengths.innovation.description"),
      icon: AcademicCapIcon,
    },
    {
      name: t("about.strengths.excellence.name"),
      description: t("about.strengths.excellence.description"),
      icon: ChartBarIcon,
    },
    {
      name: t("about.strengths.partnership.name"),
      description: t("about.strengths.partnership.description"),
      icon: UserGroupIcon,
    },
    {
      name: t("about.strengths.custom.name"),
      description: t("about.strengths.custom.description"),
      icon: PuzzlePieceIcon,
    },
  ];
  return (
    <section className="bg-faint py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center opacity-0 -translate-x-1">
        <p className="text-primary font-semibold uppercase">
          {t("about.strengths.subtitle")}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("about.strengths.title")}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {strengths.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <service.icon
                  className="h-10 w-10 text-primary"
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
