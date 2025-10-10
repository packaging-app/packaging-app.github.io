"use client"

import DefinitionSection, { DefinitionSectionProps } from "@/Components/ServicePages/DefinitionSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import { useEffect } from "react";
import InterventionFieldsSection, {InterventionField} from "@/Components/ServicePages/InterventionFieldsSection";
import NavBar from "@/Components/Navigation/NavBar";
import {CustomButton} from "@/Components/Button/CustomButton";
import CTASection from "@/Components/ServicePages/CTASection";
import Footer from "@/Components/Navigation/Footer";

export default function BrandingServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    const definitionParams: DefinitionSectionProps = {
        title: "C’est quoi une Image de Marque ?",
        description: [
            "L’image de marque, pour toute Entreprise, est un  capital  à  créer,  développer  et  entretenir avec  soin  car  au-delà  des  éléments  tangibles d’un produit ou service, c’est la perception de la cible qui donne de la valeur à votre offre.",
            "Une image de marque forte et claire reflétant les  valeurs  de  l’entreprise  et  utilisant  lessupports  appropriés,  contribue  à  attirer  de nouveaux  clients  et  augmenter  l’engagement et la fidélité des anciens",
            "Cette  image  doit  se  refléter  dans  tous  les points  de  contacts  avec  votre  cible  ou  vos clients existants apportant ainsi une cohérence et  un  renforcement  du  message  que l'entreprise désire communiquer",
        ],
        rightImage: "/img/branding/d-r.jpg",
        leftImage: "/img/branding/d-l.png",
    };

    const interventionFields: InterventionField[] = [
        {
            fieldName: "Stratégie de Communication Média et Hors Media",
            fieldIcon: "/img/branding/1.jpg",
        },
        {
            fieldName: "Marketing d’influence",
            fieldIcon: "/img/branding/2.webp",
        },
        {
            fieldName: "Inbound  Marketing",
            fieldIcon: "/img/branding/3.jpg",
        },
        {
            fieldName: "Stratégie de Création de Contenu",
            fieldIcon: "/img/branding/4.jpg",
        },
        {
            fieldName: "Communication Digital",
            fieldIcon: "/img/branding/5.webp",
        },
        {
            fieldName: "Programme Responsabilité sociétale des entreprises",
            fieldIcon: "/img/branding/6.webp",
        },
        {
            fieldName: "Etude Qualitative",
            fieldIcon: "/img/branding/7.jpg",
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
                            Image de Marque
                        </h1>
                        <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
                            Les experts de Flm solutions vous accompagnent dans la réflexion
                            stratégique à propos de l’installation, le développement ou du
                            repositionnement de votre image de marque Online et Offline
                        </p>
                        <CustomButton href={"/contact"} >Commencer Maintenant</CustomButton>
                    </div>

                    {/* Right Image */}
                    <div className="flex max-w-[800px] max-h-[500px] h-full w-full justify-end ">
                        <img
                            src="/img/branding/h.png"
                            className="max-h-[500px] h-full "
                            alt=""
                        />
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