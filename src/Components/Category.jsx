import React from "react";

const Category = ({ category }) => {
    console.log(category);
    return (
        <div>
            <div className="card bg-base-200 shadow-sm">
                <figure>
                    <img
                        src={category.category_image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{category.category_name}</h2>
                    <p>
                        {category.category_description}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#4E8098] text-white">Browse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
