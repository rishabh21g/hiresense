"use client";
import { InterviewTypes } from "@/app/services/Constant";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const InterviewForm = ({ handleFormData, formData, setsteps }) => {
  const goTonext = () => {
    if (
      !formData.jobPosition ||
      !formData.jobDescription ||
      !formData.duration ||
      !formData.types
    ) {
      toast("Please fill up all the details");
    } else {
      console.log(formData);
      setsteps((prev) => prev + 1);
    }
  };
  const [selectTypes, setSelectTypes] = useState([]);
  useEffect(() => {
    handleFormData("types", selectTypes);
  }, [selectTypes]);
  return (
    <div className="flex flex-col gap-6 w-full mx-auto mt-10 p-6  shadow-md rounded-xl">
      {/* Job Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Position
        </label>
        <input
          type="text"
          placeholder="e.g. Fullstack MERN Developer"
          onChange={(e) => handleFormData("jobPosition", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea
          placeholder="Short job description..."
          onChange={(e) => handleFormData("jobDescription", e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Interview Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Interview Duration
        </label>
        <select
          onChange={(e) => handleFormData("duration", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="15min">15 min</option>
          <option value="30min">30 min</option>
          <option value="45min">45 min</option>
          <option value="1hr">1 hr</option>
        </select>
      </div>

      {/* Interview Type (Checkboxes) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interview Types
        </label>
        <div className="flex flex-wrap gap-5 ">
          {InterviewTypes.map((category, idx) => {
            let isSelected = selectTypes.includes(category.type);
            return (
              <p
                key={idx}
                className={`flex items-center gap-2 text-sm capitalize bg-gray-200 rounded-full justify-center p-3 cursor-pointer ${
                  isSelected && "border border-black"
                }`}
                onClick={() =>
                  setSelectTypes((prevdata) =>
                    prevdata.includes(category.type)
                      ? prevdata.filter((item) => item !== category.type)
                      : [...prevdata, category.type]
                  )
                }
              >
                {category.type} <span className="size-6">{category.icon}</span>
              </p>
            );
          })}
        </div>
      </div>

      {/* Generate Button */}
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        onClick={goTonext}
      >
        Generate Questions
      </button>
    </div>
  );
};

export default InterviewForm;
