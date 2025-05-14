"use client";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import React from "react";

function Welcome() {
  const { user } = useUser();
  return (
    <div className="my-8 mx-4 sm:mx-0 p-6 bg-transparent rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-[#077a7d]">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Hiresense,{" "}
            <span className="text-[#077a7d]">{user?.user_metadata?.name}</span>!
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Ready to start your hiring journey?
          </p>
        </div>
        {user?.user_metadata?.avatar_url && (
          <div className="rounded-full overflow-hidden w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#077a7d]">
            <Image
              src={user?.user_metadata?.avatar_url}
              alt="Profile Picture"
              width={56} // Set the width and height to match the container
              height={56}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Welcome;
