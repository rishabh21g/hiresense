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
    <div className="px-4 py-6 sm:px-0">
      {" "}
      {/* Adjusted padding, sm:px-0 if container mx-auto handles it */}
      <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-6">
        Previous Interviews
      </h2>
      <div className="mt-4">
        {" "}
        {/* Adjusted margin */}
        {interviewList.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center px-6 py-12 sm:py-16 bg-card border rounded-2xl shadow-xl">
            <Camera className="w-16 h-16 sm:w-20 sm:h-20 text-primary mb-6 opacity-80" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              No Interviews Found
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mb-6">
              You haven’t organized any interviews yet. Let’s get started!
            </p>
            <Button className="text-base sm:text-lg px-6 sm:px-8 py-2.5 rounded-xl">
              Organize New
            </Button>
          </div>
        )}
        {interviewList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewList.map((interview, index) => (
              <InterviewListComponent key={index} interview={interview} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewList;
