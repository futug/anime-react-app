import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
    const handleChange = props.onChange ? (event) => props.onChange(event.target.value) : null;
    return (
        <div
            className="bg-[#333c4d] rounded-full 
        flex lg:flex xl:flex justify-between p-2 items-center  transition-all duration-500 hover:bg-slate-700"
        >
            <input
                onChange={handleChange}
                value={props.value}
                className="bg-transparent transition-all duration-300 focus:w-[200px] outline-none w-[120px] ps-3 text-white"
                type="text"
                placeholder={props.search}
            />
            <AiOutlineSearch size={20} />
        </div>
    );
};

export default Search;
