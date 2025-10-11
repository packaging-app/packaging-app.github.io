"use client"

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const partnersList = [
  { name: "Alcatel", logo: "/img/partners/Alcatel.png" },
  { name: "Arcelik", logo: "/img/partners/Arcelik.png" },
  { name: "B-Pay", logo: "/img/partners/B-Pay.png" },
  { name: "Beko", logo: "/img/partners/Beko.png" },
  {
    name: "Business&Decision",
    logo: "/img/partners/Business&Decision.png",
  },
  { name: "Citroën", logo: "/img/partners/Citroen.png" },
  { name: "CORP", logo: "/img/partners/CORP.png" },
  { name: "DS", logo: "/img/partners/DS.png" },
  { name: "Gillette", logo: "/img/partners/Gillette.png" },
  { name: "Giz", logo: "/img/partners/Giz.png" },
  { name: "Goethe", logo: "/img/partners/Goethe.png" },
  { name: "HP", logo: "/img/partners/HP.png" },
  { name: "IFM", logo: "/img/partners/Ifm.png" },
  { name: "Kyufi", logo: "/img/partners/Kyufi.png" },
  { name: "MCI", logo: "/img/partners/MCI.png" },
  { name: "MdS", logo: "/img/partners/MdS.png" },
  { name: "OGInfluence", logo: "/img/partners/OGInfluence.png" },
  { name: "Orange", logo: "/img/partners/Orange.png" },
  { name: "Polysieges", logo: "/img/partners/Polysieges.png" },
  { name: "PW", logo: "/img/partners/PW.png" },
  { name: "SVR", logo: "/img/partners/SVR.png" },
  { name: "Underworld", logo: "/img/partners/Underworld.png" },
  { name: "Vileda", logo: "/img/partners/Vileda.png" },
  { name: "WD-40", logo: "/img/partners/WD-40.png" },
];

export default function PartnersSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(6);
  const [width, setWidth] = useState(220);
  const [height, setHeight] = useState(220);
  const [gap, setGap] = useState(80);
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 400) {
        setHeight(140);
        setWidth(140);
        setGap(20);
      } else if (window.innerWidth < 640) {
        setHeight(180);
        setWidth(180);
        setGap(30);
        setVisible(2);
      } else if (window.innerWidth < 1024) {
        setVisible(3);
      } else if (window.innerWidth < 1550) {
        setHeight(180);
        setWidth(180);
        setGap(30);
        setVisible(5);
      } else {
        setVisible(6);
        setHeight(220);
        setWidth(220);
        setGap(40);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const totalPages = Math.ceil(partnersList.length / visible);

  const next = () =>
    setIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));

  return (
    <section className="bg-white py-16">
      <div className="mx-auto gap-10 px-6 sm:px-16 flex flex-col items-center justify-center">
        {/* Header */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <p className="text-primary font-semibold uppercase">
              Our Partners
            </p>
            <h2 className="mt-2 xl:text-3xl lg:text-2xl text-xl font-bold tracking-tight text-gray-900">
              Trusted by Leading Brands
            </h2>
          </div>
          <div className="flex-row gap-2 lg:flex hidden">
            <button
              onClick={prev}
              className="p-2 border h-fit w-fit border-primary rounded-md text-primary hover:bg-primary/10"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-2 border h-fit w-fit border-primary rounded-md text-primary hover:bg-primary/10"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          style={{
            width: `${visible * width + gap * (visible - 1)}px`,
          }}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${index * width * visible + index * visible * gap}px)`,
              width: `${partnersList.length * width + partnersList.length * gap}px`,
              height: `${height}px`,
              gap: `${gap}px`,
            }}
          >
            {partnersList.map((partner) => (
              <div
                key={partner.name}
                className={`flex items-center justify-center rounded-2xl bg-faint shadow-sm`}
                style={{
                  padding: `${gap / 2}px`,
                  width: `${width}px`,
                  height: `${height}px`,
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-row gap-2 lg:hidden flex">
          <button
            onClick={prev}
            className="p-2 border h-fit w-fit border-blue-600 rounded-md text-blue-600 hover:bg-blue-50"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="p-2 border h-fit w-fit border-blue-600 rounded-md text-blue-600 hover:bg-blue-50"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
