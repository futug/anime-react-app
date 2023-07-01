import React from "react";

export const TitleSlider = (props) => {
    return (
        <div className="px-1  text-white text-2xl">
            <div className="w-[150px] relative cursor-pointer">
                <picture>
                    <source srcSet={props.slide.images.webp.large_image_url} type="image/webp" />
                    <source srcSet={props.slide.images.jpg.large_image_url} type="image/jpeg" />
                    <img className="object-cover relative min-h-[250px] rounded-md" src={props.slide.images.jpg.large_image_url} alt="111" />
                </picture>

                <p className="absolute top-5 text-xs font-bold bg-[#1aac44] p-2">{props.slide.score}</p>
                <div className="absolute flex flex-col justify-center  bottom-0 rounded-b-md h-[50%] hover:h-[100%] transition-all duration-300 w-full bg-[rgba(0,0,0,0.5)]">
                    <p className="font-bold text-[16px] leading-tight pl-3">{props.slide.title_english}</p>
                    <div className="flex gap-1 pl-3">
                        <p className="text-sm">Episodes - </p>
                        <span className="text-sm">{props.slide.episodes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
