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
import axios from "axios";

function App() {
    const [slideItem, setSlide] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        fetchBase();
    }, []);
    async function fetchBase() {
        setIsloading(true);
        const base = await AnimeBaseService.getAll();
        setSlide(base);
        setIsloading(false);
    }

    async function anotherFetch() {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
        console.log(response.data.data);
    }
    return (
        <div className="App px-3">
            <Navbar />
            {isLoading ? <Loader describe={"Загружается..."} /> : <SwiperMain slideItem={slideItem} />}
            {/* 
            <button onClick={() => anotherFetch()} className="bg-white text-black text center">
                get anime
            </button> */}
        </div>
    );
}

export default App;
