import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, Copy, Send } from "lucide-react";
import moment from "moment";
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
      interview?.interview_id; // Assuming NEXT_DOMAIN_URL also needs to be public
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
    <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-5 flex flex-col w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex-grow mb-4">
        <h3
          className="text-lg font-semibold text-slate-800 capitalize truncate"
          title={interview?.jobPosition}
        >
          {interview?.jobPosition || "Untitled Interview"}
        </h3>
        <p className="text-xs text-slate-500 mt-1 mb-3">
          Created: {moment(interview?.created_at).format("MMMM Do, YYYY")}
        </p>
        <div className="text-sm text-slate-600 px-3 py-1.5 rounded-md flex justify-between">
          <span className="font-medium">Duration:</span>{" "}
          {interview?.duration ? `${interview?.duration} ` : "Not set"}
          <span className="text-sm text-green-600">
            Candidates: {interview?.Feedback?.length }
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200">
        {!viewDetails ? (
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="flex-1 text-slate-700 hover:bg-slate-50"
            >
              <Copy className="mr-2 h-4 w-4" /> Copy Link
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleSend}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send className="mr-2 h-4 w-4" /> Send Invite
            </Button>
          </div>
        ) : (
          <Button className="w-full" variant="default" size="sm">
            <ArrowRight className=" h-4 w-full" /> View Details
          </Button>
        )}
      </div>
    </div>
  );
};

export default InterviewListComponent;
