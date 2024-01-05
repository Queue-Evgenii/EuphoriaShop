import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules";
import {Link} from "react-router-dom";

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
            gender: "men",
            categoryId: 7,
            src: slideImg1,
            title: "Knitted Joggers",
        },
        {
            id: 1,
            gender: "men",
            categoryId: 8,
            src: slideImg2,
            title: "Full Sleeve",
        },
        {
            id: 2,
            gender: "men",
            categoryId: 9,
            src: slideImg3,
            title: "Active T-Shirts",
        },
        {
            id: 3,
            gender: "women",
            categoryId: 10,
            src: slideImg4,
            title: "Urban Shirts",
        },
        {
            id: 4,
            gender: "women",
            categoryId: 11,
            src: slideImg4,
            title: "Urban Shirts 2 best seller for last year",
        },
    ],
}

function CategorySwiper() {
    return (
        <div className="_container _category-slider">
            <h2 className="_title mb-16">{ data.title }</h2>
            <Swiper
                loop={ true }
                spaceBetween={ 10 }
                modules={[ Navigation ]}
                navigation={ true }
                slidesPerView={ "auto" }
                className="_category-slider__container justify-between"
            >
                { data.data.map(item => (
                    <SwiperSlide key={ item.id } className="max-w-48 sm:max-w-64">
                        <Link to={ `/catalog/${ item.gender }/${ item.categoryId }` }>
                            <img src={ item.src } alt="" className="mb-8"/>
                            <h3 className="text-xl font-bold">{ item.title }</h3>
                        </Link>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    );
}

export default CategorySwiper;
