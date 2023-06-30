import React from "react";

export const TitleSlider = (props) => {
    return (
        <div className="px-1  text-white text-2xl">
            <div className=" w-[150px] relative cursor-pointer">
                <img className="object-cover relative min-h-[250px] rounded-md" src={props.slide.poster} alt="111" />
                <div className="absolute flex flex-col justify-center  bottom-0 rounded-b-md h-[50%] hover:h-[100%] transition-all duration-300 w-full bg-[rgba(0,0,0,0.5)]">
                    <p className="font-bold text-[16px] leading-tight pl-3">{props.slide.titleRus}</p>
                    <div className="flex gap-1 pl-3">
                        <p className="text-sm">Сезонов - </p>
                        <span className="text-sm">9</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
