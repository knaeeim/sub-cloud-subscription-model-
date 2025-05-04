import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto min-h-[calc(100vh-100px)] flex items-center justify-center">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayOut;
