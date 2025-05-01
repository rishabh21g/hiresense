"use client";
import { Progress } from "@/components/ui/progress";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "./_components/Form";
import QuestionList from "./_components/QuestionList";
import { toast } from "sonner";

const CreateInterview = () => {
  const [steps, setsteps] = useState(1);
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleFormData = (field, value) => {
    setFormData((prevData) => {
      return setFormData({
        ...prevData,
        [field]: value,
      });
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="flex-col flex gap-5 mx-auto  my-3 w-full max-w-3xl">
      <h1 className="flex items-center justify-center font-bold text-3xl gap-x-3">
        <span className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft />
        </span>
        Create New Interview
      </h1>
      <Progress value={steps * 33} />
      {steps === 1 ? (
        <Form handleFormData={handleFormData} formData={formData} setsteps={setsteps} steps={steps}/>
      ) : steps === 2 ? (
        <QuestionList formData={formData}/>
      ) : null}
    </div>
  );
};

export default CreateInterview;
