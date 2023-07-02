import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const AnimeByIdPage = (mal_id) => {
    const params = useParams();
    const [postBase, setPostBase] = useState([]);

    async function getById() {
        const byIdBase = await axios.get(`https://api.jikan.moe/v4/anime/${params.mal_id}/full`);
        setPostBase(byIdBase.data.data);
        console.log(byIdBase.data.data);
    }

    useEffect(() => {
        getById();
    }, [params]);
    return (
        <div className="text-[#c7ccd8] px-3">
            <div className="anime-page__title-group w-full  bg-[#283142] border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md">
                <h1 className="anime-page__title font-semibold text-center text-lg">
                    {postBase.title_english} / <span>{postBase.title_japanese}</span> [Episodes - <span>{postBase.episodes}</span>] <span>{postBase.year}</span>
                </h1>
            </div>
            <div className="anime-page__info-body mt-5 flex gap-3">
                <img className="w-[300px] h-[450px]" src={postBase.images.jpg.large_image_url} alt="anime poster" />
                <div>
                    <div className="grid grid-cols-2 grid-rows-10 w-full">
                        <div className="font-semibold">
                            <p>Type:</p>
                            <p>Episodes:</p>
                            <p>Status:</p>
                            <p>Genres:</p>
                            <p>Source:</p>
                            <p>Airing:</p>
                            <p>Studio:</p>
                            <p>Rating:</p>
                            <p>Duration:</p>
                            <p>Relations:</p>
                        </div>
                        <div>
                            <p>{postBase.type}</p>
                            <p>{postBase.episodes}</p>
                            <p>{postBase.status}</p>
                            <div className="flex gap-1 flex-wrap">
                                {postBase.genres.map((genre, index) => {
                                    return (
                                        <p key={index} className="bg-[#a52066]  font-bold text-xs p-1 px-1">
                                            {genre.name}
                                        </p>
                                    );
                                })}
                            </div>
                            <p>{postBase.source}</p>
                            <p>{postBase.aired.from.slice("T")[0]}</p>
                            <p>{postBase.studios[0].name}</p>
                            <p>{postBase.rating}</p>
                            <p>{postBase.duration}</p>
                            <p>
                                {postBase.relations.map((item, index) => {
                                    return (
                                        <p key={index}>
                                            {item.entry[0].type}
                                            &nbsp;
                                            {item.entry[0].name}
                                        </p>
                                    );
                                })}
                            </p>
                        </div>
                    </div>
                    <p className="mt-5">{postBase.synopsis}</p>
                </div>
            </div>
        </div>
    );
};