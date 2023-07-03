import React from "react";
import MyButton from "./MyButton";

export const Pagination = ({ episodesPerPage, totalEpisodes, onPageChange, playClickHandler }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
        pageNumbers.push(i);
    }

    const changePage = (number, e) => {
        e.preventDefault();
        onPageChange(number);
        playClickHandler();
    };

    return (
        <div className="flex justify-center flex-wrap gap-3 mt-5">
            {pageNumbers.map((number) => {
                return (
                    <a
                        className="bg-[#171c2c] text-[#c7ccd8] border border-[#9498a1] py-2 px-4 rounded-3xl hover:bg-[#1c2336] hover:text-[#c7ccd8] font-semibold transition-all ease-in-out duration-200"
                        key={number}
                        href="#"
                        onClick={(e) => changePage(number, e)}
                    >
                        {number}
                    </a>
                );
            })}
        </div>
    );
};
