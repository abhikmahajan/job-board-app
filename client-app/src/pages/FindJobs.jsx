import { useState } from "react";

const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹6-10 LPA",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CodeHaus",
    location: "Remote",
    type: "Part-time",
    salary: "₹4-6 LPA",
    posted: "1 week ago",
  },
];

function FindJobs() {
  const [jobs] = useState(dummyJobs);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Find Jobs</h2>

      {/* Filters (basic placeholder for now) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input type="text" placeholder="Search by title..." className="border px-3 py-2 rounded" />
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
          <div key={job.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
            <p className="text-gray-700">{job.company} · {job.location}</p>
            <p className="text-sm text-gray-500">{job.type} · {job.salary}</p>
            <p className="text-sm text-gray-400 mt-1">{job.posted}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindJobs;
