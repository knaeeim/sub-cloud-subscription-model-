import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import ProductCard from "./ProductCard";

const CategoryDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const category = data.find(
        (category) => category.category_id == parseInt(id)
    );
    return (
        <div className="w-11/12 mx-auto my-20">
            <h1 className="text-3xl text-center font-bold mb-10">
                Browse Our <span className="text-[#00A9A5]">Products</span> in{" "}
                <span className="text-[#4E8098]">{category.category_name}</span>
            </h1>
            <button onClick={()=> navigate(-1)} className="btn bg-[#4E8098] mb-10 text-white">Back</button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12">
                {category.products.map((product) => (
                    <ProductCard
                        product={product}
                        key={product.id} category_id={category.category_id}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
