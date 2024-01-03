import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./PreviewSwiper.css";

import slideImg from "./../../../images/temp/preview-slide.png";
import slideImg2 from "./../../../images/temp/preview-slide-2.png";
import slideImg3 from "./../../../images/temp/preview-slide-3.png";

const slides  = [
    {
        id: 0,
        url: "#",
        src: slideImg,
    },
    {
        id: 1,
        url: "#",
        src: slideImg2,
    },
    {
        id: 2,
        url: "#",
        src: slideImg3,
    },
];

function PreviewSwiper() {
    return (
        <div className="hidden md:block">
            <Swiper
                loop={true}
                autoHeight={true}
                modules={[ Navigation, Pagination ]}
                navigation={true}
                pagination={{ clickable: true }}
                className="_preview-banner"
            >
                {slides.map(item => (
                    <SwiperSlide key={ item.id } className="relative z-0">
                        <img src={ item.src } alt="" className="w-full h-full"/>
                        <a
                            href={ item.url }
                            className="
                            absolute
                            rounded
                            bg-white
                            text-gray-700
                            py-4
                            px-16
                            font-bold
                            hover:shadow-lg
                            hover:shadow-gray-500
                            transition
                        "
                        >
                            Shop Now
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PreviewSwiper;
