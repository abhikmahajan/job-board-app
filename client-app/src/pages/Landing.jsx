import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import FindJobs from "./FindJobs";
import Purpose from "../components/Purpose";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-blue-200 to-white"
      >
        <div className="flex justify-center text-center gap-10 bg-[#d7ecfa] p-6 rounded-2xl max-w-4xl">
          <div><img src={logo} className="max-w-72 rounded-2xl" alt="logo"/></div>
          <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
            Your Career Starts Here
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Find your dream job or the perfect candidate. Everything in one
            place.
          </p>
          <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg">
            Get Started
          </Link>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <FindJobs />
      </div>
      <Purpose />
      <Footer />
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-[999]"></div>

    </>
  );
}

export default Landing;
