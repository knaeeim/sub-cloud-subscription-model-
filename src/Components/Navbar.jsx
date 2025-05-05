import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/SubCloud.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const links = (
        <>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#092327] px-3 py-2 rounded-2xl mx-3 text-white"
                        : "mx-3 px-3 py-2"
                }
                to="/">
                <li>Home</li>
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#092327] px-3 py-2 rounded-2xl mx-3 text-white"
                        : "mx-3 px-3 py-2"
                }
                to="/dashboard">
                <li>My Profile</li>
            </NavLink>
        </>
    );
    return (
        <div className="navbar bg-base-200 shadow-sm lg:px-16 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex items-center justify-center">
                        {links}
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 h-10" src={logo} alt="" />
                    <a className="text-2xl font-bold">SubCloud</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                {user && (
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>
                )}
                {user ? (
                    <>
                        <Link
                            to="/auth/login"
                            className="btn bg-[#4E8098] text-white">
                            Log Out
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            to="/auth/login"
                            className="btn bg-[#4E8098] text-white">
                            Log In
                        </Link>
                        <Link to="/auth/register" className="btn bg-[#90C2E7]">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
