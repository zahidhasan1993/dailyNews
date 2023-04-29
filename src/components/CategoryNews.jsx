import React from 'react';
import LeftSideBar from './pages/shared/LeftSideBar';
import RightSidebar from './pages/shared/RightSidebar';
import { useLoaderData, useParams } from 'react-router-dom';
import Allnews from './Allnews';

const CategoryNews = () => {
    // const import {  } from 'module'; = useParams();
    const datas = useLoaderData();
    // console.log(data);
    // console.log(data.id);
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-4 mt-16">
        <div className="">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-2">
          {
            datas.map(data => <Allnews key={data._id} data={data}></Allnews>)
          }
        </div>
        <div className="">
          <RightSidebar></RightSidebar>
        </div>
      </div>
        </div>
    );
};

export default CategoryNews;