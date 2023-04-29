import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/shared/Header';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;