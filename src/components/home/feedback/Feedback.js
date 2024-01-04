import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Feedback.css";

function Feedback(props) {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[ Pagination ]}
            breakpoints={{
                992: {
                    slidesPerView:  3,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                }

            }}
            style={{ paddingBottom: "48px" }}
            className="_feedback-swiper"
        >
            { props.items.map(item => (
                <SwiperSlide key={ item.id } style={{ height: "auto", }}>
                    <div className="rounded-lg p-6 mx-1 h-full" style={{ border: "1.8px solid #BEBCBD", }}>
                        <div className="flex justify-between gap-x-4 mb-4">
                            <div>
                                { item.avatar != null && (
                                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                                        <img src={ item.avatar } alt="" className="w-full h-full object-contain object-center"/>
                                    </div>
                                )}
                                <h3 className="text-xl">{ item.username }</h3>
                            </div>
                            <div>{ item.rating } stars</div>
                        </div>
                        <div>
                            <p>{ item.description }</p>
                        </div>
                    </div>
                </SwiperSlide>
            )) }
        </Swiper>
    );
}

export default Feedback;
