import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecruiterBar from '../components/RecruiterBar'; 

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem('token'); // ✅ token defined at top

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get('/api/recruiter/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJobs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboard();
  }, [token]);

  const handleEdit = (job) => {
    const newTitle = prompt('Enter new job title:', job.title);
    const newDesc = prompt('Enter new description:', job.description);

    if (newTitle && newDesc) {
      axios
        .put(`/api/recruiter/job/${job._id}`, {
          title: newTitle,
          description: newDesc,
        }, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => window.location.reload())
        .catch(err => console.error(err));
    }
  };

  const handleDelete = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      axios
        .delete(`/api/recruiter/job/${jobId}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => window.location.reload())
        .catch(err => console.error(err));
    }
  };

  return (
    <>
    <RecruiterBar />
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Recruiter Dashboard</h2>

      {jobs.map((job) => (
        <div key={job._id} className="mb-8 border rounded p-4 shadow">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-500">{job.description}</p>

          <h4 className="mt-4 font-bold">Applications:</h4>
          <ul className="mt-2 space-y-2">
            {job.applications.map((app) => (
              <li key={app._id} className="border p-2 rounded bg-gray-50">
                <p><strong>Name:</strong> {app.jobSeeker?.name || "N/A"}</p>
                <p><strong>Email:</strong> {app.jobSeeker?.email}</p>
                <p><strong>Status:</strong> {app.status}</p>
              </li>
            ))}
          </ul>

          {/* ✅ Edit & Delete buttons inside job loop */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => handleEdit(job)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default RecruiterDashboard;
