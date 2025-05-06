import React from "react";

const DashBoardCard = ({ product, cat_id, months, fullData }) => {
    const category = fullData.find(
        (category) => category.category_id === parseInt(cat_id)
    );
    return (
        <div>
            <div className="card bg-base-100 shadow-sm relative">
                {months && (
                    <div className="badge badge-secondary absolute -top-4 left-0 z-20 text-white">
                        {months} Months Subscription
                    </div>
                )}
                <figure>
                    <img src={product.banner} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div>
                        <button className="btn btn-xs bg-[#0B5351] text-white">
                            {category?.category_name}
                        </button>
                    </div>
                    <h2 className="card-title">{product.name}</h2>
                    <div>
                        <p className="text-[#00A9A5] font-bold text-md">
                            3 months Plan: ${product.price["3_months"]}
                        </p>
                        <p className="text-[#00A9A5] font-bold text-md">
                            6 Months Plan: ${product.price["6_months"]}
                        </p>
                        <p className="text-[#00A9A5] font-bold text-md">
                            12 Months Plan : ${product.price["12_months"]}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardCard;
