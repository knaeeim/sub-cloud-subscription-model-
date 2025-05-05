import React from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const SubscriptionDetails = ({ product }) => {
    
    const navigate = useNavigate();

    const handleSubscription = (months) => {
        toast.success(
            `You have successfully subscribed to the ${months} months plan!`
        );
        navigate("/dashboard")
    }

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
                                    onClick={()=> handleSubscription("3")}
                                    type="button"
                                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">
                                    Get Started
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
                                    onClick={()=> handleSubscription("6")}
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">
                                    Get Started
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
                                    onClick={()=> handleSubscription("12")}
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubscriptionDetails;
