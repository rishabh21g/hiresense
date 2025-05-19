"use client";
import { Progress } from "@/components/ui/progress";
import {  ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "./_components/Form";
import QuestionList from "./_components/QuestionList";
import InterviewLink from "./_components/InterviewLink";
import { UserProvider } from "@/context/UserContext";

const CreateInterview = () => {
  const [steps, setsteps] = useState(1);
  const [formData, setFormData] = useState({});
  const [interviewId, setinterviewId] = useState("");
 
  const router = useRouter();
  const handleFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const createLink = (interview_id) => {
    setinterviewId(interview_id);
  };

  useEffect(() => {
    // console.log(formData);
  }, [formData]);
  return (
    <UserProvider>
      <div className="flex-col flex gap-5 mx-auto  my-3 w-full max-w-3xl">
        <h1 className="flex items-center justify-center font-bold text-3xl gap-x-3">
          <span className="cursor-pointer" onClick={() => setsteps(steps - 1)}>
            <ArrowLeft />
          </span>
          Create New Interview
        </h1>
        <Progress value={steps * 33} />
        {steps === 1 ? (
          <Form
            handleFormData={handleFormData}
            formData={formData}
            setsteps={setsteps}
            steps={steps}
          />
        ) : steps === 2 ? (
          <QuestionList
            formData={formData}
            createLink={createLink}
            setsteps={setsteps}
            steps={steps}
          />
        ) : steps === 3 ? (
          <InterviewLink formData={formData} interviewId={interviewId} />
        ) : null}
      </div>
    </UserProvider>
  );
};

export default CreateInterview;
