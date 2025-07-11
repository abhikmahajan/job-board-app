import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Seekerbar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        JobBoard
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
        <Link
          to="/profile"
          className="hover:text-blue-600 border p-1 px-2 rounded-lg border-blue-400"
        >
          👨‍🦱 {name}
        </Link>
      </div>
    </nav>
  );
}

export default Seekerbar;
