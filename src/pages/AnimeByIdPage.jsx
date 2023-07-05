import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import Loader from "../components/Loader";
import MyCardButton from "../components/MyCardButton";

export const AnimeByIdPage = ({ props, mal_id }) => {
    const params = useParams();
    const [postBase, setPostBase] = useState({
        isLoading: false,
        data: null,
        error: false,
    });

    const [isSeen, setIsSeen] = useState(false);
    const handlerIsSeen = () => {
        setIsSeen(!isSeen);
    };

    async function getById() {
        setPostBase((current) => ({
            ...current,
            isLoading: true,
        }));

        try {
            const byIdBase = await axios.get(`https://api.jikan.moe/v4/anime/${params.mal_id}/full`);
            setPostBase({
                isLoading: false,
                data: byIdBase.data.data,
                error: false,
            });
        } catch (error) {
            setPostBase((current) => ({
                isLoading: false,
                data: current.data,
                error: true,
            }));
        }
    }

    useEffect(() => {
        console.log(postBase);
        // getEpisodes();
        getById();
    }, [params]);

    if (postBase.isLoading) {
        return <Loader descripton={"Loading..."} />;
    }

    if (postBase.error) {
        return (
            <>
                <h1>Sorry, something went wrong</h1>
                <button onClick={getById}>try again</button>
            </>
        );
    }

    if (postBase.data === null || postBase.data === undefined) {
        return null;
    } else
        return (
            <div className="text-[#c7ccd8] px-3">
                <div className="anime-page__title-group w-full mt-5 lg:mt-0 xl:mt-0 bg-[#283142] border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md">
                    <h1 className="anime-page__title font-semibold text-center text-lg">
                        {postBase?.data.title_english} / <span>{postBase.data?.title_japanese}</span> [ Episodes - <span>{postBase.data.episodes}</span>]{" "}
                        <span>{postBase.data.year}</span>
                    </h1>
                </div>
                <div className="anime-page__info-body mt-5 flex flex-wrap lg:flex-nowrap xl:flex-nowrap gap-3">
                    <img className="w-[300px] h-[450px]" src={postBase.data.images.jpg.large_image_url} alt="anime poster" />

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
                                <MyCardButton>Add to collection</MyCardButton>
                                <MyCardButton>Watch now!</MyCardButton>
                            </div>
                            <div>
                                <p>{postBase.data.type}</p>
                                <p>{postBase.data.episodes}</p>
                                <p>{postBase.data.status}</p>
                                <div className="flex gap-1 flex-wrap">
                                    {postBase.data.genres.map((genre, index) => {
                                        return (
                                            <p key={index} className="bg-[#a52066]  font-bold text-xs p-1 px-1">
                                                {genre?.name}
                                            </p>
                                        );
                                    })}
                                </div>
                                <p>{postBase.data.source}</p>
                                <p>{postBase.data.aired.from.split("T")[0]}</p>
                                <p>{postBase.data.studios[0]?.name}</p>
                                <p>{postBase.data.rating}</p>
                                <p>{postBase.data.duration}</p>
                                <div>
                                    {postBase.data.relations.map((item, index) => {
                                        return (
                                            <p key={index}>
                                                {item.entry[0].type}
                                                &nbsp;
                                                {item.entry[0]?.name}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <p className="mt-5">{postBase.data.synopsis}</p>
                    </div>
                </div>
                <Videos postBase={postBase} params={params} />
            </div>
        );
};
