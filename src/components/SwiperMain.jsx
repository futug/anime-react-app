import { React, useRef } from "react";
import { TitleSlider } from "./TitleSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const SwiperMain = (props) => {
    const swiperNavPre = useRef(null);
    const swiperNavNext = useRef(null);
    return (
        <div className="max-w-[1300px] p-3 pt-12 pb-8 mt-11 rounded-md mx-auto bg-[#283142] relative">
            <div className="flex gap-2 justify-between mb-3 items-center">
                <p className="text-white text-2xl font-bold tracking-wide">Top-25</p>
                <div className="flex gap-2 justify-end">
                    <div
                        ref={swiperNavPre}
                        className="bg-[#171c2c] h-8 w-[60px] rounded-l-xl flex items-center justify-center text-white hover:hover:bg-[#a52066] transition-all ease-in-out duration-300 cursor-pointer"
                    >
                        <BiSolidLeftArrow />
                    </div>
                    <div
                        ref={swiperNavNext}
                        className="bg-[#171c2c] h-8 w-[60px] rounded-r-xl flex items-center justify-center text-white hover:hover:bg-[#a52066] transition-all ease-in-out duration-300 cursor-pointer"
                    >
                        <BiSolidRightArrow />
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.25": {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    "@0.50": {
                        slidesPerView: 2.5,
                        spaceBetween: 0,
                    },
                    "@0.75": {
                        slidesPerView: 4.5,
                        spaceBetween: 0,
                    },
                    "@1.00": {
                        slidesPerView: 5.5,
                        spaceBetween: 0,
                    },
                    "@1.50": {
                        slidesPerView: 8,
                        spaceBetween: 0,
                    },
                }}
                navigation={{
                    prevEl: swiperNavPre.current,
                    nextEl: swiperNavNext.current,
                    clickable: true,
                }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
            >
                {props.slideItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/top25/${item.mal_id}`}>
                            <TitleSlider slide={item} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperMain;
