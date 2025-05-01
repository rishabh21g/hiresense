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
    path: "/schedule-interview",
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
  { type: "technical", icon: <Cpu/> },
  { type: "problem-solving", icon: <Lightbulb/> },
  { type: "experience", icon: <Briefcase/> },
  { type: "leadership", icon: <Users/> },
  { type: "behavioural", icon: <UserCheck/> },
]
