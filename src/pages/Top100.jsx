import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import MyButton from "../components/MyButton";

const Top100 = (props) => {
    const [topVisible, setTopVisible] = useState(9);
    const showMoreTop = () => {
        topVisible >= props.topHundred.length ? setTopVisible(9) : setTopVisible((prevValue) => prevValue + 9);
    };
    return (
        <div className=" text-white w-full h-full  mt-5 lg:mt-0 xl:mt-0 ">
            <h1 className="text-[#c7ccd8] text-3xl px-3 font-bold">Top-100</h1>
            {/* Content */}
            <div className="top100__content px-3 flex mt-11 justify-center gap-11 flex-wrap">
                {/* card */}
                {props.topHundred.slice(0, topVisible).map((item) => {
                    return (
                        <a href="#" key={item.mal_id}>
                            <div className="top100__item-card">
                                <div className="top100__item-card-top relative overflow-hidden max-w-[250px] rounded-t-xl bg-[#283142]">
                                    <picture>
                                        <source srcSet={item.entry[0].images.webp.large_image_url} type="image/webp" />
                                        <source srcSet={item.entry[0].images.jpg.large_image_url} type="image/jpeg" />
                                        <img src={item.entry[0].images.jpg.large_image_url} alt="card photo" />
                                    </picture>
                                    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center transition-all ease-in-out duration-300 opacity-0 hover:opacity-100 text-orange-500 hover:bg-[rgba(0,0,0,0.5)]">
                                        <AiOutlinePlayCircle className="hover:text-white transition-all ease-in-out duration-300" size={100} />
                                    </div>
                                    <span className="absolute invisible top-0">{item.mal_id}</span>
                                </div>
                                <div className="max-w-[250px] h-[120px] flex flex-col justify-center gap-3 rounded-b-xl bg-[#283142] p-2">
                                    <p className="text-md font-semibold tracking-wide">{item.entry[0].title}</p>
                                    <p>[{item.date.split("T")[0]}]</p>
                                </div>
                            </div>
                        </a>
                    );
                })}
                {/* card */}
            </div>
            <div onClick={() => showMoreTop()} className="flex justify-center mt-5">
                <MyButton>{topVisible >= props.topHundred.length ? "Hide all" : "Show more"}</MyButton>
            </div>
            {/* Content */}
        </div>
    );
};

export default Top100;

//     <div className="top100__item-card ">
// <div className="top100__item-card-top relative overflow-hidden max-w-[250px] rounded-t-xl bg-[#283142]">
//     <img src={props.topHundred[0].entry[0].images.jpg.large_image_url} alt="card photo" />
//     <span className="absolute invisible top-0">{props.topHundred[0].entry[0].mal_id}</span>
// </div>
// <div className="max-w-[250px] rounded-b-xl bg-[#283142] p-2">
//     <p>{props.topHundred[0].entry[0].title}</p>
//     <p>[{props.topHundred[0].date.split("T")[0]}]</p>
// </div>
// </div>
