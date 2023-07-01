import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        console.log("hello");
        setIsClicked(!isClicked);
    };
    return (
        <div
            onClick={() => handleClick()}
            className={`bg-[#333c4d] rounded-full hidden md:flex justify-between p-2 items-center  transition-all duration-500 hover:bg-slate-700 ${
                isClicked ? "w-[280px]" : "w-44"
            }`}
        >
            <input className="bg-transparent focus: outline-none w-full ps-3 text-white" type="text" placeholder={props.search} />
            <AiOutlineSearch size={20} />
        </div>
    );
};

export default Search;
