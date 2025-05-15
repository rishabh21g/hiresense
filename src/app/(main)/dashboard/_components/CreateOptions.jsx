import { AtomIcon, PhoneIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateOptions = () => {
  return (
    <div className=" px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Start a New Hiring Process
      </h2>
      <div className=" max-w-4xl mx-auto">
        <Link
          href={"/dashboard/create-interview"}
          className="group block bg-transparent  p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-2 border-transparent hover:border-[#077a7d]"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-4 sm:gap-6">
            <div className="bg-[#077a7d] p-4 rounded-full text-white group-hover:bg-[#055e60] transition-colors duration-300">
              <AtomIcon size={32} className="sm:h-8 sm:w-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-[#077a7d] transition-colors duration-300">
                Create New Interview
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Set up your voice based real time AI- driven Interview!
              </p>
            </div>
          </div>
        </Link>

        
      </div>
        </div>
  );
};

export default CreateOptions;
