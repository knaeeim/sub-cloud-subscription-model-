import React from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import SubscriptionDetails from "./SubscriptionDetails";

const Subscription = () => {
    const location = useLocation();
    console.log(location);

    const subscriptionData = useLoaderData();
    const { product_id, cat_id } = useParams();
    const subscription = subscriptionData.find(
        (subscription) => subscription.category_id == cat_id
    );
    const data = subscription.products.find(
        (product) => product.id === parseInt(product_id)
    );
    return (
        <div className="">
            <SubscriptionDetails product={data} cat_id={cat_id}></SubscriptionDetails>
        </div>
    );
};

export default Subscription;
