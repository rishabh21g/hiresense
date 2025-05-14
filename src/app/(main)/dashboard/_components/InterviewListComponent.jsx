import { Button } from "@/components/ui/button";
import {  ArrowRight, Copy, Send } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const InterviewListComponent = ({ interview, viewDetails = false }) => {
  const copyLink = async () => {
    const interviewLink =
      process.env.NEXT_PUBLIC_HOST_DOMAIN_URL +
      "/interview/" +
      interview?.interview_id;
    await navigator.clipboard.writeText(interviewLink);
    toast("Copied Successfully");
  };

  const handleSend = () => {
    if (!interview?.interview_id) {
      toast.error("Interview details are missing.");
      return;
    }

    const interviewLink =
      process.env.NEXT_PUBLIC_DOMAIN_URL +
      "/interview/" +
      interview?.interview_id; 
    const subject = `Interview Invitation: ${
      interview?.jobPosition || "Opportunity"
    }`;
    const body = `Hello,\n\nPlease find the details for your interview below:\n\nPosition: ${interview?.jobPosition}\nLink: ${interviewLink}\n\nWe look forward to speaking with you.\n\nBest regards,`;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    // Removed w-72, width will be handled by the parent grid
    <div className="bg-white rounded-xl border border-gray-200 shadow-md p-5 flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex-grow mb-4">
        <h3
          className="text-lg font-semibold text-[#077a7d] capitalize truncate"
          title={interview?.jobPosition}
        >
          {interview?.jobPosition || "Untitled Interview"}
        </h3>
        <p className="text-xs text-gray-500 mt-1 mb-3">
          Created: {moment(interview?.created_at).format("MMMM Do, YYYY")}
        </p>
        <div className="text-sm text-gray-600 mt-2 space-y-1">
          <p><span className="font-medium text-gray-700">Duration:</span>{" "}
            {interview?.duration ? `${interview?.duration} mins` : "Not set"}
          </p>
          <p><span className="font-medium text-gray-700">Candidates:</span>{" "}
            <span className="text-green-600 font-medium">{interview?.Feedback?.length || 0}</span>
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200">
        {!viewDetails ? (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="flex-1 text-[#077a7d] border-[#077a7d] hover:bg-[#077a7d]/10"
            >
              <Copy className="mr-2 h-4 w-4" /> Copy Link
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleSend}
              className="flex-1 bg-[#077a7d] hover:bg-[#055e60] text-white"
            >
              <Send className="mr-2 h-4 w-4" /> Send Invite
            </Button>
          </div>
        ) : (
          <Link
            href={`/scheduled-interview/${interview?.interview_id}/details`}
            className="w-full" >
            <Button className="w-full bg-[#077a7d] hover:bg-[#055e60] text-white" variant="default" size="sm">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default InterviewListComponent;
