"use client"

import {useEffect} from "react";
import scrollAnimator from "@/Context/Animation/AnimationService";
import DefinitionSection, {DefinitionSectionProps} from "@/Components/ServicePages/DefinitionSection";
import InterventionFieldsSection, {InterventionField} from "@/Components/ServicePages/InterventionFieldsSection";
import NavBar from "@/Components/Navigation/NavBar";
import {CustomButton} from "@/Components/Button/CustomButton";
import CTASection from "@/Components/ServicePages/CTASection";
import Footer from "@/Components/Navigation/Footer";

export default function RetailServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    const definitionParams: DefinitionSectionProps = {
        title: "C’est quoi le concept de 'Retail' ?",
        description: [
            "Parler de Retail aujourd'hui, c’est évoquer toutes les\n" +
            "possibilités qu'ont les entreprises de faire connaître,\n" +
            "exposer et vendre leurs produits et services et d’une\n" +
            "façon plus générale interagir avec leurs clients.",

            "Avec l'avènement du Online et l'émergence de nouveaux\n" +
            "profils de consommateurs, avoir une stratégie retail c’est\n" +
            "d'abord mieux comprendre sa cible en termes d’attentes\n" +
            "et de comportements d’achat afin de lui proposer la\n" +
            "meilleure expérience client possible.",

            "Que cela soit en point de vente physique ou digital, notre\n" +
            "Cabinet de Consulting, vous permet de mieux\n" +
            "comprendre votre marché et ses tendances, d’ analyser\n" +
            "la compétition et mettre en valeur votre offre.",
        ],
        rightImage: "/img/retail/d-r.jpg",
        leftImage: "/img/retail/d-l.jpeg",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Merchandising / E-merchandising",
            fieldIcon: "/img/retail/1.webp",
        },
        {
            fieldName: "Étude de marché",
            fieldIcon: "/img/retail/2.jpg",
        },
        {
            fieldName: "Veille concurrentielle Online/offline",
            fieldIcon: "/img/retail/3.jpg",
        },
        {
            fieldName: "Formation des vendeurs",
            fieldIcon: "/img/retail/4.jpg",
        },
        {
            fieldName: "Gestion d’incentive",
            fieldIcon: "/img/retail/5.jpg",
        },
        {
            fieldName: "Le social selling",
            fieldIcon: "/img/retail/6.jpg",
        },
        {
            fieldName: "Génération de leads",
            fieldIcon: "/img/retail/7.webp",
        },
        {
            fieldName: "Les sites d'e-commerce",
            fieldIcon: "/img/retail/8.jpg",
        },
        {
            fieldName: "Force de Vente Supplétive",
            fieldIcon: "/img/retail/9.jpeg",
        },
        {
            fieldName: "Base de connaissance produit",
            fieldIcon: "/img/retail/10.webp",
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
                            Retail
                        </h1>
                        <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
                            Flm solutions vous aide à moderniser, structurer et développer vos
                            process commerciaux (acquisition, méthodes de vente, outils
                            digitaux, etc…) pour augmenter rapidement votre performance
                            commerciale et gagner des points de croissance.
                        </p>
                        <CustomButton href={"/contact"}>Commencer Maintenant</CustomButton>
                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-7 grid-rows-5 items-end max-w-[800px] max-h-[500px] gap-4">
                        <div className="col-start-5 col-end-8 row-start-4 row-end-6 h-full w-full overflow-hidden rounded-md rounded-tr-[80px] rounded-bl-[80px]">
                            <img
                                src="/img/retail/h-br.jpg"
                                alt="Professionals handshake"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                        <div className="col-start-1 col-end-5 row-start-3 row-end-6 h-full w-full overflow-hidden rounded-md rounded-tr-[80px] rounded-bl-[80px] flex items-center">
                            <img
                                src="/img/retail/h-l.webp"
                                alt="Team meeting"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                        <div className="col-start-5 col-end-8 row-start-1 row-end-4 h-full w-full overflow-hidden rounded-md rounded-tl-[80px] rounded-br-[80px]">
                            <img
                                src="/img/retail/h-tr.jpeg"
                                alt="Whiteboard presentation"
                                className="object-cover min-w-full min-h-full shadow-md"
                            />
                        </div>
                        <div className="col-start-2 col-end-5 row-start-2 row-end-3 h-full w-full rounded-md rounded-tl-[80px] rounded-br-[80px] bg-main-blue"></div>
                        <div className="col-start-4 col-end-5 row-start-1 row-end-2 aspect-square w-full rounded-full bg-secondary-green"></div>
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