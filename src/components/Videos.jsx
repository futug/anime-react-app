import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import Loader from "./Loader";
import { ErrorPage } from "../pages/ErrorPage";
import { Pagination } from "./Pagination";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Videos = (props) => {
    const [episodes, setEpisodes] = useState([]);
    const [getEpisodes, isEpisodesLoading, getEpisodesError] = useFetching(async () => {
        const episodesBase = await axios.get(`https://api.jikan.moe/v4/anime/${props.params.mal_id}/episodes`);
        setEpisodes(episodesBase.data.data);
    });
    const [episodesPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isClicked, setIsClicked] = useState(true);

    const lastEpisodeIndex = currentPage * episodesPerPage;
    const firstEpisodeIndex = lastEpisodeIndex - episodesPerPage;
    const currentEpisodes = episodes.slice(firstEpisodeIndex, lastEpisodeIndex);

    const playClickHandler = () => {
        setIsClicked(!isClicked);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        console.log(episodes);
        getEpisodes();
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
            {currentEpisodes.map((episode) => (
                <div className="flex flex-col gap-5 text-center w-full" key={episode.mal_id}>
                    <div className="relative pb-[56.25%]">
                        <iframe
                            className="absolute top-0 h-full left-0 w-full"
                            src={episode.url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
                    <h2>{episode.title}</h2>
                </div>
            ))}
            <Pagination playClickHandler={playClickHandler} episodesPerPage={episodesPerPage} totalEpisodes={episodes.length} onPageChange={handlePageChange} />
        </div>
    );
};

export default Videos;
