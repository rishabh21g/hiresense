"use client";
import { sb } from "@/app/services/supabaseClient";
import { useUser } from "@/context/UserContext";
import moment from "moment";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      setInterviewDetails(Interviews);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    user && getInterviewData();
  }, [user]);
  return (
    <div className="min-h-screen p-6 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Interview Details</h1>
            <p className="text-gray-500 capitalize">
              {interviewDetails[0]?.jobPosition}
            </p>
          </div>
          {/* <div className="flex items-center space-x-3">
            <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
              Active
            </span>
            <button className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
              Filter
            </button>
            <button className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
              Export
            </button>
          </div> */}
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
          <div>
            <strong>Duration:</strong> {interviewDetails[0]?.duration}
          </div>
          <div>
            <strong>Created On:</strong>{" "}
            {moment(interviewDetails[0]?.created_at).format("MMMM Do, YYYY")}
          </div>
          {/* <div className="col-span-2 sm:col-span-1">
            <strong>Type:</strong> {JSON.parse(interviewDetails[0]?.types)}
          </div> */}
        </div>

        {/* Job Description */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Job Description</h2>
          <p className="text-sm">{interviewDetails[0]?.jobDescription}</p>
        </div>

        {/* Interview Questions */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Interview Questions</h2>
          <ul className="list-disc list-inside text-sm space-y-1 text-blue-600">
            {interviewDetails[0]?.questionList?.map((q, idx) => {
              return (
                <li className="my-3 gap-3">
                  {q?.question} <br />
                  <span className="text-gray-500 rounded-full bg-slate-100 p-2 my-4">
                    {" "}
                    {q?.type}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Candidate List */}
        <div>
          <h2 className="font-semibold text-lg mb-3">
            Candidates {interviewDetails[0]?.Feedback?.length}
          </h2>
          <div className="space-y-3">
            {/* Candidate 1 */}
            <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-medium">
                    {interviewDetails[0]?.Feedback[0]?.userName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {interviewDetails[0]?.Feedback[0]?.userEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-semibold">
                  {/* {interviewDetails[0]?.Feedback[0]?feedback?.feebacl?.rating?.experience +
                    interviewDetails[0]?.Feedback[0]?feedback?.feebacl?.rating?.communication +
                    interviewDetails[0]?.Feedback[0]?feedback?.feebacl?.rating?.problemSolving +
                    interviewDetails[0]?.Feedback[0]?feedback?.feebacl?.rating?.technicalSkills } */}
                  /10
                </span>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  View Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
