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
        anotherFetch();
    }, []);
    async function anotherFetch() {
        setIsloading(true);
        const base = await AnimeBaseService.getAll();
        setSlide(base);
        setIsloading(false);
    }
    return (
        <div className="App px-3">
            <Navbar />
            {isLoading ? <Loader describe={"Загружается..."} /> : <SwiperMain slideItem={slideItem} />}
        </div>
    );
}

export default App;
