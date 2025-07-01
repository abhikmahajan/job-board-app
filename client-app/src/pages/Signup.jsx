import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userType, setUserType] = useState("jobseeker");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          {userType === "jobseeker" ? "Job Seeker Signup" : "Recruiter Signup"}
        </h2>

        {/* User type switch */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setUserType("jobseeker")}
            className={`px-4 py-2 rounded ${
              userType === "jobseeker"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Job Seeker
          </button>
          <button
            onClick={() => setUserType("recruiter")}
            className={`px-4 py-2 rounded ${
              userType === "recruiter"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Recruiter
          </button>
        </div>

        {/* Signup Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Extra field based on user type */}
          {userType === "recruiter" && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Company Name</label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          {userType === "jobseeker" && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Resume Link (optional)</label>
              <input
                type="url"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
