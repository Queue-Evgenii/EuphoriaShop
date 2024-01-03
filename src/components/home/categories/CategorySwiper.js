import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./CategorySwiper.css";

import slideImg1 from "./../../../images/temp/category-slide-1.png";
import slideImg2 from "./../../../images/temp/category-slide-2.png";
import slideImg3 from "./../../../images/temp/category-slide-3.png";
import slideImg4 from "./../../../images/temp/category-slide-4.png";

const data = {
    title: "New Arrival",
    data: [
        {
            id: 0,
            url: "#",
            src: slideImg1,
            title: "Knitted Joggers",
        },
        {
            id: 1,
            url: "#",
            src: slideImg2,
            title: "Full Sleeve",
        },
        {
            id: 2,
            url: "#",
            src: slideImg3,
            title: "Active T-Shirts",
        },
        {
            id: 3,
            url: "#",
            src: slideImg4,
            title: "Urban Shirts",
        },
        {
            id: 4,
            url: "#",
            src: slideImg4,
            title: "Urban Shirts 2 best seller for last year",
        },
    ],
}

function CategorySwiper() {
    return (
        <div className="_container">
            <h2 className="_title mb-16">{ data.title }</h2>
            <Swiper
                loop={ true }
                slidesPerView={ (data.data.length > 4 ? 4 : data.data.length) }
                spaceBetween={ 32 }
                modules={[ Navigation ]}
                navigation={ true }
                className="_category_slider"
            >
                { data.data.map(item => (
                    <SwiperSlide key={ item.id }>
                        <a href={ item.url }>
                            <img src={ item.src } alt="" className="mb-8"/>
                            <h3 className="text-xl font-bold">{ item.title }</h3>
                        </a>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    );
}

export default CategorySwiper;
