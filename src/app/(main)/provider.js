import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import AppSidebar from "../(main)/components/AppSidebar";
import Welcome from "./dashboard/_components/Welcome";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="max-w-7xl mx-auto p-5 min-h-screen" >
        <Welcome/>
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;
