import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import SubscriptionDetails from "./SubscriptionDetails";

const Subscription = () => {
    const subscriptionData = useLoaderData();
    const { product_id, cat_id } = useParams();

    useEffect(() => {
        document.title = 'SubCloud || Pricing';
    })

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
