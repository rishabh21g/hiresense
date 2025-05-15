"use client";
import Image from "next/image";
import { UserProvider, useUser } from "@/context/UserContext";
import Link from "next/link";

const HomePage = () => {
  const { user } = useUser();
  return (
    <UserProvider>
      {" "}
      {/* Added UserProvider wrapper */}
      <div className="flex flex-col min-h-screen w-full">
        {/* Fixed Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(7,122,121,0.3),transparent)]" />
        </div>

        {/* Header */}
        <header className="bg-[#077a7d] text-white p-3 sm:p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="flex items-center mb-2 sm:mb-0">
              <Image
                src="/logo.svg"
                alt="Hiresense Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <h1 className="text-2xl font-bold">Hiresense</h1>
            </div>
            <nav className="flex flex-wrap justify-center sm:justify-end items-center">
              <a
                href="#"
                className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors text-sm sm:text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base"
              >
                Pricing
              </a>
              <a
                href="#"
                className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base"
              >
                Features
              </a>
              {user?.email && (
                <Link
                  href="/dashboard"
                  className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base"
                >
                  Dashboard
                </Link>
              )}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4 sm:p-8">
          <div className="text-center pt-8 sm:pt-10 pb-12 sm:pb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-[#055e60] via-[#077a7d] to-[#066c6f] bg-clip-text text-transparent hover-flicker">
              Welcome to Hiresense!
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Your AI-powered recruitment partner. Discover top talent or your
              dream job with unparalleled efficiency.
            </p>
            {user?.email ? (
              <Link href={"/dashboard"}>
                <button className="bg-[#077a7d] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-md sm:text-lg font-semibold hover:bg-[#055e60] transition-colors shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </Link>
            ) : (
              <Link href={"/auth"}>
                <button className="bg-[#077a7d] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-md sm:text-lg font-semibold hover:bg-[#055e60] transition-colors shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </Link>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#077a7d] mb-3">
                Intelligent Matching
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Our AI algorithms connect the right candidates with the right
                opportunities.
              </p>
              <button className="mt-auto w-full sm:w-auto bg-transparent border-2 border-[#077a7d] text-[#077a7d] px-4 py-2 rounded-md hover:bg-[#077a7d] hover:text-white transition-colors text-sm sm:text-base">
                Learn More
              </button>
            </div>

            {/* Placeholder Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#077a7d] mb-3">
                Streamlined Process
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Simplify your hiring workflow from job posting to onboarding.
              </p>
              <button className="mt-auto w-full sm:w-auto bg-transparent border-2 border-[#077a7d] text-[#077a7d] px-4 py-2 rounded-md hover:bg-[#077a7d] hover:text-white transition-colors text-sm sm:text-base">
                Explore Features
              </button>
            </div>

            {/* Placeholder Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#077a7d] mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Leverage analytics to make informed hiring decisions.
              </p>
              <button className="mt-auto w-full sm:w-auto bg-transparent border-2 border-[#077a7d] text-[#077a7d] px-4 py-2 rounded-md hover:bg-[#077a7d] hover:text-white transition-colors text-sm sm:text-base">
                See Analytics
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 p-4 sm:p-6 text-center text-gray-600 border-t border-gray-200">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Hiresense. AI Powered Recruiter.
            All rights reserved.
          </p>
        </footer>
      </div>
    </UserProvider> // Closed UserProvider wrapper
  );
};

export default HomePage;
