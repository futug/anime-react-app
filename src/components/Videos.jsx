import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import Loader from "./Loader";
import { AiOutlinePlayCircle } from "react-icons/ai";
import VideoTab from "./VideoTab";

const Videos = (props) => {
    const [episodes, setEpisodes] = useState([]);
    const [getEpisodes, isEpisodesLoading, getEpisodesError] = useFetching(async () => {
        const episodesBase = await axios.get(`https://api.jikan.moe/v4/anime/${props.params.mal_id}/episodes`);
        setEpisodes(episodesBase.data.data);
    });
    const [episodesPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isClicked, setIsClicked] = useState(true);
    const [kinopoiskId, setKinopoiskId] = useState();

    const lastEpisodeIndex = currentPage * episodesPerPage;
    const firstEpisodeIndex = lastEpisodeIndex - episodesPerPage;
    const currentEpisodes = episodes.slice(firstEpisodeIndex, lastEpisodeIndex);

    const playClickHandler = () => {
        setIsClicked(!isClicked);
    };

    const API_KEY = "5F4D3YX-42K40WW-KJ5PFSW-H08CHBC";
    const animeName = props.postBase.data.title_english;
    const animeYear = props.postBase.data.year;

    async function getAnimeEpisode() {
        const response = await axios.get(`https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=1&query=${animeName}%20${animeYear}%20`, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        });
        setKinopoiskId(response.data.docs.length > 0 ? response.data.docs[0].id : null);
    }

    useEffect(() => {
        getEpisodes();
        getAnimeEpisode();
        console.log(props.postBase);
        console.log(animeName);
        console.log(kinopoiskId);
    }, [props.params]);

    if (isEpisodesLoading) {
        return <Loader descripe={"Loading..."} />;
    }

    if (getEpisodesError) {
        return (
            <>
                <h1>We are very sorry, but something went wrong...</h1>
                <button onClick={getEpisodes}>Try again!</button>
            </>
        );
    }
    if (episodes === null || episodes === undefined) {
        return <h1>Nothing was found</h1>;
    }
    return (
        <div className="flex flex-col flex-wrap justify-center mt-11">
            <div className="flex flex-col gap-5 text-center w-full">
                <div className="anime-page__title-group w-full mt-5 lg:mt-0 xl:mt-0 bg-[#283142] border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md">
                    <h1 className="anime-page__title font-semibold text-center text-lg">
                        {props.postBase?.data.title_english} / <span>{props.postBase.data?.title_japanese}</span> <span>{props.postBase.data.year}</span>
                    </h1>
                </div>
                <VideoTab isClicked={isClicked} kinopoiskId={kinopoiskId} playClickHandler={playClickHandler} />
                {/* <div className="relative pb-[56.25%]">
                    <iframe
                        className="absolute top-0 h-full left-0 w-full"
                        src={kinopoiskId ? `https://voidboost.net/embed/${kinopoiskId}/` : ""}
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
                </div> */}
                {/* <div className="relative pb-[56.25%]">
                    <iframe
                        className="absolute top-0 h-full left-0 w-full"
                        src={kinopoiskId ? `https://kinotochka.co/embed/kinopoisk/${kinopoiskId}/` : ""}
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
                </div> */}
            </div>
        </div>
    );
};

export default Videos;
