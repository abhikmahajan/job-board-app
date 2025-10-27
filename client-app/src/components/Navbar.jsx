import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center mx-20">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        JobBoard
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
