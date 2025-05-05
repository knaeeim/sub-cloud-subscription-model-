import React from "react";
import { useLoaderData } from "react-router";
import Category from "./Category";

const Categories = () => {
    const data = useLoaderData();
    console.log(data[0].category_name);
    return (
        <div className="my-20">
            <h1 className="text-3xl text-center font-bold mb-10">Browse Our <span className="text-[#00A9A5]">Products</span> by Category..</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
                {data.map((category) => {
                    return (
                        <Category
                            key={category.id}
                            category={category}></Category>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
