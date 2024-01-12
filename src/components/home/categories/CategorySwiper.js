import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./CategorySwiper.css";

const CategorySwiper = ({ items }) => {
    return (
        <div className="_container _category-slider">
            <h2 className="_title mb-16">New Arrival</h2>
            <Swiper
                loop={true}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={true}
                slidesPerView={"auto"}
                className="_category-slider__container justify-between"
            >
                {items &&
                    items.map((item) => (
                        <SwiperSlide key={item.categoryId} className="max-w-48 sm:max-w-64">
                            <Link to={`/catalog/${item.gender}/${item.categoryId}`}>
                                <img src={item.image} alt="" className="mb-8 rounded-lg" />
                                <h3 className="text-xl font-bold">{item.name}</h3>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default CategorySwiper;
