import api from "../utils/axios";
import { useEffect, useState } from "react";

function FindJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/api/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Find Jobs
      </h2>

      {/* Filters (basic placeholder for now) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="border px-3 py-2 rounded"
        />
        <select className="border px-3 py-2 rounded">
          <option value="">Location</option>
          <option value="Remote">Remote</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <select className="border px-3 py-2 rounded">
          <option value="">Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <select className="border px-3 py-2 rounded">
          <option value="">Sort</option>
          <option value="latest">Latest</option>
          <option value="salary">Salary</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid gap-4">
        {jobs.map((job) => (
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

                <p className="text-sm mt-2">
                  {job.description?.substring(0, 100)}...
                </p>
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
        ))}
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
            <button className="border p-1 bg-green-500 text-white rounded">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FindJobs;
