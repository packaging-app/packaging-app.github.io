"use client";

import DefinitionSection, {
  DefinitionSectionProps,
} from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import InterventionFieldsSection, {
  InterventionField,
} from "@/Components/ServicePages/InterventionFieldsSection";
import NavBar from "@/Components/Navigation/NavBar";
import { CustomButton } from "@/Components/Button/CustomButton";
import Footer from "@/Components/Navigation/Footer";
import ReservationSection from "@/Components/LandingPage/ReservationSection";
export default function EcoDesignServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    scrollAnimator();
  }, []);

  const definitionParams: DefinitionSectionProps = {
    title: "What is Eco Design & R&D?",
    description: [
      "Eco-design and R&D services focused on developing sustainable packaging solutions that minimize environmental impact while maximizing functionality and brand appeal.",
      "Our research and development team works closely with clients to create innovative packaging designs that meet both environmental standards and business objectives.",
      "From concept to production, we provide comprehensive eco-design services that help brands achieve their sustainability goals while maintaining product quality and market competitiveness.",
    ],
    rightImage: "/img/digitalization/1.png",
    leftImage: "/img/digitalization/2.webp",
  };

  const interventionFields: InterventionField[] = [
    {
      fieldName: "Sustainable Material Research",
      fieldIcon: "/img/digitalization/1.png",
    },
    {
      fieldName: "Eco-Friendly Design",
      fieldIcon: "/img/digitalization/2.webp",
    },
    {
      fieldName: "Life Cycle Assessment",
      fieldIcon: "/img/digitalization/3.jpg",
    },
    {
      fieldName: "Biodegradable Solutions",
      fieldIcon: "/img/digitalization/4.jpeg",
    },
    {
      fieldName: "Recyclable Packaging",
      fieldIcon: "/img/digitalization/5.jpg",
    },
    {
      fieldName: "Carbon Footprint Analysis",
      fieldIcon: "/img/digitalization/6.png",
    },
  ];

  return (
    <>
      <NavBar />
      <section className="md:pt-20 pt-8 pb-20">
        <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-20 opacity-0 -translate-x-1">
          {/* Left Content */}
          <div className="space-y-6 w-full">
            <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
              Eco Design & R&D
            </h1>
            <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
              Sustainable packaging solutions through innovative eco-design and
              research & development services that prioritize environmental
              impact.
            </p>
            <CustomButton href={"/contact"}>Get Started</CustomButton>
          </div>

          {/* Right Image */}
          <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end ">
            <img
              src="/img/digitalization/1.png"
              className="max-h-[500px] h-full "
              alt="Eco Design & R&D"
            />
          </div>
        </div>
      </section>
      <DefinitionSection props={definitionParams} />
      <InterventionFieldsSection fields={interventionFields} />
      <ReservationSection />
      <Footer />
    </>
  );
}
