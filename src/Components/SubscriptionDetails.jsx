import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const SubscriptionDetails = ({ product, cat_id }) => {
    const { setSubscribed, subscribed } = useContext(AuthContext);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [FullReview, setFullReview] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.title = "SubCloud || Subscription Details";
    })

    const handleSubscription = (months) => {
        const isexist = subscribed?.find(
            (prd) => prd?.product?.id === product.id
        );

        if (isexist) {
            toast.error("You have already subscribed to this plan!");
            return;
        }
        setSubscribed((prev) => [...prev, { product, months, cat_id }]);
        toast.success(
            `You have successfully subscribed to the ${months} months plan!`
        );
        navigate("/dashboard");
    };

    const handleReview = (e) => {
        e.preventDefault();
        const reviewData = {
            review,
            rating
        }
        setFullReview((prev) => [...prev, reviewData]);
    };

    return (
        <div>
            <section className="py-20 w-11/12 mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="btn bg-[#4E8098] text-white">
                    {" "}
                    <IoArrowBackCircleSharp /> Back
                </button>
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <span className="font-bold tracking-wider uppercase dark:text-violet-600">
                            Pricing
                        </span>
                        <h2 className="text-4xl font-bold lg:text-5xl">
                            Choose your best plan
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">
                                        Basic Plan
                                    </h4>
                                    <span className="text-6xl font-bold">
                                        ${product.price["3_months"]}
                                        <span className="text-sm tracking-wide">
                                            /3 months
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-3 leading-relaxed dark:text-gray-600">
                                    {product.description}
                                </p>
                                <ul className="flex-1 space-y-2">
                                    <h3 className="text-xl mb-4">
                                        Features and Benifits
                                    </h3>
                                    {product.features.map((feature, index) => {
                                        return (
                                            <li
                                                className="flex items-center gap-2"
                                                key={index}>
                                                {" "}
                                                <FaCheckCircle /> {feature}{" "}
                                            </li>
                                        );
                                    })}

                                    {product.subscription_benefits.map(
                                        (benifit, index) => {
                                            return (
                                                <li
                                                    className="flex items-center gap-2"
                                                    key={index}>
                                                    {" "}
                                                    <FaCheckCircle /> {
                                                        benifit
                                                    }{" "}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                                <button
                                    onClick={() => handleSubscription("3")}
                                    type="button"
                                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">
                                    Buy Now..
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">
                                        Pro Plan
                                    </h4>
                                    <span className="text-6xl font-bold">
                                        ${product.price["6_months"]}
                                        <span className="text-sm tracking-wide">
                                            /6 months
                                        </span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">
                                    {product.description}
                                </p>
                                <ul className="flex-1 space-y-2">
                                    <h3 className="text-xl mb-4">
                                        Features and Benifits
                                    </h3>
                                    {product.features.map((feature, index) => {
                                        return (
                                            <li
                                                className="flex items-center gap-2"
                                                key={index}>
                                                {" "}
                                                <FaCheckCircle /> {feature}{" "}
                                            </li>
                                        );
                                    })}

                                    {product.subscription_benefits.map(
                                        (benifit, index) => {
                                            return (
                                                <li
                                                    className="flex items-center gap-2"
                                                    key={index}>
                                                    {" "}
                                                    <FaCheckCircle /> {
                                                        benifit
                                                    }{" "}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                                <button
                                    onClick={() => handleSubscription("6")}
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">
                                    Buy Now..
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">
                                        Enterprise Plan
                                    </h4>
                                    <span className="text-6xl font-bold">
                                        ${product.price["12_months"]}
                                        <span className="text-sm tracking-wide">
                                            /12 months
                                        </span>
                                    </span>
                                </div>
                                <p className="leading-relaxed dark:text-gray-600">
                                    {product.description}
                                </p>
                                <ul className="flex-1 space-y-2">
                                    <h3 className="text-xl mb-4">
                                        Features and Benifits
                                    </h3>
                                    {product.features.map((feature, index) => {
                                        return (
                                            <li
                                                className="flex items-center gap-2"
                                                key={index}>
                                                {" "}
                                                <FaCheckCircle /> {feature}{" "}
                                            </li>
                                        );
                                    })}

                                    {product.subscription_benefits.map(
                                        (benifit, index) => {
                                            return (
                                                <li
                                                    className="flex items-center gap-2"
                                                    key={index}>
                                                    {" "}
                                                    <FaCheckCircle /> {
                                                        benifit
                                                    }{" "}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                                <button
                                    onClick={() => handleSubscription("12")}
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">
                                    Buy Now..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* input field for review */}
                <div className="w-full max-w-3xl mx-auto p-8 space-y-3 rounded-xl shadow-2xl bg-gray-100 mt-10">
                    <h1 className="text-2xl font-bold text-center">Submit Your Review Here..</h1>
                    <form
                        onSubmit={handleReview}
                        noValidate=""
                        action=""
                        className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="email"
                                className="block dark:text-gray-600">
                                Write Your Review Here...
                            </label>
                            <input
                                onChange={(e) => setReview(e.target.value)}
                                value={review}
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Write Your Review Here"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="rating"
                                className="block dark:text-gray-600">
                                Rating
                            </label>
                            <select
                                defaultValue="Choose your rating"
                                onChange={(e) => setRating(e.target.value)}
                                className="select w-full rounded-md">
                                <option disabled={true}>Choose Your Rating</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                            Submit Review
                        </button>
                    </form>
                </div>

                <div className="mt-10">
                    <h1 className="text-2xl font-bold text-center">Customer Reviews...</h1>
                    <div>
                        {
                            FullReview && FullReview.length > 0 ? (
                                FullReview.map((review) => {
                                    return (
                                        <div className="w-full max-w-3xl mx-auto p-8 space-y-3 rounded-xl shadow-2xl bg-gray-100 mt-10">
                                            <h1 className="text-xl font-bold text-center">{review.review}</h1>
                                            <p className="text-center">Rating: {review.rating}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                <h1 className="text-center text-[#4E8098] text-3xl mt-10">
                                    No Reviews Yet..
                                </h1>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubscriptionDetails;
