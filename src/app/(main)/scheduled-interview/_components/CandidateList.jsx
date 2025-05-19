import React, { useState } from "react";
import {
  FileText,
  Users,
  Mail,
  ChevronRight,
  UserCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming these exist and work in JS
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming these exist and work in JS
import { Badge } from "@/components/ui/badge"; // Assuming these exist and work in JS
import { cn } from "@/lib/utils"; // Assuming these exist and work in JS

const CandidateList = ({ interviewDetails }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const feedback = interviewDetails?.Feedback || [];

  const getRatingBadgeVariant = (rating) => {
    if (rating >= 8) return "success";
    if (rating >= 6) return "warning";
    return "destructive";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-teal-600" />
        <h2 className="text-lg font-semibold text-teal-700">
          Candidates ({feedback.length})
        </h2>
      </div>
      {feedback.length === 0 ? (
        <div className="p-4 rounded-md bg-gray-50 border border-gray-200 text-gray-500">
          No candidates have submitted feedback yet.
        </div>
      ) : (
        <div className="space-y-2">
          {feedback.map((candidate, idx) => (
            <React.Fragment key={idx}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <UserCircle className="w-10 h-10 text-blue-500" />
                      <div>
                        <p className="font-medium text-teal-800">
                          {candidate?.userName}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {candidate?.userEmail}
                        </p>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                      View Report
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-white border-teal-200 text-teal-900">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      Candidate Report: {candidate?.userName}
                    </DialogTitle>
                    <DialogDescription>
                      Detailed feedback and evaluation for {candidate?.userName}
                      .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Feedback:</h3>
                      {candidate.feedback ? (
                        <div className="space-y-2">
                          <div>
                            <span className="font-medium">Communication: </span>
                            <Badge
                              variant={getRatingBadgeVariant(
                                candidate?.feedback?.feedback?.rating
                                  ?.communication
                              )}
                            >
                              {
                                candidate?.feedback?.feedback?.rating
                                  ?.communication
                              }{" "}
                              / 10
                            </Badge>
                          </div>
                          <div>
                            <span className="font-medium">Experience:</span>
                            <Badge
                              variant={getRatingBadgeVariant(
                                candidate?.feedback?.feedback?.rating
                                  ?.experience
                              )}
                            >
                              {
                                candidate?.feedback?.feedback?.rating
                                  ?.experience
                              }{" "}
                              / 10
                            </Badge>
                          </div>
                          <div>
                            <span className="font-medium">
                              Problem Solving:
                            </span>
                            <Badge
                              variant={getRatingBadgeVariant(
                                candidate?.feedback?.feedback?.rating
                                  ?.problemSolving
                              )}
                            >
                              {
                                candidate?.feedback?.feedback?.rating
                                  ?.problemSolving
                              }{" "}
                              / 10
                            </Badge>
                          </div>
                          <div>
                            <span className="font-medium">
                              Technical Skills:
                            </span>
                            <Badge
                              variant={getRatingBadgeVariant(
                                candidate?.feedback?.feedback?.rating
                                  ?.technicalSkills

                              )}
                            >
                              {
                                candidate?.feedback?.feedback?.rating
                                  ?.technicalSkills

                              }{" "}
                              / 10
                            </Badge>
                          </div>
                          <p>
                            <span className="font-medium">Summary: </span>
                            {candidate?.feedback?.feedback?.summary}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-500">No feedback available.</p>
                      )}
                    </div>

                    <div>
                      <span className="font-medium">Recommendation:</span>
                      <Badge
                        variant={
                          candidate.recommendation ? "success" : "destructive"
                        }
                        className={cn(
                          candidate.recommendation
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        )}
                      >
                        {candidate.recommendation
                          ? "Recommended"
                          : "Not Recommended"}
                      </Badge>
                      {candidate.recommendationMsg && (
                        <p className="mt-2 text-gray-700">
                          <span className="font-medium">Message:</span>{" "}
                          {candidate?.feedback?.recommendationMsg}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    
                  </div>
                </DialogContent>
              </Dialog>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidateList;
