import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const images = [
    "https://i.ibb.co.com/Y7Vj9mQj/1.png",
    "https://i.ibb.co.com/FbJ9vGc4/2.png",
    "https://i.ibb.co.com/WWR8KhT2/3.png",
    "https://i.ibb.co.com/RGBzr0wB/4.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="md:w-full w-auto md:h-[80vh] h-auto object-cover object-top"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
