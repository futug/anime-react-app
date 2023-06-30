import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const SwiperNavButtons = () => {
    return (
        <div className="flex gap-2">
            <div className="bg-[#171c2c] h-8 w-[60px] rounded-l-xl flex items-center justify-center text-white hover:hover:bg-[#a52066] transition-all ease-in-out duration-300 cursor-pointer">
                <BiSolidLeftArrow />
            </div>
            <div className="bg-[#171c2c] h-8 w-[60px] rounded-r-xl flex items-center justify-center text-white hover:hover:bg-[#a52066] transition-all ease-in-out duration-300 cursor-pointer">
                <BiSolidRightArrow />
            </div>
        </div>
    );
};

export default SwiperNavButtons;
