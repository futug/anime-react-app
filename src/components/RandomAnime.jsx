import React, { useEffect, useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const RandomAnime = (props) => {
    const [showImage, setShowImage] = useState(false);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        props.isLoading(true);
        setTimeout(() => {
            setShowImage(true);
            setGenres(props.randomAnime.genres);
        }, 1000);

        props.isLoading(false);
    }, []);

    return (
        <div>
            <div className="random-anime-wrapper w-full  bg-[#283142] mt-5 border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md">
                <div className="random-anime__title flex  gap-2 items-center">
                    <GiPerspectiveDiceSixFacesRandom size={20} />
                    <p className="font-semibold text-lg">Random title for you</p>
                </div>
                <a href="#">
                    <div className="random-anime__card h-full flex flex-col items-center lg:items-start xl:items-start gap-2 mt-3">
                        <div>
                            <h2 className="random-anime__card-title font-semibold">
                                {props.randomAnime ? props.randomAnime.title_english || props.randomAnime.title : null}
                            </h2>
                            <div className="relative mt-3">
                                {showImage && (
                                    <picture>
                                        <source srcSet={props.randomAnime.images.webp.large_image_url} type="image/webp" />
                                        <source srcSet={props.randomAnime.images.jpg.large_image_url} type="image/jpeg" />
                                        <img className="w-[300px]" src={props.randomAnime.images.jpg.large_image_url} alt="random anime" />
                                    </picture>
                                )}

                                <p className="absolute top-5 text-lg font-bold bg-[#1aac44] p-2">{props.randomAnime.score}</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <span className="font-semibold">Age rating:</span> <span>{props.randomAnime.rating}</span>
                            </p>
                            <p>
                                <span className="font-semibold">Airing: </span>
                                <span>{props.randomAnime.status}</span>
                            </p>

                            {genres === undefined ? null : (
                                <div className="flex gap-2 mt-3">
                                    {genres.map((item, index) => {
                                        return (
                                            <p className="bg-[#a52066] font-bold text-xs p-1 px-2" key={index}>
                                                {item.name}
                                            </p>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        {/* <p>{props.randomAnime.genres}</p> */}
                    </div>
                </a>
            </div>
        </div>
    );
};

export default RandomAnime;
