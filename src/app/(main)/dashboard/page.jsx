import CreateOptions from "./_components/CreateOptions";
import InterviewList from "./_components/InterviewList";
import { UserProvider } from "@/context/UserContext";

const Dashboard = () => {
  return (
    <UserProvider>
      <div className="w-full min-h-screen bg-background text-primary-foreground mx-auto">
        <main className="container mx-auto px-6 py-10 flex flex-col gap-8">
          {/* Section to start new hiring process */}
          <CreateOptions />

          {/* List of interviews */}
          <InterviewList />
        </main>
      </div>
    </UserProvider>
  );
};

export default Dashboard;
