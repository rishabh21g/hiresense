"use client"
import { BadgeCheck, FileText, Users } from "lucide-react";
import { useParams } from "next/navigation";

export default function InterviewDetails() {
    const {interview_id} = useParams()
  return (
    <div className="min-h-screen p-6 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Interview Details</h1>
            <p className="text-gray-500">Full Stack Developer</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
              Active
            </span>
            <button className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
              Filter
            </button>
            <button className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
              Export
            </button>
          </div>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
          <div>
            <strong>Duration:</strong> 45 Minutes
          </div>
          <div>
            <strong>Created On:</strong> Oct 15, 2025
          </div>
          <div className="col-span-2 sm:col-span-1">
            <strong>Type:</strong> Technical + Behavioral
          </div>
        </div>

        {/* Job Description */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Job Description</h2>
          <p className="text-sm">
            We’re looking for a Full Stack Developer with 5+ years of experience
            in React, Node.js, and cloud technologies. The ideal candidate
            should have strong problem-solving skills and experience with agile
            methodologies.
          </p>
        </div>

        {/* Interview Questions */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Interview Questions</h2>
          <ul className="list-disc list-inside text-sm space-y-1 text-blue-600">
            <li>Explain the concept of middleware in Node.js</li>
            <li>How do you handle state management in React?</li>
            <li>Describe a challenging project you’ve worked on</li>
          </ul>
        </div>

        {/* Candidate List */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Candidates (3)</h2>
          <div className="space-y-3">
            {/* Candidate 1 */}
            <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src="/avatar-michael.png"
                  alt="Michael Chen"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-gray-500">
                    Completed on Oct 20, 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-semibold">8.5/10</span>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  View Report
                </a>
              </div>
            </div>

            {/* Candidate 2 */}
            <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src="/avatar-sarah.png"
                  alt="Sarah Williams"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Sarah Williams</p>
                  <p className="text-sm text-gray-500">
                    Pending – Scheduled for Oct 27, 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-yellow-500 font-semibold">Pending</span>
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
