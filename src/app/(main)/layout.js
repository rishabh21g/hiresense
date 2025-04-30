import { UserProvider } from "@/context/UserContext";
import DashboardProvider from "./provider.js";
const DashboardLayout = ({ children }) => {
  return (
    <UserProvider>
      <div className="w-full">
        <DashboardProvider>
          <div className="p-10 mx-auto my-4 w-full">{children}</div>
        </DashboardProvider>
      </div>
    </UserProvider>
  );
};
export default DashboardLayout;
