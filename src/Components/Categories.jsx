import React from "react";
import { useLoaderData } from "react-router";
import Category from "./Category";

const Categories = () => {
    const data = useLoaderData();
    return (
        <div className="py-20">
            <h1 className="md:text-3xl text-lg text-center font-bold mb-10">Browse Our <span className="text-[#092327]">Products</span> by Category.. <br /> and Buy a Suitable Subscription for you...</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
                {data.map((category) => {
                    return (
                        <Category
                            key={category.category_id}
                            category={category}></Category>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
