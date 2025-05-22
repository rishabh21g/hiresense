"use client";
import { UserProvider, useUser } from "@/context/UserContext";
import Navbar from "./(main)/components/Navbar";

import { HeroSection } from "./(main)/components/Hero";
import { Footer } from "./(main)/components/Footer";
import { HowItWorks } from "./(main)/components/Working";
import { Features } from "./(main)/components/Features";

const HomePage = () => {
  const { user } = useUser();

  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen w-full ">
        <Navbar />
        <HeroSection />
        <HowItWorks/>
        <Features/>
        <Footer/>
      </div>
    </UserProvider>
  );
};

export default HomePage;
