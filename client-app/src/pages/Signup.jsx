import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import image from "../assets/logo.png";

function Signup() {
  const [userType, setUserType] = useState("seeker");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [resume, setResume] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleLogo = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        email,
        phone,
        password,
        userType,
      };

      if (userType === "recruiter") {
        userData.company = company;
      } else {
        userData.resume = resume;
      }

      const user = await signup(userData);

      if (user.userType) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-blue-100">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded shadow-xl m-5">
        <div className="flex items-center gap-4">
        <img src={image} alt="logo" className="w-16 hover:cursor-pointer" onClick={handleLogo}/>
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          {userType === "seeker" ? "Job Seeker Signup" : "Recruiter Signup"}
        </h2>
        </div>

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
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
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
              placeholder="Email address"
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91"
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
