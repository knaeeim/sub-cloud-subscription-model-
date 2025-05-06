import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    const images = [
        "https://i.ibb.co.com/Y7Vj9mQj/1.png",
        "https://i.ibb.co.com/FbJ9vGc4/2.png",
        "https://i.ibb.co.com/WWR8KhT2/3.png",
        "https://i.ibb.co.com/RGBzr0wB/4.png",
    ];

  return (
    <div className="w-full sm:h-[85vh] h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="sm:w-full w-auto sm:h-full h-auto object-cover object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
