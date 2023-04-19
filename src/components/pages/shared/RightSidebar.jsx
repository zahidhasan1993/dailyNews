import React from "react";
import { FaGofore, FaGithubSquare,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Login With</h1>
      <div className="mb-8">
        <button className="btn btn-outline btn-info w-[100%] mb-2">
          {" "}
          <FaGofore className="h-5 w-5 mr-3"></FaGofore> Login With Google
        </button>
        <button className="btn btn-outline w-[100%]">
          {" "}
          <FaGithubSquare className="h-5 w-5 mr-3"></FaGithubSquare> Login With
          Github
        </button>
      </div>
      <h1 className="text-xl font-bold mb-4">Find Us On</h1>
      <div>
        <ul>
          <li className="border border-gray-400 p-5 rounded text-blue-600 flex items-center" ><FaFacebook className="mr-3"></FaFacebook><a href=""> Facebook</a></li>
          <li className="border border-gray-400 p-5 rounded flex items-center text-blue-800"><FaTwitter className="mr-3"></FaTwitter><a href="">Twitter</a></li>
          <li className="border border-gray-400 p-5 rounded flex items-center text-red-800"><FaInstagram className="mr-3"></FaInstagram><a href="">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
