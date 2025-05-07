import React from "react";
import { Link } from "react-router";

const Category = ({ category }) => {
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
                        {category.category_description.split("").slice(0, 70).join("")}...
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${category.category_id}`}><button className="btn bg-[#00A9A5] text-white">Browse</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
