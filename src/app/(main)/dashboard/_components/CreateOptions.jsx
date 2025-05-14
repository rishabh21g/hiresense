import { PhoneIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateOptions = () => {
  return (
    <div className=" px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Start a New Hiring Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
        {/* Create New Interview Card */}
        <Link
          href={"/dashboard/create-interview"}
          className="group block bg-transparent  p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-2 border-transparent hover:border-[#077a7d]"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-4 sm:gap-6">
            <div className="bg-[#077a7d] p-4 rounded-full text-white group-hover:bg-[#055e60] transition-colors duration-300">
              <VideoIcon size={32} className="sm:h-8 sm:w-8" /> {/* Adjusted icon size for consistency */}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-[#077a7d] transition-colors duration-300">
                Create New Interview
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Set up a video interview with AI assistance.
              </p>
            </div>
          </div>
        </Link>

        {/* Create Phone Screening Card */}
        <Link
          href={"/dashboard/create-screening"} // Example link, adjust as needed
          className="group block bg-transparent p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-2 border-transparent hover:border-[#077a7d]"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-4 sm:gap-6">
            <div className="bg-[#077a7d] p-4 rounded-full text-white group-hover:bg-[#055e60] transition-colors duration-300">
              <PhoneIcon size={32} className="sm:h-8 sm:w-8" /> {/* Adjusted icon size for consistency */}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-[#077a7d] transition-colors duration-300">
                Create Phone Screening
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Schedule and manage initial phone calls.
              </p>
            </div>
          </div>
        </Link>
      </div>
        </div>
  );
};

export default CreateOptions;
