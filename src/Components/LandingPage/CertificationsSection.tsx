"use client"

import { ShieldCheckIcon, HeartIcon, UsersIcon, ScaleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function CertificationsSection() {
  const { t } = useTranslation("common");

  const values = [
    {
      icon: ShieldCheckIcon,
      title: t("certifications.sa8000.title"),
      description: t("certifications.sa8000.description")
    },
    {
      icon: HeartIcon,
      title: t("certifications.ethical.title"),
      description: t("certifications.ethical.description")
    },
    {
      icon: UsersIcon,
      title: t("certifications.workingConditions.title"),
      description: t("certifications.workingConditions.description")
    },
    {
      icon: ScaleIcon,
      title: t("certifications.socialLegislation.title"),
      description: t("certifications.socialLegislation.description")
    }
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* <div className="text-center mb-16 opacity-0 -translate-x-1">
          <p className="text-primary font-semibold uppercase">{t("certifications.subtitle")}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("certifications.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("certifications.description")}
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center opacity-0 -translate-x-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-16 opacity-0 -translate-x-1">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image Section - 1/3 width */}
              <div className="w-full lg:w-1/3">
                <div className="relative">
                  <img
                    src="/img/logos/nimetex-logo.png"
                    alt="Certification SA8000 - Nimetex Groupe"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SA8000
                  </div>
                </div>
              </div>

              {/* Content Section - 2/3 width */}
              <div className="w-full lg:w-2/3">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                      <ShieldCheckIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {t("certifications.certificationTitle")}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {t("certifications.certificationSubtitle")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>
                    {t("certifications.certificationDescription1")}
                  </p>

                  <p>
                    {t("certifications.certificationDescription2")}
                  </p>

                  <p>
                    {t("certifications.certificationDescription3")}
                  </p>

                  <div className="bg-primary/5 rounded-xl p-6 mt-8">
                    <p className="text-center font-semibold text-primary">
                      {t("certifications.certificationQuote")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
