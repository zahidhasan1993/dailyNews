import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/shared/Header';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;