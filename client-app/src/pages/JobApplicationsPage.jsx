import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobApplicationsPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/applications/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setApplications(res.data);
      } catch (err) {
        console.error('Error fetching applications', err);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">My Job Applications</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map(app => (
            <div key={app._id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{app.job.title}</h3>
              <p className="text-gray-600">{app.job.company || 'Company Name'}</p>
              <p>Status: <span className="font-medium">{app.status}</span></p>
              <p>Applied At: {new Date(app.appliedAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobApplicationsPage;
