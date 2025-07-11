import Seekerbar from "../components/Seekerbar";
import FindJobs from "./FindJobs";


function SeekerDashboard() {




  return (
    <div>
        <Seekerbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <FindJobs/>
      
    </div>
    </div>
  );
}
export default SeekerDashboard;