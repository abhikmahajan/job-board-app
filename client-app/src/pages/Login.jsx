import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import image from "../assets/logo.png";

function Login() {
  const [userType, setUserType] = useState("seeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogo = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login(email, password, userType);

      if (user.userType === "recruiter") {
        navigate("/recruiter/dashboard");
      } else {
        navigate("/jobseeker/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert(
        error?.response?.data?.msg ||
          "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen lg:p-20 p-10 bg-blue-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <div className="flex items-center gap-4">
                <img src={image} alt="logo" className="w-16 hover:cursor-pointer" onClick={handleLogo}/>
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          {userType === "seeker" ? "Job Seeker Login" : "Recruiter Login"}
        </h2>
        </div>

        {/* User Type Switch */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            type="button"
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
            type="button"
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
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
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
