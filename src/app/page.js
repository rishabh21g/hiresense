"use client";

import { UserProvider, useUser } from "@/context/UserContext";
import Link from "next/link";
import Navbar from "./(main)/components/Navbar";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { user } = useUser();

  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
        <Navbar />

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <section className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#055e60] via-[#077a7d] to-[#066c6f] bg-clip-text text-transparent">
              Welcome to Hiresense!
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Your AI-powered recruitment partner. Discover top talent or your dream job with unparalleled efficiency.
            </p>
            <Link href={user?.email ? "/dashboard" : "/auth"}>
              <Button className="text-lg px-6 py-3 bg-[#077a7d] hover:bg-[#055e60] shadow-md hover:shadow-lg">
                Get Started
              </Button>
            </Link>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#077a7d] mb-3">
                Intelligent Matching
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                Our AI algorithms connect the right candidates with the right opportunities.
              </p>
              <Button
                variant="outline"
                className="text-[#077a7d] border-[#077a7d] hover:bg-[#077a7d] hover:text-white w-full"
              >
                Learn More
              </Button>
            </div>

            {/* Card 2 */}
            <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#077a7d] mb-3">
                Streamlined Process
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                Simplify your hiring workflow from job posting to onboarding.
              </p>
              <Button
                variant="outline"
                className="text-[#077a7d] border-[#077a7d] hover:bg-[#077a7d] hover:text-white w-full"
              >
                Explore Features
              </Button>
            </div>

            {/* Card 3 */}
            <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#077a7d] mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                Leverage analytics to make informed hiring decisions.
              </p>
              <Button
                variant="outline"
                className="text-[#077a7d] border-[#077a7d] hover:bg-[#077a7d] hover:text-white w-full"
              >
                See Analytics
              </Button>
            </div>
          </section>
        </main>
      </div>
    </UserProvider>
  );
};

export default HomePage;
