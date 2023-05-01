import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideNews from "./LeftSideNews";

const LeftSideBar = () => {
  const [category, setCategory] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/category/4")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  // console.log(category);
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">All Category</h1>
      {category.map((data) => (
        <>
          <button key={data.id} className="btn btn-outline mb-2 w-[75%]">
            {" "}
            <Link to={`/category/${data.id}`}>{data.name} </Link>
          </button>
          <br />
        </>
      ))}

      {
        news.map(data => <LeftSideNews key={data._id} data={data}></LeftSideNews>)
      }
    </div>
  );
};

export default LeftSideBar;
