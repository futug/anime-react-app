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

function App() {
    const [slideItem, setSlide] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [genres, setGenres] = useState([]);
    const [randomAnime, setRandomAnime] = useState([]);

    useEffect(() => {
        anotherFetch();
        getAllGenres();
        // getHundredAnimes();
        getRandomAnime();
    }, []);

    async function getRandomAnime() {
        setIsloading(true);
        const randomAnimeBase = await axios.get("https://api.jikan.moe/v4/random/anime");
        console.log(randomAnimeBase.data.data);
        setRandomAnime(randomAnimeBase.data.data);
        setIsloading(false);
    }

    // async function getHundredAnimes() {
    //     const hundredAnimesBase = await axios.get("https://api.jikan.moe/v4/recommendations/anime");
    //     const randomIndex = Math.floor(Math.random() * hundredAnimesBase.data.data.length);
    //     const selectedObject = hundredAnimesBase.data.data[randomIndex];
    //     setRandomAnime(selectedObject);
    //     console.log(randomAnime);
    // }

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
        <div className="App px-3 max-w-[1300px] mx-auto">
            {isLoading ? (
                <Loader describe={"Загружается..."} />
            ) : (
                <>
                    <Navbar />
                    <SwiperMain slideItem={slideItem} />
                    <Genres genres={genres} />
                    <RandomAnime randomAnime={randomAnime} isLoading={setIsloading} />
                </>
            )}
        </div>
    );
}

export default App;
