import CreateOptions from "./_components/CreateOptions";
import InterviewList from "./_components/InterviewList";
import { UserProvider } from "@/context/UserContext";
const Dashboard = () => {
  return (
    <UserProvider>
      <div className="w-full min-h-screen bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          <CreateOptions />
          <InterviewList />
        </div>
      </div>
    </UserProvider>
  );
};
export default Dashboard;
