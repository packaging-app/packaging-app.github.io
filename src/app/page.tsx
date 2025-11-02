"use client";

import NavBar from "@/Components/Navigation/NavBar";
import ContactSection from "@/Components/LandingPage/ContactSection";
import Footer from "@/Components/Navigation/Footer";
import ReservationSection from "@/Components/LandingPage/ReservationSection";
import scrollAnimator from "@/Context/Animation/AnimationService";
import React from "react";
import HeroSection from "@/Components/LandingPage/HeroSection";
import IntroductionSection from "@/Components/LandingPage/IntroductionSection";
import ServicesSection from "@/Components/LandingPage/ServicesSection";
import CompanyStatsSection from "@/Components/LandingPage/CompanyStatsSection";
// import SustainabilitySection from "@/Components/LandingPage/SustainabilitySection";
import PackagingShowcaseSection from "@/Components/LandingPage/PackagingShowcaseSection";
import ManufacturingShowcaseSection from "@/Components/LandingPage/ManufacturingShowcaseSection";
import DevelopmentShowcaseSection from "@/Components/LandingPage/DevelopmentShowcaseSection";
import LogisticsShowcaseSection from "@/Components/LandingPage/LogisticsShowcaseSection";
import SpecializedProductsShowcaseSection from "@/Components/LandingPage/SpecializedProductsShowcaseSection";
import CertificationsSection from "@/Components/LandingPage/CertificationsSection";
// import PartnersSection from "@/Components/LandingPage/PartnersSection";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    scrollAnimator();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <CompanyStatsSection />
      <PackagingShowcaseSection />
      <ManufacturingShowcaseSection />
      <DevelopmentShowcaseSection />
      <LogisticsShowcaseSection />
      <SpecializedProductsShowcaseSection />
      {/* <SustainabilitySection /> */}
      <CertificationsSection />
      {/* <PartnersSection /> */}
      <ReservationSection />
      <ContactSection />
      <Footer />
    </>
  );
}
