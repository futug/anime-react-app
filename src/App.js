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

function App() {
    const [slideItem, setSlide] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        anotherFetch();
    }, []);
    async function anotherFetch() {
        setIsloading(true);
        const base = await AnimeBaseService.getAll();
        console.log(base);
        setSlide(base);
        setIsloading(false);
    }
    return (
        <div className="App px-3 max-w-[1300px] mx-auto">
            <Navbar />
            {isLoading ? <Loader describe={"Загружается..."} /> : <SwiperMain slideItem={slideItem} />}

            <Genres />
        </div>
    );
}

export default App;
