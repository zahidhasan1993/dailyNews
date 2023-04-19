import React from 'react';
import Navbar from './Navbar';
import RightSidebar from './pages/shared/RightSidebar';
import LeftSideBar from './pages/shared/LeftSideBar';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 mt-16'>
                <div className=''>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-span-2'>
                    news are comming here
                </div>
                <div className=''>
                    <RightSidebar></RightSidebar>
                </div>

            </div>
        </div>
    );
};

export default Home;