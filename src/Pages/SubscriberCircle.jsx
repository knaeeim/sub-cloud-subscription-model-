import React from "react";
import { useLoaderData } from "react-router";
import SubCircleCard from "../Components/SubCircleCard";

const SubscriberCircle = () => {
    const blogData = useLoaderData();
    return (
        <div>
            {
                blogData.map((blog) => <SubCircleCard blog={blog}></SubCircleCard>)
            }
        </div>
    );
};

export default SubscriberCircle;
