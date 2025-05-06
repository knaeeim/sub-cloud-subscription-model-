import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";

const PopulerProducts = () => {
    const data = useLoaderData();
    const firstProducts = data[0].products.filter(
        (product) => product.is_popular === true
    );
    const secondProducts = data[1].products.filter(
        (product) => product.is_popular === true
    );
    const thirdProducts = data[2].products.filter(
        (product) => product.is_popular === true
    );
    const fourthProducts = data[3].products.filter(
        (product) => product.is_popular === true
    );

    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center font-bold mb-5">Browse Our <span className="text-[#092327]"> Most Populer Products</span> from Category.. <br /> and Buy a Suitable Subscription for you...</h1>
            <div>
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
                    {firstProducts.map((product) => (
                        <ProductCard key={product.id} product={product} cat_id={101}></ProductCard>
                    ))}
                    {secondProducts.map((product) => (
                        <ProductCard key={product.id} product={product} cat_id={102}></ProductCard>
                    ))}
                    {thirdProducts.map((product) => (
                        <ProductCard key={product.id} product={product} cat_id={103}></ProductCard>
                    ))}
                    {fourthProducts.map((product) => (
                        <ProductCard key={product.id} product={product} cat_id={104}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopulerProducts;
