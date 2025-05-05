import React, { useState } from "react";

const Banner = () => {
    const images = [
        "https://i.ibb.co.com/Y7Vj9mQj/1.png",
        "https://i.ibb.co.com/FbJ9vGc4/2.png",
        "https://i.ibb.co.com/WWR8KhT2/3.png",
        "https://i.ibb.co.com/RGBzr0wB/4.png",
    ];
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-[90vh] overflow-hidden">
            <img
                src={images[current]}
                className="w-auto h-fu object-cover object-top transition-all duration-500"
                alt="carousel"
            />
            <div className="absolute inset-0 flex items-center justify-between px-5">
                <button onClick={prevSlide} className="btn btn-circle">
                    ❮
                </button>
                <button onClick={nextSlide} className="btn btn-circle">
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Banner;
