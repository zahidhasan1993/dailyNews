import moment from "moment";
import React from "react";

const Allnews = ({ data }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    thumbnail_url,
    total_view,
  } = data;
  let newsDetail = details.slice(0,195);

  const fullNews = () => {
    newsDetail = details;
    console.log(newsDetail);
  }
  // console.log(newsDetail);
  return (
    <div>
      <div className="card w-[100%] bg-base-100 mb-8">
        <div className="flex  items-center gap-5 bg-gray-100 rounded-md">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={author.img} />
            </div>
          </div>
          <div>
            <h1>{author.name}</h1>
            <p>{moment(author.published_date).format('yyyy MM D')}</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <img src={image_url} className="w-[100%]" alt="" />

          <p>{newsDetail}<a className="ml-4 text-blue-700 underline" onClick={fullNews}>Read More...</a></p>
        </div>
      </div>
    </div>
  );
};

export default Allnews;
