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
import ReservationSection from "@/Components/LandingPage/ReservationSection";
import Footer from "@/Components/Navigation/Footer";
export default function PackagingServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    scrollAnimator();
  }, []);

  const definitionParams: DefinitionSectionProps = {
    title: "What is Sustainable Packaging?",
    description: [
      "Sustainable packaging solutions that minimize environmental impact while maintaining product protection and brand appeal. Our comprehensive approach covers everything from material selection to end-of-life considerations.",
      "We work with global brands to develop packaging strategies that align with sustainability goals, reduce waste, and enhance brand value through innovative design and eco-friendly materials.",
      "From paper packaging and textile solutions to protective cases and e-commerce packaging, we provide end-to-end packaging solutions that meet both functional and environmental requirements.",
    ],
    rightImage: "/img/packaging/paper-packaging.webp",
    leftImage: "/img/packaging/textile-packaging.webp",
  };

  const interventionFields: InterventionField[] = [
    {
      fieldName: "Paper Packaging Solutions",
      fieldIcon: "/img/packaging/paper-packaging.webp",
    },
    {
      fieldName: "Textile Packaging",
      fieldIcon: "/img/packaging/textile-packaging.webp",
    },
    {
      fieldName: "Protective Cases",
      fieldIcon: "/img/packaging/cases.webp",
    },
    {
      fieldName: "Jewelry & Watch Packaging",
      fieldIcon: "/img/packaging/jewellery-watch.webp",
    },
    {
      fieldName: "E-commerce Packaging",
      fieldIcon: "/img/packaging/ecommerce-packaging.webp",
    },
    {
      fieldName: "Luxury Gift Packaging",
      fieldIcon: "/img/packaging/luxury-gift.webp",
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
              Packaging Solutions
            </h1>
            <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
              Comprehensive packaging solutions including paper packaging,
              textile packaging, cases, jewelry & watch packaging, and
              e-commerce packaging designed for sustainability and brand impact.
            </p>
            <CustomButton href={"/contact"}>Get Started</CustomButton>
          </div>

          {/* Right Image */}
          <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end ">
            <img
              src="/img/packaging/paper-packaging.webp"
              className="max-h-[500px] h-full "
              alt="Packaging Solutions"
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
