import { Link } from "react-router-dom";

function RecruiterBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        JobBoard
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/post-job" className="hover:text-blue-600">
          Post a Job
        </Link>
        <Link
          to="/pricing"
          className="ml-4 text-sm text-gray-800 hover:underline"
        >
          Pricing
        </Link>
      </div>
    </nav>
  );
}

export default RecruiterBar;
