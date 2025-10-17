"use client"

import DefinitionSection, { DefinitionSectionProps } from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import InterventionFieldsSection, { InterventionField } from "@/Components/ServicePages/InterventionFieldsSection";
import NavBar from "@/Components/Navigation/NavBar";
import { CustomButton } from "@/Components/Button/CustomButton";
import Footer from "@/Components/Navigation/Footer";
import ReservationSection from "@/Components/LandingPage/ReservationSection";
export default function VisualMerchandisingServicePage() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    const definitionParams: DefinitionSectionProps = {
        title: "What is Visual Merchandising?",
        description: [
            "Visual merchandising is the art and science of presenting products in a way that maximizes their appeal and drives sales. It combines creative design with strategic placement to create compelling retail experiences.",
            "Our visual merchandising solutions help brands create memorable shopping experiences through innovative displays, point-of-purchase materials, and retail installations that enhance brand presence and drive customer engagement.",
            "From travel retail installations to shop window displays and backlit panels, we provide complete visual merchandising solutions that transform retail spaces into powerful brand touchpoints.",
        ],
        rightImage: "/img/retail/h-l.webp",
        leftImage: "/img/retail/h-tr.jpeg",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Retail Displays",
            fieldIcon: "/img/retail/1.webp",
        },
        {
            fieldName: "Point of Purchase",
            fieldIcon: "/img/retail/2.jpg",
        },
        {
            fieldName: "Window Displays",
            fieldIcon: "/img/retail/3.jpg",
        },
        {
            fieldName: "Backlit Panels",
            fieldIcon: "/img/retail/4.jpg",
        },
        {
            fieldName: "Travel Retail",
            fieldIcon: "/img/retail/5.jpg",
        },
        {
            fieldName: "Shop-in-Shop",
            fieldIcon: "/img/retail/6.jpg",
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
                            Visual Merchandising
                        </h1>
                        <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
                            Transform retail spaces with innovative visual merchandising solutions including displays, point-of-purchase materials, and retail installations.
                        </p>
                        <CustomButton href={"/contact"} >Get Started</CustomButton>
                    </div>

                    {/* Right Image */}
                    <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end ">
                        <img
                            src="/img/retail/h-l.webp"
                            className="max-h-[500px] h-full "
                            alt="Visual Merchandising"
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
