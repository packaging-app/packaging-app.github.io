"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function ReservationSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-faint py-20 w-full">
      <div className="bg-primary flex flex-col gap-10 lg:flex-row items-center justify-evenly rounded-[40px] lg:p-20 lg:mx-20 md:p-14 md:mx-14 mx-6 p-6 opacity-0 -translate-x-1">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full font-semibold">
          <h6 className="uppercase text-white">{t("reservation.subtitle")}</h6>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-white leading-snug">
            {t("reservation.title")}
          </h1>
          <p className="text-white xl:text-lg lg:text-md text-sm">
            {t("reservation.description")}
          </p>
          <div className="pt-2">
            <CustomButton isWhite={true} href={"/contact"}>
              {t("reservation.cta")}
            </CustomButton>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-6 grid-rows-7 items-end max-w-[700px] max-h-[400px] gap-4">
          <div className="col-start-4 col-end-7 row-start-1 row-end-8 h-full w-full overflow-hidden rounded-full">
            <img
              src="/img/p3.jpg"
              alt="Professionals handshake"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-1 col-end-4 row-start-4 row-end-8 h-full w-full overflow-hidden rounded-md rounded-tr-[120px] rounded-bl-[120px]">
            <img
              src="/img/p4.jpg"
              alt="Whiteboard presentation"
              className="object-cover shadow-md"
            />
          </div>
          <div
            className="col-start-3 col-end-4 row-start-3 row-end-4 aspect-square w-full rounded-full"
            style={{ backgroundColor: "#dddddd" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
