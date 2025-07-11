import image from "../assets/landing.png"; 
import Navbar from "../components/Navbar";


function Landing() {
  return (
    <>
    <Navbar/>
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${image})` }}>
      <div className="text-center bg-[#d7ecfa] p-6 rounded-2xl max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          Your Career Starts Here
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Find your dream job or the perfect candidate. Everything in one place.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg">
          Get Started
        </button>
      </div>
    </div>
    </>
  );
}

export default Landing;
