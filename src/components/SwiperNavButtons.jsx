import { React, useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const SwiperNavButtons = () => {
    const swiperNavPre = useRef(null);
    const swiperNavNext = useRef(null);
    return (
        <div className="flex gap-2 justify-end mb-3">
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
    );
};

export default SwiperNavButtons;
