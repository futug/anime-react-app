import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import MyButton from "./MyButton";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [visible, setVisible] = useState(20);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        getGenres();
    }, []);

    async function getGenres() {
        const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
        console.log(response.data.data);
        setGenres(response.data.data);
    }

    const showMore = () => {
        visible >= genres.length ? setVisible(20) : setVisible((prevValue) => prevValue + 5);
        console.log(visible);
    };

    const filteredGenres = useMemo(() => {
        return genres.filter((genre) => genre.name.toLowerCase().includes(searchValue.toLowerCase()));
    }, [genres, searchValue]);

    return (
        <div className="w-full lg:w-[25%] xl:w-[25%] bg-[#283142] mt-6 border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md">
            <div className="flex justify-between xl:justify-center lg:justify-center gap-5 xl:flex-wrap lg:flex-wrap">
                <div className="genres__title flex  gap-2 items-center">
                    <AiOutlineMenu size={20} />
                    <p className="font-semibold text-lg">Genres</p>
                </div>
                <Search search={"search by genre"} onSearchChange={setSearchValue} />
            </div>
            <div className="genres__list mt-5 ">
                <ul className="flex flex-wrap justify-center gap-5">
                    {filteredGenres.slice(0, visible).map((genre, index) => (
                        <li key={index} className="hover:text-[#a52066]">
                            <a href="#">{genre.name}</a>
                        </li>
                    ))}
                </ul>
                <div onClick={() => showMore()} className="flex justify-center mt-5">
                    <MyButton>{visible >= genres.length ? "Hide all" : "Show more"}</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Genres;
