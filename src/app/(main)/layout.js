import { UserProvider } from "@/context/UserContext";
import DashboardProvider from "./provider.js";
const DashboardLayout = ({ children }) => {
  return (
    <UserProvider>
      <div >
        <DashboardProvider>
          <div>{children}</div>
        </DashboardProvider>
      </div>
    </UserProvider>
  );
};
export default DashboardLayout;
