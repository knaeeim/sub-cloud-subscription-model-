import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    useEffect(() => {
        document.title = 'SubCloud || Home';
    })
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='bg-[#90C2E7]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;