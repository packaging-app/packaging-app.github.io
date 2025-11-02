"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function IntroductionSection() {
  const { t } = useTranslation("common");

  return (
    <section className="py-20 opacity-0 -translate-x-1">
      <div className="container mx-auto w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10">
        {/* Left Image */}
        <div className="lg:w-[46%] md:min-w-96 min-w-full">
          <div className="h-[400px] w-full overflow-hidden rounded-md rounded-tr-[80px] rounded-bl-[80px] flex items-center">
            <img
              src="/img/packaging/textile-leader.jpg"
              alt="Team meeting"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full font-semibold">
          <h6 className="text-primary uppercase">
            {t("introduction.subtitle")}
          </h6>
          <h1 className="text-3xl font-bold text-gray-900 leading-snug sm:text-4xl">
            {t("introduction.title")}
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm">
            {t("introduction.description")}
          </p>
          <CustomButton href={"/contact"}>{t("introduction.cta")}</CustomButton>
        </div>
      </div>
    </section>
  );
}
