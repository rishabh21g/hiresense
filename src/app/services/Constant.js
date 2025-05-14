import {
  DollarSign,
  IdCardIcon,
  LayoutDashboard,
  Settings,
  TimerIcon,
} from "lucide-react";
import { Cpu, Lightbulb, Briefcase, Users, UserCheck } from "lucide-react";

export const sidebarOPtions = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/dashboard",
  },
  {
    name: "Schedule Interview",
    icon: <TimerIcon />,
    path: "/scheduled-interview",
  },
  {
    name: "All Interview",
    icon: <IdCardIcon />,
    path: "/all-interview",
  },
  {
    name: "Billing",
    icon: <DollarSign />,
    path: "/billing",
  },
  {
    name: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];
export const InterviewTypes = [
  { type: "technical", icon: <Cpu /> },
  { type: "problem-solving", icon: <Lightbulb /> },
  { type: "experience", icon: <Briefcase /> },
  { type: "leadership", icon: <Users /> },
  { type: "behavioural", icon: <UserCheck /> },
];

export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions on increasing difficulty levels:
Job Title: {{jobTitle}}
Job Description:{{jobDescription}}
Interview Duration: {{duration})
Interview Type: {{types}}
Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{types}} interview.
✔ Format your response in JSON format with array list of questions.
Make sure you return only json object as below mentioned format nothing else should not be delivered as response i m saying again remember that
format: interviewQuestions=[
{
question:",
type: 'Technical/Behavioral/Experince/Problem Solving/Leadership'
}.{
The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`;

export const feedbackForm = ` {{conversation}}
Depends on this Interview Conversation between assitant and user,
Give me feedback for user interview. Give me rating out of 10 for technical Skills,
Communication, Problem Solving, Experince. Also give me summery in 3 lines
about the interview and one line to let me know whether is recommanded
for hire or not with msg. Give me response in JSON format
{
feedback:{
rating:{
techicalSkills:5,
communication:6,
problem Solving:4,
experince:7
},
summary:<in 3 Line>,
Recommendation:",
RecommendationMsg:"
}
`;
