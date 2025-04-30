"use client";
import { Progress } from "@/components/ui/progress";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Form from "./_components/Form";

const CreateInterview = () => {
  const [steps, setsteps] = useState(1)
  const router = useRouter();
  return (
    <div className="flex-col flex gap-5 mx-auto  my-3 w-full max-w-3xl">
      <h1 className="flex items-center justify-center font-bold text-3xl gap-x-3">
        <span className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft />
        </span>
        Create New Interview
      </h1>
      <Progress value={steps*33}/>
      <Form/>
    </div>
  );
};

export default CreateInterview;
