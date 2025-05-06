import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const ProductCard = ({ product, cat_id }) => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const [findCat, setFindCat] = useState({});

    useEffect(() => {
        const findCategory = data?.find((cat) => cat.category_id === parseInt(cat_id));
        setFindCat(findCategory);
    },[data, cat_id])
    
    useEffect(() => {
        document.title = `SubCloud || ${product.name}`;
    }, [product.name]);
    

    const handleSubsPage = () => {
        navigate(`/subscription/${cat_id}/${product.id}`);
    };

    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm relative">
                <figure>
                    <img src={product.banner} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div>
                        <button className="btn btn-xs bg-[#0B5351] text-white">
                            {findCat?.category_name}
                        </button>
                    </div>
                    <h2 className="card-title">{product.name}</h2>
                    <div>
                        <p className="text-[#00A9A5] font-bold text-md">
                            3 Months Plan: ${product.price["3_months"]}
                        </p>
                        <p className="text-[#00A9A5] font-bold text-md">
                            6 Months Plan: ${product.price["6_months"]}
                        </p>
                        <p className="text-[#00A9A5] font-bold text-md">
                            12 Months Plan: ${product.price["12_months"]}
                        </p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <div>
                            {[...Array(5)].map((_, index) => (
                                <span key={index}>
                                    {index < Math.floor(product.ratings)
                                        ? "★"
                                        : "☆"}
                                </span>
                            ))}
                            <span className="ml-2 text-[#00A9A5]">
                                ({product.number_of_reviews})
                            </span>
                        </div>
                        <div>
                            <button
                                onClick={handleSubsPage}
                                className="btn bg-[#4E8098] text-white">
                                More Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
