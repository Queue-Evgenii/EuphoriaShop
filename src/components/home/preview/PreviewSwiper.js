import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./PreviewSwiper.css";

import slideImg from "./../../../images/temp/preview-slide.png";
import slideImg2 from "./../../../images/temp/preview-slide-2.png";
import slideImg3 from "./../../../images/temp/preview-slide-3.png";
import React from "react";

const slides = [
    {
        id: 0,
        for: "women",
        categoryId: 1,
        src: slideImg,
    },
    {
        id: 1,
        for: "women",
        categoryId: 2,
        src: slideImg2,
    },
    {
        id: 2,
        for: "women",
        categoryId: 3,
        src: slideImg3,
    },
];

const PreviewSwiper = () => {
    return (
        <div className="hidden md:block">
            <Swiper
                loop={true}
                autoHeight={true}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                className="_preview-banner"
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.id} className="relative z-0">
                        <img src={item.src} alt="" className="w-full h-full" />
                        <Link
                            to={"/catalog/" + item.for + "/" + item.categoryId}
                            className="
                            absolute
                            _button
                        "
                        >
                            Shop Now
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PreviewSwiper;
