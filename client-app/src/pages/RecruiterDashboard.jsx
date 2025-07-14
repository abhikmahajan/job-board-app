
import RecruiterBar from "../components/RecruiterBar";
import PostedJobs from "./PostedJobs";

const RecruiterDashboard = () => {
 

  
  return (
    <>
      <RecruiterBar />
      
      <div className="max-w-6xl mx-auto mt-10 p-4">
        <PostedJobs showBack={false}/>
        </div>
    </>
  );
};

export default RecruiterDashboard;
