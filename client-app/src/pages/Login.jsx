import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userType, setUserType] = useState("jobseeker"); // or "recruiter"

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          {userType === "jobseeker" ? "Job Seeker Login" : "Recruiter Login"}
        </h2>

        {/* Switch between user types */}
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

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <div className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
