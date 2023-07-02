import React from "react";
import { BarLoader } from "react-spinners";

const Loader = (props) => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            {/* <img className="w-[200px] mx-auto" src="loader.gif" alt="111" /> */}
            <BarLoader height={4} width={250} color="#a52066" />
            <h1 className="text-[#c7ccd8] text-3xl text-center mt-5">{props.describe}</h1>
        </div>
    );
};

export default Loader;
