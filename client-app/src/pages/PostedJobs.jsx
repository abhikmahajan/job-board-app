import RecruiterBar from "../components/RecruiterBar";
import api from "../utils/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostedJobs = ({showBack = true}) => {

    const [jobs, setJobs] = useState([]);

     useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/api/jobs/my-jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);


  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/recruiter/dashboard");
  };

  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

      return (

        <div>
          
          {showBack && (
            <div>
            <RecruiterBar />
            <p onClick={handleLogo} alt="Logo" className="hover:cursor-pointer text-3xl m-2 ">🔙</p>
            </div>
          )}
          
          
           <h2 className="text-3xl font-bold text-center text-blue-800 my-6">
        Posted Jobs
      </h2>
      
        <div className="grid gap-4 mt-10">
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">You haven’t posted any jobs yet.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="p-4 border rounded shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-md text-gray-500">{job.company}</p>
                  <div className="mt-2 flex gap-5">
                    <p className="text-sm text-gray-700">📍{job.location}</p>
                    <p className="text-sm text-gray-700">💵{job.salaryRange}</p>
                    <p className="text-sm text-gray-700">📃{job.jobType}</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">💻{job.skillsRequired}</p>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-700" >
                    <p className="font-semibold">📝 Job Description: </p>
                  <p>
                     {job.description?.substring(0, 100)}...
                  </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setIsModalOpen(true);
                  }}
                  className="border p-2 px-6 mr-10 rounded bg-blue-500 text-white"
                >
                  Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
        {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {selectedJob.title}
            </h2>
            <p className="text-gray-600 mb-1">
              <strong>Company:</strong> {selectedJob.company}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Job Type:</strong> {selectedJob.jobType}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Salary:</strong> {selectedJob.salaryRange} 
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Skills:</strong> {selectedJob.skillsRequired?.join(", ")}
            </p>
            <p className="text-gray-800 whitespace-pre-line">
              {selectedJob.description}
            </p>
            <button className="border p-1 bg-red-500 text-white rounded">
              Recruited ?
            </button>
            
          </div>
        </div>
      )}
      </div>

      );
}

export default PostedJobs;