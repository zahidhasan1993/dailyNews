import React from "react";
import RightSidebar from "./pages/shared/RightSidebar";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const {author,details,image_url,title} = data;
  console.log(data);
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4 mt-16">
        <div className="col-span-3">
          <div className="card w-[100%] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{title}</h2>
              <p className="text-xl text-gray-600">{details}</p>
              <div className="card-actions mt-7">
                <Link to="/" className="btn bg-red-700"><FaArrowAltCircleLeft className="mr-4"></FaArrowAltCircleLeft> Go back to home page</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
