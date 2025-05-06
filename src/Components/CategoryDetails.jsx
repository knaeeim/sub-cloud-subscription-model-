import React, { useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import ProductCard from "./ProductCard";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const CategoryDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const category = data.find(
        (category) => category.category_id == parseInt(id)
    );
    useEffect(() => {
        document.title = `SubCloud || ${category?.category_name}`;
    });
    return (
        <div className="w-11/12 mx-auto py-20">
            <h1 className="text-3xl text-center font-bold mb-10">
                Browse Our Products in{" "}
                <span className="text-[#0B5351]">
                    {category?.category_name}
                </span>{" "}
                Category..
            </h1>
            <button
                onClick={() => navigate(-1)}
                className="btn bg-[#4E8098] mb-10 text-white">
                <IoArrowBackCircleSharp /> Back
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12">
                {category.products.map((product) => (
                    <ProductCard
                        product={product}
                        key={product.id}
                        cat_id={category.category_id}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
