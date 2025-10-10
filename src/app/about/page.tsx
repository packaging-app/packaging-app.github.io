"use client"

import NavBar from "@/Components/Navigation/NavBar";
import AboutHeroSection from "@/Components/AboutPage/AboutHeroSection";
import CompanySection from "@/Components/AboutPage/CompanySection";
import StrengthsSection from "@/Components/AboutPage/StrengthsSection";
import ReservationSection from "@/Components/LandingPage/ReservationSection";
import ContactSection from "@/Components/LandingPage/ContactSection";
import WhoAreWeSection from "@/Components/AboutPage/WhoAreWeSection";
import Footer from "@/Components/Navigation/Footer";
import React from "react";
import scrollAnimator from "@/Context/Animation/AnimationService";

export default function page (){
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        scrollAnimator();
    }, []);

    return(
        <>
            <NavBar />
            <AboutHeroSection />
            <WhoAreWeSection />
            <CompanySection />
            <StrengthsSection />
            <ReservationSection />
            <ContactSection />
            <Footer />
        </>
    )
}