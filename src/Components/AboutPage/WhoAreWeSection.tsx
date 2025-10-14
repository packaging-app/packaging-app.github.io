"use client";

import { BASE_PATH } from "@/lib/basePath";

export default function WhoAreWeSection() {
  return (
    <section className="py-20 opacity-0 -translate-x-1">
      <div className="w-full flex flex-col lg:gap-20 gap-6 md:flex-row items-stretch justify-evenly px-6 lg:px-10">
        {/* Left Images */}
        <div className="overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
          <img
            src={`${BASE_PATH}/img/ap-w.png`}
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 font-semibold flex flex-col justify-around">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
            Qui Somme Nous ?
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm">
            Fondée en 2013, Flm solutions est un cabinet de consulting basé à
            Tunis, spécialisé dans le développement commercial, la gestion de
            l'image de marque et la gestion de la relation client.
            <br />
            <br />
            Forte de ses trois filiales dans le domaine du retail, du marketing
            growth et de la relation client multicanal, Flm solutions propose
            des stratégies pour générer du revenu et vous accompagne dans leurs
            déploiements.
          </p>
        </div>
      </div>
    </section>
  );
}
