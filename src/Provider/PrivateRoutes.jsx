import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading';

const PrivateRoutes = ({ children }) => {

    const {loading, user } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoutes;