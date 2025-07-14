import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindJobs from "./pages/FindJobs";
import PostJob from "./pages/PostJob";
import JobApplicationsPage from "./pages/JobApplicationsPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import SeekerDashboard from "./pages/SeekerDashboard";
import Profile from "./pages/Profile";
import PostedJobs from "./pages/PostedJobs";
import Company from "./pages/Company";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<FindJobs />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/job-applications" element={<JobApplicationsPage />} />
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/jobseeker/dashboard" element={<SeekerDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posted-jobs" element={<PostedJobs />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
