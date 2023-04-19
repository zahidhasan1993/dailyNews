import React from "react";
import { FaGofore, FaGithubSquare,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from "./Qzone";
import bg from "../../../assets/bg1.png"

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
      <div className="mb-8">
        <ul>
          <li className="border border-gray-400 p-5 rounded text-blue-600 flex items-center" ><FaFacebook className="mr-3"></FaFacebook><a href=""> Facebook</a></li>
          <li className="border border-gray-400 p-5 rounded flex items-center text-blue-800"><FaTwitter className="mr-3"></FaTwitter><a href="">Twitter</a></li>
          <li className="border border-gray-400 p-5 rounded flex items-center text-red-800"><FaInstagram className="mr-3"></FaInstagram><a href="">Instagram</a></li>
        </ul>
      </div>
      <Qzone></Qzone>

      <div className="mt-8 ">
      <div className="card w-[100%] image-full">
  <figure><img src={bg} className="w-[100%]" alt="Shoes" /></figure>
  <div className="card-body mt-52">
    <h2 className="text-3xl">Create an Amazing Newspaper</h2>
    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

    <button className="btn btn-error">Learn More</button>
   
  </div>
</div>
        
      </div>

    </div>
  );
};

export default RightSidebar;
