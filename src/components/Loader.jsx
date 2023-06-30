import React from "react";

const Loader = (props) => {
    return (
        <div className="max-w-[500px] mx-auto mt-11">
            <img className="w-[200px] mx-auto" src="loader.gif" alt="111" />
            <h1 className="text-[#c7ccd8] text-3xl text-center mt-5">{props.describe}</h1>
        </div>
    );
};

export default Loader;
