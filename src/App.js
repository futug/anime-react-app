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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top100 from "./pages/Top100";
import { Registration } from "./pages/Registration";

function App() {
    const [slideItem, setSlide] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [genres, setGenres] = useState([]);
    const [randomAnime, setRandomAnime] = useState([]);
    const [topHundred, setTopHundred] = useState([]);

    useEffect(() => {
        anotherFetch();
        getAllGenres();
        getHundredAnimes();
        getRandomAnime();
    }, []);

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

    return (
        <BrowserRouter>
            <div className="App px-3 max-w-[1300px] mx-auto">
                {isLoading ? (
                    <Loader describe={"Loading..."} />
                ) : (
                    <>
                        <Navbar />
                        <SwiperMain slideItem={slideItem} />
                        <div className="block xl:grid lg:grid grid-cols-[25%,75%]  mt-5">
                            <div>
                                <Genres genres={genres} />
                                <RandomAnime randomAnime={randomAnime} isLoading={setIsloading} />
                            </div>
                            <Routes>
                                <Route path="/Top100" element={<Top100 topHundred={topHundred} />} />
                                <Route path="/Registration" element={<Registration />} />
                            </Routes>
                        </div>
                    </>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
