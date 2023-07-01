import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import MyButton from "./MyButton";

const Genres = (props) => {
    const [visible, setVisible] = useState(20);
    const [searchByGenre, setSearchByGenre] = useState("");

    const filteredGenres = props.genres.filter((genre) => genre.name.toLowerCase().includes(searchByGenre.toLowerCase()));

    const showMore = () => {
        visible >= props.genres.length ? setVisible(20) : setVisible((prevValue) => prevValue + 5);
    };

    return (
        <div className="w-full lg:w-[25%] xl:w-[25%] bg-[#283142] mt-5 border-t-2 border-[#a52066] p-3 text-[#c7ccd8] rounded-md">
            <div className="flex justify-between lg:justify-center xl:lg:justify-center gap-5 flex-wrap">
                <div className="genres__title flex  gap-2 items-center">
                    <AiOutlineMenu size={20} />
                    <p className="font-semibold text-lg">Genres</p>
                </div>
                <Search onChange={setSearchByGenre} value={searchByGenre} search={"search by genre"} />
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
                    <MyButton>{visible >= props.genres.length ? "Hide all" : "Show more"}</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Genres;
