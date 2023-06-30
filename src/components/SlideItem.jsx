import React from "react";

const SlideItem = () => {
    return (
        <div className="max-h-[300px] relative">
            <img className="object-cover max-h-[300px]  rounded-md" src="https://animeru.org/uploads/posts/2023-03/1678802164_adskij-raj400.jpg" alt="111" />
            <div className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.5)]">
                <p>Some text</p>
            </div>
        </div>
    );
};

export default SlideItem;
