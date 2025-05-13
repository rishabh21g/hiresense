"use client";
import { Mic, MicOff } from "lucide-react";
import { useInterview } from "@/context/InterviewDataContext";
import Vapi from "@vapi-ai/web";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { sb } from "@/app/services/supabaseClient";
import { useParams, useRouter } from "next/navigation";

const StartInterview = () => {
  const { interviewInfo } = useInterview();
  const [activeUser, setActiveUser] = useState(null);
  const [conversation, setConversation] = useState();
  const { interview_id } = useParams();
  const router = useRouter();
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);
  let questions = "";
  async function startCall() {
    interviewInfo?.questionList?.forEach((q, idx) => {
      questions += `${idx + 1}. ${q.question}\n`;
    });
    console.log(questions);

    try {
      console.log(process.env.NEXT_PUBLIC_VAPI_API_KEY);
      await vapi.start(assistantOptions);
    } catch (error) {
      console.log(error);
    }
  }
  const assistantOptions = {
    name: "HireSense ",
    firstMessage: `Hi ${interviewInfo?.userName}, welcome to your interview for the ${interviewInfo?.jobPosition} role. I'm HireSense AI, your virtual interviewer. Let's begin with a few questions to get to know you better.`,
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en-US",
    },
    voice: {
      provider: "playht",
      voiceId: "jennifer",
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `
  You are HireSense AI, a professional and friendly virtual assistant designed to conduct technical interviews for the position of ${interviewInfo?.jobPosition}.
  
  Your responsibilities:
  - Start with a polite and engaging introduction.
    Example: "Hi ${interviewInfo?.userName}, welcome to your ${interviewInfo?.jobPosition} interview. Let’s begin with a few questions."
  
  - First question should always be: "Tell me about yourself."
    After the candidate responds, continue with questions from the provided list: ${questions}
  
  Interview Flow Guidelines:
  1. Ask one question at a time.
  2. After each response, provide short and constructive feedback.
     - If the answer is good: "That's a strong response, thank you."
     - If the answer is unclear or incorrect: "Not quite. Would you like a hint or want to try again?"
  3. Be ready to provide hints or rephrase questions without giving away the answer.
     - Example: "Here’s a hint — think about how React handles state updates."
  
  Tone and Experience:
  - Maintain a professional but conversational tone.
  - Keep the candidate at ease, but focused.
  - Use smooth transitions like:
    "Alright, let’s move to the next one."  
    "Now, let’s talk about..."  
    "Here's a scenario you might encounter..."
  
  Interview Wrap-Up:
  - After 5–7 questions, summarize their performance.
    Example: "Thanks for sharing your thoughts! You showed solid understanding in several areas."
  
  - End on a positive note:
    "It was a pleasure interviewing you. Best of luck with your journey, and we hope to see you at HireSense soon."
  
  Checklist:
  ✔ Professional yet warm tone  
  ✔ Clear and focused questions  
  ✔ Adaptive responses and guidance  
  ✔ Keep it React-focused (unless specified otherwise)  
          `.trim(),
        },
      ],
    },
  };

  const GenerateFeedback = async () => {
    const result = await axios.post("/api/feedback", {
      conversation: conversation,
    });
    console.log(result);
    const Content = result?.data?.content;
    const FINAL_CONTENT = Content.replace("```json", "")
      .replace("```", "")
      .trim();
    console.log(FINAL_CONTENT);
    const { data, error } = await sb
      .from("Feedback")
      .insert([
        {
          userName: interviewInfo?.userName,
          userEmail: interviewInfo?.userEmail,
          interview_id: interview_id,
          feedback: JSON.parse(FINAL_CONTENT),
          recommendation: false,
        },
      ])
      .select();
    console.log(data);
    router.replace("/interview/completed");
  };

  useEffect(() => {
    if (interviewInfo) startCall();
    console.log(interviewInfo);
  }, []);

  useEffect(() => {
    const handleConvo = (message) => {
      if (message?.conversation) {
        const conversationStr = JSON.stringify(message?.conversation);
        console.log("CONVO STRING" + conversationStr);
        setConversation(conversationStr);
      }
    };
    vapi.on("message", handleConvo);
    vapi.on("speech-start", () => {
      console.log("Assistant speech has started.");
      setActiveUser(false);
    });
    vapi.on("speech-end", () => {
      console.log("Assistant speech has ended.");
      setActiveUser(true);
    });
    vapi.on("call-start", () => {
      console.log("Call has started.");
      toast("Call connected!");
    });
    vapi.on("call-end", () => {
      console.log("Call has ended.");
      toast("Call ended!");
      GenerateFeedback();
    });
    return () => {
      vapi.off("message", handleConvo);
      vapi.off("speech-start", () => console.log("END"));
      vapi.off("speech-end", () => console.log("END"));
      vapi.off("call-start", () => console.log("END"));
      vapi.off("call-end", () => console.log("END"));
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-5xl w-full relative">
        <h2 className="text-2xl font-bold mb-6 text-center">
          AI Interview Session
        </h2>

        {/* Interview Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Interviewer */}
          <div className="rounded-xl bg-gray-800 h-64 flex flex-col items-center justify-center relative shadow-lg">
            <div className="text-xl font-semibold">AI Interviewer</div>
            <span className="absolute bottom-3 left-3 bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
              AI Interviewer
            </span>
            {!activeUser && (
              <div className="flex gap-2 mt-4 animate-pulse">
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-bounce [animation-delay:.7s]"></div>
              </div>
            )}
          </div>

          {/* User */}
          <div className="rounded-xl bg-gray-700 h-64 flex flex-col items-center justify-center relative shadow-lg">
            <div className="text-xl font-semibold">
              {interviewInfo?.userName || "You"}
            </div>
            <span className="absolute bottom-3 left-3 bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
              You
            </span>
            {activeUser && (
              <div className="flex gap-2 mt-4 animate-pulse">
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-bounce [animation-delay:.7s]"></div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-center mt-10 space-x-6">
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-300">
            <Mic className="w-6 h-6 text-white" />
          </button>
          <button
            className="bg-red-600 hover:bg-red-300 p-3 rounded-full transition duration-300"
            onClick={() => vapi.stop()}
          >
            <MicOff className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Status Text */}
        <p className="text-center mt-4 text-gray-400">
          Interview in progress...
        </p>

        {/* Timer (Top Right) */}
        <div className="absolute top-4 right-6 text-gray-400 text-sm">
          <span>00:05:23</span>
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
