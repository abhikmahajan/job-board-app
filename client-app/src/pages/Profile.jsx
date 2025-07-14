
import Seekerbar from "../components/Seekerbar";
import { useAuth } from "../context/AuthContext";

function Resume() {


  return (
    <div>
      <Seekerbar />
    <div className="flex flex-col items-center h-screen mt-10">
      <form className="w-full max-w-md bg-gray-100 p-8 rounded-xl border shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="mb-4">

          {/* First Name  */}
          <label className="block text-sm font-medium mb-2 mt-10">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder={useAuth().user?.firstName || "Enter your full name"}
          />

          {/* Last Name  */}
          <label className="block text-sm font-medium mb-2 mt-4">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder={useAuth().user?.lastName || "Enter your full name"}
          />

          {/* Email */}
          <label className="block text-sm font-medium mb-2 mt-4">Email</label>
          <div className="w-full p-2 bg-white border border-gray-300 rounded">
            {useAuth().user?.email }
          </div>

          {/* Phone */}
          <label className="block text-sm font-medium mb-2 mt-4">Phone</label>
          <div className="w-full p-2 bg-white border border-gray-300 rounded">
            {useAuth().user?.phone }
          </div>

            <button className="border w-full border-white bg-blue-600 text-white py-2 text-sm mt-10 rounded">Update</button>

          
          </div>
      </form>
    </div>
    </div> 
  );
}

export default Resume;