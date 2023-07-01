import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MyButton from "./MyButton";
import { BsFillLockFill, BsFillPersonFill } from "react-icons/bs";

const LoginModal = ({ active, setActive }) => {
    const handleLoginClose = (e) => {
        setActive(!active);
    };

    return (
        <div
            onClick={() => handleLoginClose()}
            className={`modal w-[100%] h-[100vh] transition-all duration-300 fixed  bg-[rgba(0,0,0,0.5)] top-0 left-0 flex items-center justify-center ${
                active ? "opacity-0 pointer-events-none" : "opacity-1 pointer-events-auto"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="modal__content bg-[#283142] p-10 rounded-md relative text-black flex justify-center items-center"
            >
                <AiOutlineClose
                    onClick={() => handleLoginClose()}
                    size={20}
                    className="absolute hover:rotate-180 transition-rotate ease-in-out duration-300 top-4 right-4 cursor-pointer text-white"
                />
                <form action="" className="flex-col gap-3 flex">
                    <div className="inputs flex flex-col gap-3">
                        <div className="login max-w-[200px] bg-[#333c4d] rounded-xl flex justify-between items-center p-3 transition-bg duration-500 hover:bg-slate-700">
                            <input type="login" placeholder="Login" className="bg-transparent focus: outline-none w-full ps-3 text-white" />
                            <BsFillPersonFill size={20} className="text-[#c7ccd8]" />
                        </div>
                        <div className="password max-w-[200px] bg-[#333c4d] rounded-xl flex justify-between items-center p-3 transition-bg duration-500 hover:bg-slate-700">
                            <input type="password" placeholder="Password" className="bg-transparent focus: outline-none w-full ps-3 text-white" />
                            <BsFillLockFill size={20} className="text-[#c7ccd8]" />
                        </div>
                    </div>
                    <div className="buttons text-[#c7ccd8] flex justify-between items-center">
                        <MyButton>Log-in</MyButton>
                        <a href="#" className="underline">
                            Forget?
                        </a>
                    </div>
                    <div className="registration text-center">
                        <MyButton>Registration</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
