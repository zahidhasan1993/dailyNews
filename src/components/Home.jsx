import React, { useContext, useEffect, useState } from "react";
import RightSidebar from "./pages/shared/RightSidebar";
import LeftSideBar from "./pages/shared/LeftSideBar";
import Allnews from "./Allnews";
import { DataProvider } from "./providers/AuthProvider";

const Home = () => {
  // const user = useContext(DataProvider);
  // console.log(user);
  const [news,setNews] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/news')
    .then(res => res.json())
    .then(data => setNews(data))
  },[])
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4 mt-16">
        <div className="">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-2">
            {
                news.map(singleNews => <Allnews key={singleNews._id} data={singleNews}></Allnews>)
            }
        </div>
        <div className="">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Home;
