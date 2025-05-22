"use client";
import { UserProvider, useUser } from "@/context/UserContext";
import Navbar from "./(main)/components/Navbar";

import { HeroSection } from "./(main)/components/Hero";
import { Footer } from "./(main)/components/Footer";
import { HowItWorks } from "./(main)/components/Working";
import { Features } from "./(main)/components/Features";
import { PricingSection } from "./(main)/components/Pricing";

const HomePage = () => {


  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto p-8">
        <Navbar />
        <HeroSection />
        <HowItWorks/>
        <Features/>
        <PricingSection/>
        <Footer/>
      </div>
    </UserProvider>
  );
};

export default HomePage;
