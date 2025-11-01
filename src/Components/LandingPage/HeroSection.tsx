"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-faint md:pt-20 pt-8 pb-20">
      <div className="container mx-auto w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10 opacity-0 -translate-x-1">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
            {t("hero.title")} <br />
            {t("hero.titleHighlight")}{" "}
            <span style={{ color: "#2874fc" }}>{t("hero.subtitle")}</span>
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
            {t("hero.description")}
          </p>

          <CustomButton href={"/contact"}>{t("hero.cta")}</CustomButton>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-7 grid-rows-6 items-end max-w-[800px] max-h-[500px] gap-4">
          <div className="col-start-5 col-end-8 row-start-1 row-end-7 h-full w-full overflow-hidden rounded-md rounded-tl-[80px] rounded-br-[80px]">
            <img
              src="/img/packaging/textile-packaging.webp"
              alt="Paper packaging solutions"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-1 col-end-5 row-start-5 row-end-7 h-full w-full overflow-hidden rounded-md rounded-tl-[50px] rounded-br-[50px] flex items-center">
            <img
              src="/img/packaging/ecommerce-packaging.webp"
              alt="Textile packaging solutions"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-3 col-end-5 row-start-2 row-end-5 h-full w-full overflow-hidden rounded-[40px]">
            <img
              src="/img/packaging/paper-packaging.webp"
              alt="Protective cases packaging"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div
            className="col-start-1 col-end-3 row-start-4 row-end-5 h-full w-full rounded-md rounded-tl-[50px] rounded-br-[50px]"
            style={{ backgroundColor: "#4e4c4c" }}
          ></div>
          <div
            className="col-start-2 col-end-3 row-start-3 row-end-4 aspect-square w-full rounded-full animate-bounce-vertical"
            style={{ backgroundColor: "#2874fc" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
