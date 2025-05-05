import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;