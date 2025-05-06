import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import DashBoardCard from "../Components/DashBoardCard";

const DashBoard = () => {
    const { loading, user, subscribed } = useContext(AuthContext);

    const navigate = useNavigate();
    const data = useLoaderData();

    useEffect(() => {
        document.title = "SubCloud || DashBoard";
    });

    if (loading) {
        return <Loading></Loading>;
    }

    const handleEditPage = () => {
        navigate("/edit_user_details");
    };

    return (
        <div>
            <div className="min-h-[calc(100vh-500px)] py-10 px-4">
                <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#4E8098] to-[#0B5351] h-32"></div>
                    <div className="flex items-center px-6 -mt-[92px]">
                        <img
                            className="w-32 h-32 rounded-full border-4 border-[#0B5351] shadow-md"
                            src={user?.photoURL}
                            alt="User avatar"
                        />
                        <div className="ml-3">
                            <h2 className="text-4xl font-semibold text-white">
                                {user?.displayName}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button
                            onClick={handleEditPage}
                            className="btn bg-[#4E8098] text-white">
                            Edit Profile
                        </button>
                    </div>
                    <div className="px-6 py-8 border-t flex justify-center items-center min-h-[calc(100vh-600px)]">
                        {subscribed && subscribed.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {subscribed.map((sub) => (
                                    <DashBoardCard
                                        key={sub.product.id}
                                        product={sub.product}
                                        cat_id={sub.cat_id}
                                        months={sub.months}
                                        fullData={data}></DashBoardCard>
                                ))}
                            </div>
                        ) : (
                            <h1 className="text-center text-[#4E8098] text-3xl">
                                No Subscriptions Yet..
                            </h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
