import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const ProductCard = ({ product, category_id }) => {

    const navigate = useNavigate();

    const handleSubsPage = () => {
        navigate(`/subscription/${product.id}`, {
            state: { category_id },
        });
    }

    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img src={product.banner} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </p>
                    <div className="card-actions justify-between items-center">
                        <div>
                            {[...Array(5)].map((_, index) => (
                                <span key={index}>
                                    {index < Math.floor(product.ratings)
                                        ? "★"
                                        : "☆"} 
                                </span> 
                            ))}
                            <span className="ml-2 text-[#00A9A5]">({product.number_of_reviews})</span>
                        </div>
                        <div>
                            <button onClick={handleSubsPage} className="btn bg-[#4E8098] text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
