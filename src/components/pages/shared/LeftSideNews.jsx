import React from "react";

const LeftSideNews = ({ data }) => {
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
  return (
    <div>
      <div className="card w-[100%] mt-5 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{author.name}</div>
            <div className="badge badge-outline">{total_view}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNews;
