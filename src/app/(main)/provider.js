import {  SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import AppSidebar from "../(main)/components/AppSidebar";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
        <AppSidebar/>
      <div>
        <SidebarTrigger/>
        {children}
        </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;
