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
        {interviewDetails.length > 0 &&
          interviewDetails.map((interview, index) => (
            <InterviewListComponent key={index} interview={interview} viewDetails= {true} />
          ))}
      </div>
    </div>
  );
};

export default ScheduledInterview;
