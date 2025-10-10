"use client"

import DefinitionSection, { DefinitionSectionProps } from "@/Components/ServicePages/DefinitionSection";
import { useEffect } from "react";
import InterventionFieldsSection, {InterventionField} from "@/Components/ServicePages/InterventionFieldsSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import NavBar from "@/Components/Navigation/NavBar";
import {CustomButton} from "@/Components/Button/CustomButton";
import CTASection from "@/Components/ServicePages/CTASection";
import Footer from "@/Components/Navigation/Footer";

export default function CRMServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    const definitionParams: DefinitionSectionProps = {
        title: "C’est quoi la Gestion de la Relation Client ?",
        description: [
            "Dans un monde digital où points de contacts et interactions se multiplient, le comportement d’achat du client et l’interaction qu’il attend de l’entreprise sont devenus imprévisibles.",
            "Pour le satisfaire et gagner sa fidélité, il faut lui offrir un service en adéquation avec ses attentes quel que soit le point de contact.",
            "Les approches multi-canal et cross-canal ont profondément transformé la relation client. En choisissant avec lucidité les bons canaux et en collectant les informations appropriées, il est possible de créer une relation de proximité, par la personnalisation des offres et la facilitation de l’acte d’achat.",
        ],
        rightImage: "/img/crm/d-r.png",
        leftImage: "/img/crm/d-l.png",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Optimisation du parcours client",
            fieldIcon: "/img/crm/1.jpg",
        },
        {
            fieldName: "Stratégie d'acquisition",
            fieldIcon: "/img/crm/2.png",
        },
        {
            fieldName: "Stratégie de rétention",
            fieldIcon: "/img/crm/3.jpg",
        },
        {
            fieldName: "Stratégie de fidélisation",
            fieldIcon: "/img/crm/4.png",
        },
        {
            fieldName: "Contrôle qualité",
            fieldIcon: "/img/crm/5.webp",
        },
        {
            fieldName: "Cross et up selling",
            fieldIcon: "/img/crm/6.jpeg",
        },
        {
            fieldName: "Tunnel de vente",
            fieldIcon: "/img/crm/7.png",
        },
        {
            fieldName: "Le social selling",
            fieldIcon: "/img/crm/8.jpg",
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
                            Gestion de la Relation Client
                        </h1>
                        <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
                            Que cela soit sur votre site, vos réseaux sociaux, votre contact
                            téléphonique, vos points de vente ou votre SAV, etc.... Notre but
                            est de vous aider à créer de la valeur ajoutée à chaque contact
                            client afin d’optimiser le ROI de chaque canal.
                        </p>
                        <CustomButton href={"/contact"}>Commencer Maintenant</CustomButton>
                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-7 grid-rows-6 items-end max-w-[800px] max-h-[500px] gap-4">
                        <div className="col-start-5 col-end-8 row-start-1 row-end-7 h-full w-full overflow-hidden rounded-md rounded-tl-[80px] rounded-br-[80px]">
                            <img
                                src="/img/crm/h-r.png"
                                alt="Professionals handshake"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                        <div className="col-start-1 col-end-5 row-start-4 row-end-7 h-full w-full overflow-hidden rounded-md rounded-tl-[50px] flex items-center">
                            <img
                                src="/img/crm/h-bl.png"
                                alt="Team meeting"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                        <div className="col-start-2 col-end-5 row-start-1 row-end-4 h-full w-full overflow-hidden rounded-md rounded-tr-[80px] rounded-bl-[80px]">
                            <img
                                src="/img/crm/h-tl.png"
                                alt="Whiteboard presentation"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                        <div className="col-start-1 col-end-2 row-start-3 row-end-4 aspect-square w-full rounded-full bg-secondary-green"></div>
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
