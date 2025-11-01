"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function IntroductionSection() {
  const { t } = useTranslation("common");

  return (
    <section className="py-20 opacity-0 -translate-x-1">
      <div className="container mx-auto w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10">
        {/* Left Images */}
        <div className="grid grid-cols-7 grid-rows-10 items-end max-w-[800px] max-h-[400px] gap-4">
          <div className="col-start-1 col-end-5 row-start-1 row-end-4 h-full w-full overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
            <img
              src="/img/lp-i-t.png"
              alt="Whiteboard presentation"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-1 col-end-8 row-start-4 row-end-11 h-full w-full overflow-hidden rounded-md rounded-tr-[80px] rounded-bl-[80px] flex items-center">
            <img
              src="/img/luxury-chocolate.jpg"
              alt="Team meeting"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div
            className="col-start-5 col-end-6 row-start-2 row-end-4 aspect-square h-[120%] rounded-full"
            style={{ backgroundColor: "#4e4c4c" }}
          ></div>
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
