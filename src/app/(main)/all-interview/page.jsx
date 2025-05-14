"use client";
import { sb } from "@/app/services/supabaseClient";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import InterviewListComponent from "../dashboard/_components/InterviewListComponent";

const AllInterview = () => {
  const [interviewList, setInterviewList] = useState([]);
  const { user } = useUser();
  const getInterviewList = async () => {
    try {
      let { data: Interviews, error } = await sb
        .from("Interviews")
        .select("*")
        .eq("userEmail", user?.email);
      console.log(Interviews);
      setInterviewList(Interviews);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      console.log(user);
      getInterviewList();
    }
  }, [user]);
  return (
    <div className="p-5 mx-auto w-full">
      <h2 className="font-bold text-2xl">All Interviews</h2>
      <div className="my-3">
        {interviewList.length === 0 && (
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
        {interviewList.length > 0 && interviewList.map((interview, index) => <InterviewListComponent key={index} interview={interview}/>
        )}
      </div>
    </div>
  );
};

export default AllInterview;
