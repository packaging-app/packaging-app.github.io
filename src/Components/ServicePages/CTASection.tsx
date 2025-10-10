"use client"

import { CustomButton } from "@/Components/Button/CustomButton";

export default function CTASection() {
  return (
    <section className="bg-faint py-20 w-full">
      <div className="bg-main-blue flex flex-col gap-10 lg:flex-row items-center justify-evenly rounded-[40px] lg:p-20 lg:mx-20 md:p-14 md:mx-14 mx-6 p-6 opacity-0 -translate-x-1">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full font-semibold">
          <h6 className="text-secondary-green uppercase">
            Commencer Aujourd'hui
          </h6>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-white leading-snug">
            Contactez nous
          </h1>
          <p className="text-faint xl:text-lg lg:text-md text-sm">
            Nos experts sont disponibles pour échanger avec vous et répondre à
            vos besoins en digitalisation et développement commercial. Utilisant
            des outils clairs, des méthodes efficaces, une stratégie gagnante
            rédigé pour vous!
          </p>
          <CustomButton isWhite={true} href={"/contact"}>Commencer Maintenant</CustomButton>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-6 grid-rows-7 items-end max-w-[700px] max-h-[400px] gap-4">
          <div className="col-start-4 col-end-7 row-start-1 row-end-8 h-full w-full overflow-hidden rounded-full">
            <img
              src="/img/lp-r-r.png"
              alt="Professionals handshake"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-1 col-end-4 row-start-4 row-end-8 h-full w-full overflow-hidden rounded-md rounded-tr-[120px] rounded-bl-[120px]">
            <img
              src="/img/lp-r-l.png"
              alt="Whiteboard presentation"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-3 col-end-4 row-start-3 row-end-4 aspect-square w-full rounded-full bg-secondary-green"></div>
        </div>
      </div>
    </section>
  );
}
