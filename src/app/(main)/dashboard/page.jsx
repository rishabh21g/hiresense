import CreateOptions from "./_components/CreateOptions";
import InterviewList from "./_components/InterviewList";
import { UserProvider } from "@/context/UserContext";
const Dashboard = () => {
  return (
    <UserProvider>
      <div className="w-full h-full mx-auto flex-col gap-6">
        <h2 className="text-3xl font-bold mt-4">Dashboard</h2>
        <CreateOptions />
        <InterviewList />
      </div>
    </UserProvider>
  );
};
export default Dashboard;
