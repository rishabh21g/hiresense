"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { UserProvider } from "@/context/UserContext";

const InterviewLinkPage = ({ interviewId, formData }) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const handleCopy = async () => {
    // console.log(process.env.NEXT_DOMAIN_URL)
    await navigator.clipboard.writeText(ref.current.value);
    setCopied(true);
    toast("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <UserProvider>
      <div className="w-full h-auflex flex-col items-center justify-center px-4 py-8 bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl text-center">
          <div className="text-green-500 text-4xl mb-2">✅</div>
          <h1 className="text-2xl font-bold mb-2">
            Your AI Interview is Ready!
          </h1>
          <p className="text-gray-600 mb-6">
            Share this link with your candidates to start the interview process
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Interview Link
            </label>
            <div className="flex items-center gap-2">
              <Input
                readOnly
                value={"http://localhost:3000/" + interviewId}
                className="flex-1"
                ref={ref}
              />
              <Button onClick={handleCopy} size="sm">
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}{" "}
                Copy Link
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Share via
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toast("Sharing via Email")}
              >
                📧 Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toast("Sharing via Slack")}
              >
                💬 Slack
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toast("Sharing via WhatsApp")}
              >
                📱 WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-6 flex justify-between text-sm text-blue-600 font-semibold">
            <button onClick={() => toast("Back to dashboard")}>
              {"< Back to Dashboard"}
            </button>
            <Button onClick={() => toast("Creating new interview")}>
              + Create New Interview
            </Button>
          </div>
        </div>
      </div>
    </UserProvider>
  );
};

export default InterviewLinkPage;
