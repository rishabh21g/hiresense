"use client";
import { sb } from "@/app/services/supabaseClient";
import { useUser } from "@/context/UserContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import InterviewDetailContainer from "../../_components/InterviewDetail";
import CandidateList from "../../_components/CandidateList";

export default function InterviewDetails() {
  const [interviewDetails, setInterviewDetails] = useState([]);
  const { interview_id } = useParams();
  const { user } = useUser();
  const getInterviewData = async () => {
    try {
      let { data: Interviews, error } = await sb
        .from("Interviews")
        .select(
          "jobPosition,duration,interview_id,jobDescription,questionList,types,created_at,Feedback(userEmail,userName,feedback,recommendation,created_at)"
        )
        .eq("userEmail", user?.email)
        .eq("interview_id", interview_id);
      console.log(Interviews);
      setInterviewDetails(Interviews[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    user && getInterviewData();
  }, [user]);
  return (
    <div className="min-h-screen  text-gray-800 w-full">
      <InterviewDetailContainer interviewDetails={interviewDetails} />
      <CandidateList interviewDetails={interviewDetails} />
    </div>
  );
}
