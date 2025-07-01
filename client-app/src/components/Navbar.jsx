import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        JobBoard
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/jobs" className="hover:text-blue-600">Find Jobs</Link>
        <Link to="/post-job" className="hover:text-blue-600">Post a Job</Link>
        <Link to="/login" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">Login</Link>
        <Link to="/signup" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
