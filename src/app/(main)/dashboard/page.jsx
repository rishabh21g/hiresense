import CreateOptions from "./_components/CreateOptions";
import InterviewList from "./_components/InterviewList";
import { UserProvider } from "@/context/UserContext";
const Dashboard = () => {
  return (
    <UserProvider>
      <div className="relative min-h-screen">
        {/* Fixed Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(7,122,121,0.3),transparent)]" />
        </div>

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          <CreateOptions />
          <InterviewList />
        </div>
      </div>
    </UserProvider>
  );
};
export default Dashboard;
