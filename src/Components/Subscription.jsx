import React from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import SubscriptionDetails from "./SubscriptionDetails";

const Subscription = () => {
    const location = useLocation();
    const { category_id } = location.state;
    const subscriptionData = useLoaderData();
    const { id } = useParams();
    const subscription = subscriptionData.find(
        (subscription) => subscription.category_id == category_id
    );
    const data = subscription.products.find(
        (product) => product.id === parseInt(id)
    );
    return (
        <div className="">
            <SubscriptionDetails product={data}></SubscriptionDetails>
        </div>
    );
};

export default Subscription;
