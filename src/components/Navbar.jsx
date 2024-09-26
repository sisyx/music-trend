import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoBagAddOutline, IoSearchOutline } from "react-icons/io5";
import { FaBagShopping, FaChevronLeft } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import GlassyButton from "./GlassyButton";
import AccountMenu from "./AccountBtn";
import { getCookie, getRole, getUser, isLoggedin, toPersianNumbers } from "../functions";
import { useEffect, useState } from "react";
import { cartCookies } from "../constatnts";

function Navbar() {

    const [username, setUsername] = useState(undefined);
    const [cart, setCart] = useState(0);
    const role = getRole();
    useEffect(() => {
        const campsInCookie = getCookie(cartCookies.campidName);
        setCart(campsInCookie)
        setUsername(getUser());
    }, [])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return ( 
        // border outer
        <div className="w-screen md:p-5 md:fixed md:top-0 flex justify-center max-z transition-all duration-300">
            <nav className="max-w-7xl w-screen shadow p-2 md:px-5  md:rounded-2xl bg-white bg-opacity-80 flex items-center justify-between backdrop-blur-3xl">
                {/* left */}
                <div className="flex items-center gap-4">
                    {/* logo */}
                    <div>
                        <span></span>
                        <img src="/logo.png" alt="" className=" w-10 md:w-14 rounded-full aspect-square object-cover object-center" />
                    </div>
                    {/* search */}
                    <div className=" text-2xl p-2 hover:text-gray-400 cursor-pointer">
                        <IoSearchOutline />
                    </div>
                </div>
                {/* right */}
                <div className="flex items-center gap-5">
                    <div className="items-center gap-5 hidden md:flex">
                        <div className="relative group p-5 h-full cursor-pointer">
                            <div className="flex items-center gap-1">
                                <span className="inline-block border border-black w-[5px] aspect-square bg-transparent rounded-full"></span>
                                <span className="inline-block border border-black w-[5px] aspect-square bg-transparent rounded-full"></span>
                                <span className="inline-block border border-black w-[5px] aspect-square bg-transparent rounded-full"></span>
                            </div>
                            <div className="

                                    absolute scale-y-0 group-hover:scale-y-100 translate-y-full opacity-0 group-hover:opacity-100  group-hover:bottom-0 -bottom-full right-0 transition-all duration-500

                                    min-w-48 rounded-xl bg-white overflow-hidden
                                ">

                                <NavLink to="/logout" className="w-full flex justify-end p-4">
                                    خروج از حساب
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/aboutus">
                            درباره ما
                        </NavLink>
                        <NavLink to="/contactus">
                            تماس با ما
                        </NavLink>
                        <NavLink to="/start">
                            ایجاد کمپین
                        </NavLink>
                        {
                            role === "admin"
                            ? <NavLink to="/admin">
                            ادمین
                        </NavLink> : ""
                        }
                    </div>
                    <Link to={cart ? "/payment" : "/start"} className={`relative group rounded-full aspect-square border p-2 cursor-pointer hover:border-telegram hover:text-telegram ${cart ? "border-red-500 bg-red-500 text-white hover:bg-telegram hover:text-white" : ""}`}>
                        <IoBagAddOutline fontSize="1.2rem" />
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-6 h-6 flex items-center justify-center bg-red-500 group-hover:bg-telegram rounded-full text-white aspect-square">
                            <span className="block ">
                                {
                                    toPersianNumbers(cart ? "1" : "0")
                                }
                            </span>
                        </div> 
                    </Link>
                    {
                        username 
                        ? <div className="hidden md:flex items-center gap-2 bg-transparent hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
                            <span>
                                {username}
                            </span>
                            <Avatar />
                        </div>
                        : <GlassyButton to="/login" className="hidden md:block">
                            ورود به حساب
                        </GlassyButton>
                    }
                    <div className="md:hidden">
                        <AccountMenu username={username} />
                    </div>
                </div>
            </nav>
        </div>

     );
}

function NavLink({to = '', children, className = ""}) {
    return (
        <Link to={to} className={`text-black hover:text-telegram flex items-center gap-1 transition-all duration-150 ${className}`}>
            <FaChevronLeft fontSize="0.8rem" />
            {children}
        </Link>
    )
}

export default Navbar;