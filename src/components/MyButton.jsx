import React from "react";

const MyButton = (props) => {
    return (
        <button
            onClick={(e) => e.preventDefault()}
            className=" bg-[#171c2c] text-[#c7ccd8] py-2 px-4 rounded-3xl hover:bg-[#191f30] hover:text-[#c7ccd8] font-semibold transition-all ease-in-out duration-200"
        >
            {props.children}
        </button>
    );
};

export default MyButton;
