"use client"

import DefinitionSection, { DefinitionSectionProps } from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import InterventionFieldsSection, {InterventionField} from "@/Components/ServicePages/InterventionFieldsSection";
import NavBar from "@/Components/Navigation/NavBar";
import {CustomButton} from "@/Components/Button/CustomButton";
import CTASection from "@/Components/ServicePages/CTASection";
import Footer from "@/Components/Navigation/Footer";

export default function DigitalizationServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    const definitionParams: DefinitionSectionProps = {
        title: "C’est quoi la Digitalisation ?",
        description: [
            "Digitaliser  est  devenu  aujourd'hui  une  nécessité  et  un enjeu majeur pour les entreprises qui veulent survivre et se  développer  aux  vue  des  profonds  changements  qui sont  en  train  de  s'opérer  dans  le  monde  et  face  à  une concurrence de plus en plus rude.",
            "Quand elle est bien menée, la digitalisation constitue une vraie  opportunité  car  elle  permet  aux  entreprises  de gagner en efficacité opérationnelle et par conséquent en rentabilité.Dans  le  cas  contraire,  elle  sera  subie  et générera des points de blocage et des pertes",
            "Notre approche est de donner aux chefs  d’entreprise  la  grille  de lecture  nécessaire  et  les  bons retours  d'expérience  pour  une implémentation  réussie  de  ses projets d’innovations.",
        ],
        rightImage: "/img/digitalization/d-r.webp",
        leftImage: "/img/digitalization/d-l.jpg",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Logiciel de gestion de Relation Client",
            fieldIcon: "/img/digitalization/1.png",
        },
        {
            fieldName: "Plateforme d’Incentive",
            fieldIcon: "/img/digitalization/2.webp",
        },
        {
            fieldName: "Site E-Commerce",
            fieldIcon: "/img/digitalization/3.jpg",
        },
        {
            fieldName: "Site Web optimisé",
            fieldIcon: "/img/digitalization/4.jpeg",
        },
        {
            fieldName: "Plateforme de Formation",
            fieldIcon: "/img/digitalization/5.jpg",
        },
        {
            fieldName: "Solution de remonté d’information terrain",
            fieldIcon: "/img/digitalization/6.png",
        },
        {
            fieldName: "Retail-tech",
            fieldIcon: "/img/digitalization/7.jpeg",
        },
        {
            fieldName: "Optimisation pour les Moteurs de Recherche",
            fieldIcon: "/img/digitalization/8.png",
        },
    ];

    return (
        <>
            <NavBar />
            <section className="md:pt-20 pt-8 pb-20">
                <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10 opacity-0 -translate-x-1">
                    {/* Left Content */}
                    <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full ">
                        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
                            Digitalisation
                        </h1>
                        <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
                            Les experts de Flm solutions vous accompagnent dans la réflexion
                            stratégique à propos de l’installation, le développement ou du
                            repositionnement de votre image de marque Online et Offline
                        </p>
                        <CustomButton href={"/contact"}>Commencer Maintenant</CustomButton>
                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-10 grid-rows-10 items-end max-w-[800px] max-h-[500px] aspect-[546/364] lg:w-auto w-full gap-4">
                        <div className="col-start-1 col-end-3 row-start-1 row-end-11 h-full w-full rounded-md rounded-tr-[80px] rounded-bl-[80px] bg-main-blue"></div>
                        <div className="col-start-3 col-end-11 row-start-9 row-end-11 h-full w-full rounded-md rounded-tl-[80px] rounded-br-[80px] bg-secondary-green"></div>
                        <div className="col-start-9 col-end-11 row-start-2 row-end-4 aspect-square w-full rounded-full bg-secondary-green"></div>
                        <div className="col-start-1 col-end-11 row-start-1 row-end-11 w-full overflow-hidden ">
                            <img
                                src="/img/digitalization/h.png"
                                alt="Professionals handshake"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <DefinitionSection props={definitionParams} />
            <InterventionFieldsSection fields={interventionFields} />
            <CTASection />
            <Footer />
        </>
    );
}
