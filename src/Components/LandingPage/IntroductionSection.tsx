"use client"

import { CustomButton } from "@/Components/Button/CustomButton";
import { BASE_PATH } from "@/lib/basePath";

export default function IntroductionSection() {
  return (
    <section className="py-20 opacity-0 -translate-x-1">
      <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10">
        {/* Left Images */}
        <div className="grid grid-cols-7 grid-rows-10 items-end max-w-[800px] max-h-[400px] gap-4">
          <div className="col-start-1 col-end-5 row-start-1 row-end-4 h-full w-full overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
            <img
              src={`${BASE_PATH}/img/lp-i-t.png`}
              alt="Whiteboard presentation"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-1 col-end-8 row-start-4 row-end-11 h-full w-full overflow-hidden rounded-md rounded-tr-[80px] rounded-bl-[80px] flex items-center">
            <img
              src={`${BASE_PATH}/img/luxury-chocolate.jpg`}
              alt="Team meeting"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-5 col-end-6 row-start-2 row-end-4 aspect-square h-[120%] rounded-full" style={{ backgroundColor: '#c8b2a2' }}></div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full font-semibold">
          <h6 className="text-primary uppercase">About Nimetex Groupe</h6>
          <h1 className="text-3xl font-bold text-gray-900 leading-snug sm:text-4xl">
            Leading Packaging Innovation
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm">
            Nimetex Groupe specializes in comprehensive packaging and visual merchandising solutions.
            We partner with global brands to create sustainable, innovative packaging designs that
            reduce environmental impact while maximizing brand value. Our expertise spans from
            eco-design and material selection to global sourcing and supply chain optimization.
          </p>
          <CustomButton href={"/contact"}>Get Started</CustomButton>
        </div>
      </div>
    </section>
  );
}
