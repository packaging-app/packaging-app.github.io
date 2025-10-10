"use client"

import { CustomButton } from "@/Components/Button/CustomButton";

export default function IntroductionSection() {
  return (
    <section className="py-20 opacity-0 -translate-x-1">
      <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10">
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
              src="/img/lp-i-b.png"
              alt="Team meeting"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-5 col-end-6 row-start-2 row-end-4 aspect-square h-[120%] rounded-full bg-secondary-green"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full font-semibold">
          <h6 className="text-secondary-green uppercase">Qui Sommes nous ?</h6>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
            12 ans d’expérience à votre disposition
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm">
            Fondée en 2013, Flm solutions est un cabinet de consulting basé à
            Tunis, spécialisé dans le développement commercial, la gestion de
            l'image de marque et la gestion de la relation client.
          </p>
          <CustomButton href={"/contact"}>Commencer Maintenant</CustomButton>
        </div>
      </div>
    </section>
  );
}
