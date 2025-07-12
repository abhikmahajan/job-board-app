import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const [userType, setUserType] = useState("seeker");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [resume, setResume] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
        userType,
      };

      if (userType === "recruiter") {
        userData.company = company;
      } else {
        userData.resume = resume;
      }

      const user = await signup(userData);

      if (user.userType === "recruiter") {
        navigate("/recruiter/dashboard");
      } else {
        navigate("/jobseeker/dashboard");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          {userType === "seeker" ? "Job Seeker Signup" : "Recruiter Signup"}
        </h2>

        {/* User Type Switch */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setUserType("seeker")}
            className={`px-4 py-2 rounded ${
              userType === "seeker"
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

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {userType === "recruiter" && (
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          {userType === "seeker" && (
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Resume Link (optional)
              </label>
              <input
                type="url"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
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
