import React, { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const VideoTab = (props) => {
    const { isClicked, kinopoiskId, playClickHandler } = props;
    const [isChosen, setIsChosen] = useState(true);
    const isChosenHandler = () => {
        setIsChosen(!isChosen);
    };

    return (
        <div>
            <div className="flex flex-start w-[30%] bg-slate-800 relative">
                <div className={`absolute bg-slate-600 top-0 ${isChosen ? "left-0" : "right-0"} w-[50%] h-full z-10`}></div>
                <div onClick={isChosenHandler} className="p-3 w-[50%] cursor-pointer font-bold relative z-20">
                    Player #1
                </div>
                <div onClick={isChosenHandler} className="p-3 w-[50%] cursor-pointer font-bold relative z-20">
                    Player #2
                </div>
            </div>
            <div className="relative pb-[56.25%]">
                <iframe
                    className="absolute top-0 h-full left-0 w-full"
                    src={
                        !isChosen
                            ? kinopoiskId
                                ? `https://kinotochka.co/embed/kinopoisk/${kinopoiskId}/`
                                : ""
                            : kinopoiskId
                            ? `https://voidboost.net/embed/${kinopoiskId}/`
                            : ""
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
                {isClicked ? (
                    <>
                        <div
                            onClick={playClickHandler}
                            className="bg-black absolute w-full h-full flex justify-center items-center top-0 cursor-pointer left-0"
                        >
                            <h2 className="text-4xl">BESTAnime.org</h2>
                        </div>
                        <AiOutlinePlayCircle
                            onClick={playClickHandler}
                            size={130}
                            className="absolute text-orange-700 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] cursor-pointer transition-all duration-300 hover:opacity-50"
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default VideoTab;
