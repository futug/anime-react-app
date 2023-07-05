import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperMain from "./components/SwiperMain";
import AnimeBaseService from "./API/AnimeBaseService";
import Loader from "./components/Loader";
import Genres from "./components/Genres";
import GenreBaseService from "./API/GenreBaseService";
import axios from "axios";
import RandomAnime from "./components/RandomAnime";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

function App() {
    const [slideItem, setSlide] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [genres, setGenres] = useState([]);
    const [randomAnime, setRandomAnime] = useState([]);
    const [topHundred, setTopHundred] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        anotherFetch();
        getAllGenres();
        getHundredAnimes();

        getEpisodes();
    }, []);

    useEffect(() => {
        getRandomAnime();
    }, [isClicked]);

    async function getRandomAnime() {
        setIsloading(true);
        const randomAnimeBase = await axios.get("https://api.jikan.moe/v4/random/anime");
        setRandomAnime(randomAnimeBase.data.data);
        setIsloading(false);
    }

    async function getHundredAnimes() {
        const hundredAnimesBase = await axios.get("https://api.jikan.moe/v4/recommendations/anime");
        setTopHundred(hundredAnimesBase.data.data);
    }

    async function getAllGenres() {
        const genreBase = await GenreBaseService.getGenre();
        setGenres(genreBase);
    }

    async function anotherFetch() {
        setIsloading(true);
        const base = await AnimeBaseService.getAll();
        setSlide(base);
        setIsloading(false);
    }

    async function getEpisodes() {
        const episodesBase = await axios.get("https://api.jikan.moe/v4/anime/16498/videos/episodes");
        console.log(episodesBase.data.data);
    }

    const date = new Date();
    return (
        <BrowserRouter>
            <div className="App px-3 max-w-[1300px] mx-auto">
                {isLoading ? (
                    <Loader describe={"Loading..."} />
                ) : (
                    <>
                        <Navbar />
                        <SwiperMain slideItem={slideItem} />
                        <div className="block xl:grid lg:grid grid-cols-[25%,75%] mt-5">
                            <div>
                                <Genres genres={genres} />
                                <RandomAnime isClicked={isClicked} clickHandler={clickHandler} randomAnime={randomAnime} isLoading={setIsloading} />
                            </div>
                            <AppRouter topHundred={topHundred} />
                        </div>
                    </>
                )}
                <div className="w-full mt-11 lg:mt-0 xl:mt-11 bg-[#283142] border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md flex justify-center gap-0 text-xs">
                    <p>© All rights reserved by BestAnime.org.</p>
                    <p>
                        2021 - <span>{date.getFullYear()}</span>
                    </p>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
