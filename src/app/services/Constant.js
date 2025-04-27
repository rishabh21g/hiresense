import { DollarSign, IdCardIcon, LayoutDashboard, Settings, TimerIcon } from "lucide-react";

export const sidebarOPtions=[
    {
        name: "Dashboard",
        icon:<LayoutDashboard/>,
        path : "/dashboard"
    },
    {
        name: "Schedule Interview",
        icon:<TimerIcon/>,
        path : "/schedule-interview"
    },
    {
        name: "All Interview",
        icon:<IdCardIcon/>,
        path : "/all-interview"
    },
    {
        name: "Billing",
        icon:<DollarSign/>,
        path : "/billing"
    },
    {
        name: "Settings",
        icon:<Settings/>,
        path : "/settings"
    }
]