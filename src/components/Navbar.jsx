import React, { useState } from "react";
import { AiFillHome, AiFillFolderOpen, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdFlame } from "react-icons/io";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdAnnouncement } from "react-icons/md";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { BiSolidLogIn } from "react-icons/bi";
import LoginModal from "./LoginModal";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchDropList from "./SearchDropList";

export const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const handleMenuClick = () => {
        setOpen(!open);
    };
    const [modalActive, setModalActive] = useState(true);
    const handleLoginModal = () => {
        setModalActive(!modalActive);
        console.log(modalActive);
    };

    return (
        <div className="w-full flex justify-between sticky top-0 z-50">
            <div className="  flex-wrap relative lg:max-w-[1300px] w-full gap-4 bg-[#283142] mx-auto flex justify-between items-center p-3 border-b-2 border-[#a52066] rounded-b-md">
                {/* logo */}
                <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-white cursor-pointer font-bold">BestAnime.org</p>

                <div className="flex items-center gap-3">
                    {/* navigation */}

                    <ul
                        className={`lg:flex items-center justify-center text-[#c7ccd8] font-bold gap-3 flex-wrap block absolute lg:static h-auto border-b-2 border-[#a52066] rounded-b-md lg:border-b-0 bg-[#283142] lg:w-full overflow-hidden lg:bg-transparent transition-width duration-500  ${
                            open ? "w-[50%] p-5 min-h-[100%]" : "w-0 h-0"
                        } right-0 top-[110%]`}
                    >
                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <AiFillHome size={20} />
                            <a href="#">Home</a>
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <AiFillFolderOpen size={20} />
                            <a href="#">Animes</a>
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <IoMdFlame size={20} />
                            <a href="#">New</a>
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <BsFillBarChartFill size={20} />
                            <Link to="/Top100">Top-100</Link>
                        </li>

                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <MdAnnouncement size={20} />
                            <a href="#">Announce</a>
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <AiFillFolderOpen size={20} />
                            <a href="#">Collections</a>
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:text-[#a52066]">
                            <GiNinjaHeroicStance size={20} />
                            <a href="#">Heroes</a>
                        </li>
                    </ul>

                    {/* search */}
                    <Search className="hidden" search={"Search"} />
                    {/* <SearchDropList /> */}
                    {/* log-in */}
                    <div className="text-[#c7ccd8] duration-75 transition-all ease-in-out hover:text-slate-100 cursor-pointer flex items-center">
                        <BiSolidLogIn onClick={() => handleLoginModal()} size={30} />
                    </div>

                    {/* burger - menu */}
                    {!open && (
                        <div
                            className="text-[#c7ccd8] cursor-pointer lg:hidden"
                            onClick={() => {
                                handleMenuClick();
                            }}
                        >
                            <AiOutlineMenu size={30} />
                        </div>
                    )}
                    {/* burger - menu close */}
                    {open && (
                        <div
                            className="lg:hidden cursor-pointer text-[#c7ccd8]"
                            onClick={() => {
                                handleMenuClick();
                            }}
                        >
                            <AiOutlineClose size={30} />
                        </div>
                    )}
                </div>
            </div>
            <LoginModal active={modalActive} setActive={setModalActive} />
        </div>
    );
};
