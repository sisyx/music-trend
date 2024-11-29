// import { RiProfileFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { getCookie } from "../../lib/cacheAndStorage";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import BeatifullBtn from "../css-components/BeatifullBtn";

function StartNav() {
    const username = getCookie("username")

    return ( 
        // outer container
        <div>
            <nav className="w-full border-b flex items-center justify-between gap-2 px-4 py-2">
                {/* left */}
                <div className="md:flex-1 text-2xl flex items-center gap-2">
                    <div className="rounded-full bg-gray-200 p-2 text-sm md:text-base">
                        <FaUserAlt />
                    </div>
                    <span className="text-base hidden md:inline-block">
                        {username}
                    </span>
                </div>
                
                {/* center */}
                <div className="flex-1 flex gap-2 justify-center" dir="rtl">
                    <BeatifullBtn className="rounded-md overflow-hidden">
                        <NavLink to='telegram'
                            className={({ isActive, isPending }) =>
                                `px-4 py-1 ${isPending ? "bg-primary" : isActive ? "bg-telegram text-white" : ""}`
                        }
                        >
                            تلگرام
                        </NavLink>
                    </BeatifullBtn>
                    <BeatifullBtn className="rounded-md overflow-hidden">
                        <NavLink to='instagram' 
                            className={({ isActive, isPending }) =>
                                `px-4 py-1 ${isPending ? "bg-primary" : isActive ? "bg-telegram text-white" : ""}`
                            }
                        >
                                اینستاگرام
                        </NavLink>
                    </BeatifullBtn>
                    <BeatifullBtn className="rounded-md overflow-hidden">
                        <NavLink to='website'
                            className={({ isActive, isPending }) =>
                                `px-4 py-1 ${isPending ? "bg-primary" : isActive ? "bg-telegram text-white" : ""}`
                            }
                        >
                                وبسابت
                        </NavLink>
                    </BeatifullBtn>
                </div>
                
                {/* right */}
                <div className="md:flex-1 flex items-center justify-end"> 
                    <div className="flex items-center gap-2 text-transparent bg-gradient-to-r from-primary to-telegram bg-clip-text font-bold text-2xl">
                        <span className="hidden md:inline">مخاطب گستر</span>
                        <img src="/logo.png" className="md:w-16 w-10" />
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default StartNav;