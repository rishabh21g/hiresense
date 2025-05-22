"use client";

import { AtomIcon } from "lucide-react";
import Link from "next/link";

const CreateOptions = () => {
  return (
    <section className="px-6 py-16 bg-background">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-12">
        Start a New Hiring Process
      </h2>

      <div className="max-w-3xl mx-auto">
        <Link
          href="/dashboard/create-interview"
          className="group flex bg-white dark:bg-gray-900 rounded-xl shadow-md border border-transparent hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg p-6  items-center gap-6"
        >
          <div className="flex-shrink-0 bg-primary text-white rounded-full p-4 grid place-items-center transition-colors duration-300 group-hover:bg-primary/90">
            <AtomIcon size={28} />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Create New Interview
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              Set up your voice-based real-time AI-driven interview!
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CreateOptions;
