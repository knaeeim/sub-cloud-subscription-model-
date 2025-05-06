import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';

const AuthRedirectRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email){
        return <Navigate to='/dashboard' replace></Navigate>
    }

    return children;
};

export default AuthRedirectRoute;