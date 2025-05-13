"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MessageCircleWarning, TimerIcon, VideoIcon } from "lucide-react";
import { sb } from "@/app/services/supabaseClient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  InterviewContextProvider,
  useInterview,
} from "@/context/InterviewDataContext";

const InterviewJoining = () => {
  const { interview_id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interviewDetails, setInterviewDetails] = useState();
  const router = useRouter();
  const { interviewInfo, setInterviewInfo } = useInterview();
  const isFormValid = name.trim() !== "" && email.trim() !== "";

  const getInterviewDetails = async () => {
    try {
      let { data: Interviews, error } = await sb
        .from("Interviews")
        .select("jobPosition,jobDescription,duration,types")
        .eq("interview_id", interview_id);
      console.log(Interviews[0]);
      setInterviewDetails(Interviews[0]);
    } catch (error) {
      toast("Error while fetching interview details or Invalid Link");
      console.error(error);
    }
  };
  async function startInterview() {
    try {
      let { data: Interviews, error } = await sb
        .from("Interviews")
        .select("*")
        .eq("interview_id", interview_id);
      setInterviewInfo({
        userName: name,
        userEmail : email,
        jobPosition : Interviews[0]?.jobPosition,
        questionList: Interviews[0]?.questionList,
      });
      console.log(interviewInfo);
      console.log(Interviews);
      router.push(`/interview/${interview_id}/start`);
    } catch (error) {
      toast("Error while fetching interview details or Invalid Link");
      console.error(error);
    }
  }
  useEffect(() => {
    interview_id && getInterviewDetails();
  }, []);
  return (
    <InterviewContextProvider>
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          {/* Logo & Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Hiresense</h1>
            <p className="text-sm text-gray-500 mt-1">
              AI-Powered Interview Platform
            </p>
          </div>

          {/* Job Details */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {interviewDetails?.jobPosition}
            </h2>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-1">
              <span className="size-5">
                <TimerIcon />
              </span>{" "}
              {interviewDetails?.duration}
            </p>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Tips Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6 text-sm text-gray-700">
            <p className="font-semibold text-blue-800 mb-2 flex items-center   gap-2">
              <span>
                <MessageCircleWarning />
              </span>
              Before you begin
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Test your camera and microphone</li>
              <li>Ensure you have a stable internet connection</li>
              <li>Find a quiet place for interview</li>
            </ul>
          </div>

          {/* Join Button */}
          <button
            disabled={!isFormValid}
            className={`w-full mt-6 py-2 rounded-xl font-semibold transition items-center justify-center flex ${
              isFormValid
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-amber-200 text-white cursor-not-allowed"
            }`}
            onClick={startInterview}
          >
            <span className="text-amber-300 mx-2">
              <VideoIcon />
            </span>{" "}
            Join Interview
          </button>

          {/* Interview ID */}
          <p className="text-xs text-center text-gray-400 mt-4">
            Interview ID: <span className="text-amber-500">{interview_id}</span>
          </p>
        </div>
      </div>
    </InterviewContextProvider>
  );
};

export default InterviewJoining;
