import moment from "moment";
import React from "react";
import { FaBookmark, FaCodeBranch, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Allnews = ({ data }) => {
  const {
    _id,
    author,
    title,
    image_url,
    details,
    rating,
    thumbnail_url,
    total_view,
  } = data;
  let newsDetail = details.slice(0, 195);

  // console.log(newsDetail);
  return (
    <div>
      <div className="card w-[100%] bg-base-100 mb-8 border">
        <div className="flex items-center justify-between bg-gray-100 rounded-md">
          <div className="flex  items-center gap-5">
            <div className="avatar p-3">
              <div className="w-16 rounded-full">
                <img src={author.img} />
              </div>
            </div>
            <div className="p-3">
              <h1>{author.name}</h1>
              <p>{moment(author.published_date).format("yyyy MM D")}</p>
            </div>
          </div>
          <div className="flex p-3 gap-4">
            <FaBookmark className=""></FaBookmark>
            <FaCodeBranch></FaCodeBranch>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <img src={image_url} className="w-[100%]" alt="" />

          <p>
            {newsDetail}
            <Link to={`/newsdetails/${_id}`} className="ml-4 text-amber-500 underline">Read More...</Link>
          </p>

          <hr className="my-6" />
          <div className="flex justify-between">
            <div>
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar className="text-amber-500"></FaRegStar>}
                placeholderSymbol={<FaStar className="text-amber-500"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ml-3">{rating.number}</span>
            </div>
            <div className="flex items-center gap-3">
              
              <FaEye></FaEye>
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allnews;
