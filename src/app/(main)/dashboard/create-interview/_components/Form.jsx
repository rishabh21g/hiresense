"use client";
import React, { useState } from "react";

const InterviewForm = () => {
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [duration, setDuration] = useState("15min");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const generateQuestions = () => {
    console.log("Generating questions with:", {
      jobPosition,
      jobDescription,
      duration,
      selectedTypes,
    });
  };

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
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
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
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
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
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
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
        <div className="grid grid-cols-2 gap-2">
          {[
            "technical",
            "problem-solving",
            "experience",
            "leadership",
            "behavioural",
          ].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 text-sm capitalize"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="accent-blue-600"
              />
              {type.replace("-", " ")}
            </label>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateQuestions}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Generate Questions
      </button>
    </div>
  );
};

export default InterviewForm;
