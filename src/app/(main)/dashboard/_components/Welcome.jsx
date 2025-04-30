"use client";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import React from "react";

function Welcome() {
  const { user } = useUser();
  return (
    <div className=" h-16 my-7 p-5 mx-auto bg-amber-200 rounded-lg">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Welcome to Hiresense <span>{user?.user_metadata?.name}</span>{" "}
          {/* <span className="size-12 rounded-full">
            {user && (
              <Image src={user?.user_metadata?.avatar_url} alt="profile pic" />
            )}
          </span> */}
        </h1>
      </div>
    </div>
  );
}

export default Welcome;
