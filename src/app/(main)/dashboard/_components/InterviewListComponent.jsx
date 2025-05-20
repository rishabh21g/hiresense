import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Send } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const InterviewListComponent = ({ interview, viewDetails = false }) => {
  const copyLink = async () => {
    const interviewLink =
      "https://hiresense.vercel.app/" + "interview/" + interview?.interview_id;
    await navigator.clipboard.writeText(interviewLink);
    toast("Copied Successfully");
  };

  const handleSend = () => {
    if (!interview?.interview_id) {
      toast.error("Interview details are missing.");
      return;
    }

    const interviewLink =
      "https://hiresense.vercel.app/" + "interview/" + interview?.interview_id;
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
    <div className="bg-card text-card-foreground rounded-xl border shadow-md p-5 flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out w-80 h-60">
      <div className="flex-grow mb-4">
        <h3
          className="text-lg font-semibold text-primary capitalize truncate"
          title={interview?.jobPosition}
        >
          {interview?.jobPosition || "Untitled Interview"}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 mb-3">
          Created: {moment(interview?.created_at).format("MMMM Do, YYYY")}
        </p>
        <div className="text-sm text-muted-foreground mt-2 space-y-1">
          <p>
            <span className="font-medium text-card-foreground">Duration:</span>{" "}
            {interview?.duration ? `${interview?.duration} mins` : "Not set"}
          </p>
          <p>
            <span className="font-medium text-card-foreground">Candidates:</span>{" "}
            <span className="text-green-600 font-medium">
              {interview?.Feedback?.length || 0}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-border">
        {!viewDetails ? (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="flex-1 text-primary border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Copy className="mr-2 h-4 w-1/2" /> Copy Link
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleSend}
              className="flex-1" // Relies on variant="default" for primary styling
            >
              <Send className="mr-2 h-4 w-1/2" /> Send Invite
            </Button>
          </div>
        ) : (
          <Link
            href={`/scheduled-interview/${interview?.interview_id}/details`}
            className="w-full"
          >
            <Button
              className="w-full" // Relies on variant="default" for primary styling
              variant="default"
              size="sm"
            >
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default InterviewListComponent;
