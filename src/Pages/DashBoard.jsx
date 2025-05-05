import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading';

const DashBoard = () => {

    const { loading } = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Hello Welcome from DashBoard.....</h1>
        </div>
    );
};

export default DashBoard;