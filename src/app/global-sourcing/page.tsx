"use client"

import DefinitionSection, { DefinitionSectionProps } from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import InterventionFieldsSection, { InterventionField } from "@/Components/ServicePages/InterventionFieldsSection";
import NavBar from "@/Components/Navigation/NavBar";
import { CustomButton } from "@/Components/Button/CustomButton";
import Footer from "@/Components/Navigation/Footer";
import ReservationSection from "@/Components/LandingPage/ReservationSection";
export default function GlobalSourcingServicePage() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    const definitionParams: DefinitionSectionProps = {
        title: "What is Global Sourcing?",
        description: [
            "Global sourcing involves building and managing a worldwide network of manufacturing partners to ensure quality, sustainability, and cost-effectiveness. Our transparent supply chains provide reliable access to certified materials and innovative solutions.",
            "We maintain strategic partnerships with manufacturing facilities across different regions, ensuring consistent quality while optimizing for sustainability and local market requirements.",
            "From material certification to low-emission transportation methods, our global sourcing approach prioritizes sustainability and transparency throughout the entire supply chain.",
        ],
        rightImage: "/img/crm/d-l.png",
        leftImage: "/img/crm/d-r.png",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Supply Chain Management",
            fieldIcon: "/img/crm/1.jpg",
        },
        {
            fieldName: "Quality Assurance",
            fieldIcon: "/img/crm/2.png",
        },
        {
            fieldName: "Sustainable Materials",
            fieldIcon: "/img/crm/3.jpg",
        },
        {
            fieldName: "Cost Optimization",
            fieldIcon: "/img/crm/4.png",
        },
        {
            fieldName: "Vendor Management",
            fieldIcon: "/img/crm/5.webp",
        },
        {
            fieldName: "Compliance & Certification",
            fieldIcon: "/img/crm/6.jpeg",
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
                            Global Sourcing
                        </h1>
                        <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
                            Comprehensive global sourcing solutions that connect you with certified suppliers worldwide, ensuring quality, sustainability, and cost-effectiveness.
                        </p>
                        <CustomButton href={"/contact"} >Get Started</CustomButton>
                    </div>

                    {/* Right Image */}
                    <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end ">
                        <img
                            src="/img/crm/d-l.png"
                            className="max-h-[500px] h-full "
                            alt="Global Sourcing"
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
