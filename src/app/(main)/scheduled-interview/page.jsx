"use client";
import { sb } from "@/app/services/supabaseClient";
import { useUser } from "@/context/UserContext";
import React, { useEffect, useState } from "react";
import InterviewListComponent from "../dashboard/_components/InterviewListComponent";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScheduledInterview = () => {
  const [interviewDetails, setInterviewDetails] = useState([]);
  const { user } = useUser();
  const getInterviewData = async () => {
    try {
      let { data: Interviews, error } = await sb
        .from("Interviews")
        .select("jobPosition,duration,interview_id,Feedback(userEmail)")
        .eq("userEmail", user?.email)
        .order("id", { ascending: false });
      console.log(Interviews);
      setInterviewDetails(Interviews);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    user && getInterviewData();
  }, [user]);
  return (
    <div className="gap-4">
      <h1 className="text-2xl font-bold text-center">Interview list with candidate details</h1>
      <div className="p-5 mx-auto w-full">
        {interviewDetails?.length === 0 && (
          <div className="flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center gap-2 mb-2">
              No Interviews Found
              <Camera className="size-8 text-gray-500 animate-pulse" />
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              You haven’t organized any interviews yet. Let’s get started!
            </p>
            <Button className="bg-amber-400 hover:bg-amber-200  font-bold text-lg px-6 py-3 transition duration-200 text-black">
              Organize New
            </Button>
          </div>
        )}
        {interviewDetails.length > 0 &&
          interviewDetails.map((interview, index) => (
            <InterviewListComponent key={index} interview={interview} viewDetails= {true} />
          ))}
      </div>
    </div>
  );
};

export default ScheduledInterview;
