import React from "react";

export const ErrorPage = () => {
    return (
        <div className="flex flex-col  items-center">
            <p className="text-[250px] font-bold tracking-widest line-height-normal">
                <span className="text-[#a52066]">4</span>
                <span className="text-[#1aac44]">0</span>
                <span className="text-[#a52066]">4</span>
            </p>
            <p className="text-[64px] text-center text-white tracking-wider font-bold">The requested page wasn't found</p>
        </div>
    );
};
