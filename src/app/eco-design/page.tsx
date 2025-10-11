"use client"

import DefinitionSection, { DefinitionSectionProps } from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import InterventionFieldsSection, { InterventionField } from "@/Components/ServicePages/InterventionFieldsSection";
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
            "Eco Design & R&D focuses on developing sustainable materials and circular design approaches that minimize environmental impact throughout the product lifecycle. Our research drives innovation in sustainable packaging solutions.",
            "We conduct in-house research and development to create innovative packaging materials and design approaches that reduce environmental impact while maintaining functionality and aesthetic appeal.",
            "From biodegradable materials to circular design principles, our R&D team works continuously to push the boundaries of sustainable packaging innovation and help brands achieve their environmental goals.",
        ],
        rightImage: "/img/digitalization/d-l.jpg",
        leftImage: "/img/digitalization/d-r.jpg",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Sustainable Material Research",
            fieldIcon: "/img/digitalization/1.png",
        },
        {
            fieldName: "Circular Design Development",
            fieldIcon: "/img/digitalization/2.webp",
        },
        {
            fieldName: "Biodegradable Solutions",
            fieldIcon: "/img/digitalization/3.jpg",
        },
        {
            fieldName: "Life Cycle Assessment",
            fieldIcon: "/img/digitalization/4.jpeg",
        },
        {
            fieldName: "Innovation Testing",
            fieldIcon: "/img/digitalization/5.jpg",
        },
        {
            fieldName: "Sustainability Consulting",
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
                            In-house research and development focused on sustainable materials, circular design approaches,
                            and innovative packaging solutions that reduce environmental impact.
                        </p>
                        <CustomButton href={"/contact"} >Get Started</CustomButton>
                    </div>

                    {/* Right Image */}
                    <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end ">
                        <img
                            src="/img/digitalization/h.png"
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
