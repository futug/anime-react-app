import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TitleSlider } from "./components/TitleSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from "./components/SwiperNavButtons";

function App() {
    const [slideItem, setSlide] = useState([
        {
            titleRus: "Цельно металлический Алхимик",
            "title-eng": "Full metall Alchemist",
            poster: "https://img.zorores.com/_r/300x400/100/02/e1/02e12b85f54dc6711ed861a9913bb933/02e12b85f54dc6711ed861a9913bb933.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Черный клевер",
            "title-eng": "Black clover",
            poster: "https://img.zorores.com/_r/300x400/100/44/7b/447bc03aeeaffb95729df74c0b98f1ce/447bc03aeeaffb95729df74c0b98f1ce.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Аттака Титанов",
            "title-eng": "Attack on Titans",
            poster: "https://img.zorores.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "БЕК",
            "title-eng": "BECK",
            poster: "https://img.zorores.com/_r/300x400/100/cd/5e/cd5e8b207bb07b68d7d9d72980709cf7/cd5e8b207bb07b68d7d9d72980709cf7.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Тетрадь смерти",
            "title-eng": "Death Note",
            poster: "https://img.zorores.com/_r/300x400/100/5e/61/5e61f3e7c0045e46b670d31a5bb39c68/5e61f3e7c0045e46b670d31a5bb39c68.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Клиннок рассекающий демонов",
            "title-eng": "Demon Slayer",
            poster: "https://img.zorores.com/_r/300x400/100/30/df/30df93feaa422101659e14d0a2a2f582/30df93feaa422101659e14d0a2a2f582.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Доктор Стоун",
            "title-eng": "Doctor Stone",
            poster: "https://img.zorores.com/_r/300x400/100/61/d7/61d7f06300f4ca0d8db04cd3fb9524b7/61d7f06300f4ca0d8db04cd3fb9524b7.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Евангелион",
            "title-eng": "Evangelion",
            poster: "https://img.zorores.com/_r/300x400/100/60/af/60af693753215485f1a8cfea83934e79/60af693753215485f1a8cfea83934e79.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Охотник х Охотник",
            "title-eng": "Hunter x Hunter",
            poster: "https://img.zorores.com/_r/300x400/100/99/3c/993c0361975cce4c7fbb11f8558f9664/993c0361975cce4c7fbb11f8558f9664.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Наруто",
            "title-eng": "Naruto",
            poster: "https://img.zorores.com/_r/300x400/100/da/3a/da3a3d57e29aa0dba87cd6e1596b78e9/da3a3d57e29aa0dba87cd6e1596b78e9.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Моя геройская академия",
            "title-eng": "My hero academy",
            poster: "https://img.zorores.com/_r/300x400/100/d1/ae/d1ae1f3d3324e24dfdfa64e4c2e687f8/d1ae1f3d3324e24dfdfa64e4c2e687f8.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Психопаспорт",
            "title-eng": "Psycho-Pass",
            poster: "https://img.zorores.com/_r/300x400/100/be/b3/beb3713889a579eb4d3f088ee704c565/beb3713889a579eb4d3f088ee704c565.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Король шаманов",
            "title-eng": "Shaman king",
            poster: "https://img.zorores.com/_r/300x400/100/10/6a/106a33e1fedf1b305e231674b675d38c/106a33e1fedf1b305e231674b675d38c.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Магическая битва",
            "title-eng": "Sorcery fight",
            poster: "https://img.zorores.com/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Мастера меча Он-лайн",
            "title-eng": "Sword Art Online",
            poster: "https://img.zorores.com/_r/300x400/100/90/dc/90dca175561e61180622bc79218104cb/90dca175561e61180622bc79218104cb.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Запретная татуировка",
            "title-eng": " Taboo Tattoo",
            poster: "https://img.zorores.com/_r/300x400/100/31/d6/31d6d62e8db3a204eebc9971ab6f15d2/31d6d62e8db3a204eebc9971ab6f15d2.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
        {
            titleRus: "Токийский гуль",
            "title-eng": "Tokyo Ghoul",
            poster: "https://img.zorores.com/_r/300x400/100/87/98/8798db1ca7bd21638202c622c770b313/8798db1ca7bd21638202c622c770b313.jpg",
            seasons: {
                "season-one": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-two": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/black__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-5.mp4",
                        "../anime-api/video/black__clover-6.mp4",
                    ],
                },
                "season-three": {
                    episodes: [
                        "../anime-api/video/black__clover-1.mp4",
                        "../anime-api/video/black__clover-2.mp4",
                        "../anime-api/video/black__clover-3.mp4",
                        "../anime-api/video/black__clover-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-four": {
                    episodes: [
                        "../anime-api/video/black__clover-episode-1.mp4",
                        "../anime-api/video/black__clover-episode-2.mp4",
                        "../anime-api/video/fblack__clover-episode-3.mp4",
                        "../anime-api/video/black__clover-episode-4.mp4",
                        "../anime-api/video/black__clover-episode-5.mp4",
                        "../anime-api/video/black__clover-episode-6.mp4",
                    ],
                },
                "season-five": {
                    episodes: [
                        "../anime-api/video/full__metall__alchemist-episode-1.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-2.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-3.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-4.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-5.mp4",
                        "../anime-api/video/full__metall__alchemist-episode-6.mp4",
                    ],
                },
            },
        },
    ]);
    return (
        <div className="App">
            <Navbar />
            <div className="max-w-[1300px] p-3 pt-12 pb-8 mt-11 rounded-md mx-auto bg-[#283142] relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={8}
                    navigation={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    {slideItem.map((item) => (
                        <SwiperSlide>
                            <TitleSlider slide={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default App;
