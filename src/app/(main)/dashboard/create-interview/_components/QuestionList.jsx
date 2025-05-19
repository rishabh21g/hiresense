"use client";
import { sb } from "@/app/services/supabaseClient";
import { Button } from "@/components/ui/button";
import { UserProvider, useUser } from "@/context/UserContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Loader, Loader2 } from "lucide-react";
import React, {  useEffect, useState } from "react";
import { toast } from "sonner";

const QuestionList = ({ formData, createLink, setsteps, steps}) => {
  const [loading, setloading] = useState(false);
  const [loader, setloader] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const { jobDescription, jobPosition, types, duration } = formData;
   const {user} = useUser()
  const generateQuestions = async () => {
    try {
      setloading(true);
      const result = await axios.post("/api/questions", { ...formData });
      console.log(result);
      const jsonList = result?.data?.content;
      // console.log(jsonList);
      const jsonArr = jsonList.replace("```json", "").replace("```", "").trim();
      // console.log(jsonArr);
      const jsonArrQuestion = JSON.parse(jsonArr);
      // console.log(jsonArrQuestion);
      setQuestionList(jsonArrQuestion?.interviewQuestions);
    } catch (err) {
      console.error(err);
      toast("Server error. Try again later!");
    } finally {
      setloading(false);
    }
  };

  const onFinish = async () => { // Function to save questions and move to the next step
    setloader(true);
    const interview_id = uuidv4();
    try {
      const { data, error } = await sb
        .from("Interviews")
        .insert([
          { // Data structure for the Interviews table
            questionList: questionList,
            userEmail: user.email,
            jobPosition: jobPosition,
            jobDescription: jobDescription,
            duration: duration,
            types: types,
            interview_id: interview_id, // Unique ID for the interview
          },
        ])
        .select();
      // console.log(data); // Log success data if needed
      setloader(false);
      createLink(interview_id); // Pass the new interview ID back to the parent
      setsteps(steps + 1); // Move to the next step (InterviewLink)
    } catch (err) {
      toast("Error while saving Questions!");
      console.error(err); // Log the actual error
      setloader(false);
    }
  };

  useEffect(() => {
    
    if (formData && user) { // Ensure both formData and user are available
      generateQuestions();
    }
  }, [formData , user]);

  return (
    <div className="flex flex-col items-center justify-center">
        {loading && (
          // Updated loading message styling to use teal/cyan colors
          <div className="flex flex-col gap-4 my-3 items-center rounded-lg bg-teal-50 p-6 border border-teal-200 w-full">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              Wait for a while until we craft questions!
              <span>
                <Loader className="animate-spin text-teal-600" /> {/* Changed loader color */}
              </span>
            </h2>
          </div>
        )}

        {!loading && questionList?.length > 0 && (
          <div className="w-full mt-4">
            <h2 className="text-xl font-semibold mb-3">
              Generated Questions: {/* Title for the question list */}
            </h2>
            <ul className="space-y-3">
              {questionList?.map((item, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-lg shadow bg-white"
                >
                  <p className="font-medium">{item?.question}</p>
                  <p className="text-sm text-gray-500">Type: {item?.type}</p>
                </li>
              ))}
            </ul>
            {/* Finish Button - Uses default Button styling (should be primary/teal) */}
            <div className="flex items-end justify-end my-3">
              <Button onClick={onFinish} className={"bg-teal-600 hover:bg-teal-700"}>
                {loader && (
                  <span className="animate-spin">
                    <Loader2 />
                  </span>
                )}
                Finish {/* Button text */}
              </Button>
            </div>
          </div>
        )}
      </div>
  );
};

export default QuestionList;
