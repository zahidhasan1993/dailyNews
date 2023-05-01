import React, { useContext } from 'react';
import { DataProvider } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(DataProvider);
    const location = useLocation();
    // console.log(location);

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;