import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import SubCircleCard from "../Components/SubCircleCard";

const SubscriberCircle = () => {
    const blogData = useLoaderData();
    useEffect(() => {
        document.title = "SubCloud || Subscriber Circle";
    }, []);
    return (
        <div>
            {blogData.map((blog) => (
                <SubCircleCard blog={blog}></SubCircleCard>
            ))}
        </div>
    );
};

export default SubscriberCircle;
