import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import image from "../assets/favicon.png";
import { useState } from "react";

function Seekerbar() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-4">
        <img src={image} alt="logo" className="h-8"/>JobBoard
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link
          to="/job-applications"
          className="text-sm text-gray-700 hover:underline ml-4"
        >
          My Applications
        </Link>
        <Link to="/jobs" className="hover:text-blue-600">
          Find Jobs
        </Link>
        <button  onClick={() => setOpen(!open)}
          className="hover:text-blue-600 border p-1 px-2 rounded-lg border-blue-400">👨‍🦱 {user?.firstName || 'User'}</button>
      </div>

      {open && (
    <div className="absolute right-0 mt-48 w-48 bg-white rounded-md shadow-lg border z-50">
      <a
        href="/profile"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        My Profile
      </a>
      <a
        href="/job-applications"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        My Applications
      </a>
      
      <a
        href="/company"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        About Us
      </a>
            <button
        onClick={async () => {
          await logout();
          window.location.href = "/login";
        }}
        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
      >
        Logout
      </button>
    </div>
  )}
    </nav>
  );
}

export default Seekerbar;
