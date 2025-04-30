import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import AppSidebar from "../(main)/components/AppSidebar";
import Welcome from "./dashboard/_components/Welcome";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className=" w-full p-4">
        <Welcome/>
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;
