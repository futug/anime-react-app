import React from "react";

const MyCardButton = (props) => {
    return (
        <button className="bg-orange-500 block text-[#1c2336] mt-5 py-2 px-4 rounded-3xl hover:bg-orange-600 hover:text-[#1c2336] border border-color-[rgba(199, 204, 216, 0.5)] font-semibold transition-all ease-in-out duration-200">
            {props.children}
        </button>
    );
};

export default MyCardButton;
