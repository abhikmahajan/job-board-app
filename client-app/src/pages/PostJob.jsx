import { useState } from "react";
import RecruiterBar from "../components/RecruiterBar";
import axios from "axios";

function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Full-time",
    salaryRange: "",
    skillsRequired: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get JWT token from localStorage (adjust if you use sessionStorage or a different key)
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/jobs',
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Job posted successfully!");
      setForm({
        title: "",
        company: "",
        location: "",
        jobType: "Full-time",
        salaryRange: "",
        skillsRequired: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error posting job. Please try again.");
    }
  };

  return (
    <div>
      <RecruiterBar />
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Post a Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div> 

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Job Type</label>
              <select
                name="jobType"
                value={form.jobType}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700">Salary (e.g. ₹6-10 LPA)</label>
            <input
              type="text"
              name="salaryRange"
              value={form.salaryRange}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Skills Required (comma separated)</label>
            <input
              type="text"
              name="skillsRequired"
              value={form.skillsRequired}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Job
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default PostJob;
