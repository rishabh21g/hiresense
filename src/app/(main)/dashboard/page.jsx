
import Welcome from "./_components/Welcome"
import CreateOptions from "./_components/CreateOptions"
import InterviewList from "./_components/InterviewList"
const Dashboard = () => {
  return (

     <>
      <div className="w-full h-full mx-auto flex-col gap-6">
      {/* <Welcome /> */}
      <h2 className="text-3xl font-bold mt-4">Dashboard</h2>
      <CreateOptions/>
      <InterviewList/>
      
      </div>
     </>
    
  )
}
export default Dashboard
