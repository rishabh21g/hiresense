"use client";
import { sb } from "@/app/services/supabaseClient";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import InterviewListComponent from "./InterviewListComponent";

const InterviewList = () => {
  const [interviewList, setInterviewList] = useState([]);
  const { user } = useUser();
  const getInterviewList = async () => {
    try {
      let { data: Interviews, error } = await sb
        .from("Interviews")
        .select("*")
        .eq("userEmail", user?.email);
      // console.log(Interviews);
      setInterviewList(Interviews);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      // console.log(user);
      getInterviewList();
    }
  }, [user]);
  return (
    <div className="px-4 py-6 sm:px-0"> {/* Adjusted padding, sm:px-0 if container mx-auto handles it */}
      <h2 className="font-bold text-2xl sm:text-3xl text-gray-800 mb-6">Previous Interviews</h2>
      <div className="mt-4"> {/* Adjusted margin */}
        {interviewList.length === 0 && (
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-transparent rounded-xl shadow-lg">
            <Camera className="size-16 sm:size-20 text-[#077a7d] mb-6 opacity-75" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
              No Interviews Found
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto">
              You haven’t organized any interviews yet. Let’s get started!
            </p>
            <Button className="bg-[#077a7d] hover:bg-[#055e60] text-white font-semibold text-md sm:text-lg px-8 py-3 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg">
              Organize New
            </Button>
          </div>
        )}
        {interviewList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewList.map((interview, index) => <InterviewListComponent key={index} interview={interview}/>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewList;
