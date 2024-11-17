import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoBagAddOutline, IoSearchOutline } from "react-icons/io5";
import { FaBagShopping, FaChevronLeft } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import GlassyButton from "./GlassyButton";
import AccountMenu from "./AccountBtn";
import { getCookie } from "../lib/cacheAndStorage";
import { toPersianNumbers } from "../utils/numbers";
import { useEffect, useState } from "react";
import { CART_COOKIES } from "../constatnts";
import { isLoggedin, getRole, getUser } from "../utils/auth";

function Navbar() {
    const [isSearching, setIsSearching] = useState(false);TAARIFS
    const [search, setSearch] = useState("");
    const [username, setUsername] = useState(undefined);
    const [cart, setCart] = useState(0);
    const role = getRole();
    useEffect(() => {
        const campsInCookie = getCookie(CART_COOKIES.campidName);
        setCart(campsInCookie)
        setUsername(getUser());
    }, [])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    return ( 
        // border outer
        <div data-aos="zoom-out-down" data-aos-duration="1500" className="w-screen md:p-5 md:fixed md:top-0 flex justify-center max-z transition-all duration-300">
            <nav className="max-w-7xl w-screen shadow-xl p-2 md:px-5  md:rounded-2xl bg-white bg-opacity-80 flex items-center justify-between backdrop-blur-3xl">
                {/* left */}
                <div className="flex items-center gap-4">
                    {/* logo */}
                    <Link to='/'>
                        <span></span>
                        <img src="/logo.png" alt="" className=" w-10 md:w-14 rounded-full aspect-square object-cover object-center" />
                    </Link>
                    {/* search */}
                    <label htmlFor="search-nav" className={`relative flex items-center gap-4 text-2xl p-2 hover:text-gray-400 cursor-pointer border rounded-lg ${isSearching ? "border-telegram" : ""} w-48 md:w-unset`}>
                        <IoSearchOutline className={`${ isSearching ? `text-telegram` : ""}`} />
                        <input value={search} onChange={handleSearch} type="text" className="bg-none bg-transparent outline-none border-none text-sm min-w-0" name="search-nav" onFocus={() => setIsSearching(() => true)} onBlur={() => setIsSearching(() => false)} />
                        <div dir="rtl" className={`bg-white text-sm p-4 rounded-b-lg shadow w-full absolute translate-y-full left-0 transition-all duration-300 ${isSearching ? "scale-y-100 -bottom-1" : "scale-y-0 -bottom-20 opacity-15"}`}>
                            {
                                search.length ? <p>مورد مطابقی یافت نشد</p> : "لطفا چیزی تایپ کنید"
                            }
                        </div>
                    </label>
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

                                    absolute scale-y-0 group-hover:scale-y-100 translate-y-full opacity-0 group-hover:opacity-100  group-hover:bottom-0 bottom-[-100px] right-0 transition-all duration-500

                                    min-w-48 rounded-xl bg-white overflow-hidden shadow-xl
                                ">

                                <NavLink to="/" className="w-full flex justify-end p-4">
                                    <span>رفتن به صفحه اصلی</span>
                                </NavLink>
                                <NavLink to={isLoggedin() ? "/logout" : "/login"} className="w-full flex justify-end p-4">
                                    {
                                        isLoggedin() ?
                                        <span>
                                            خروج از حساب
                                        </span>
                                        : <span>
                                            ورود به حساب کاربری
                                        </span>
                                    }
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/aboutus">
                            درباره ما
                        </NavLink>
                        <NavLink to="/contact">
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
                        : 
                        <div style={{
                            boxShadow: "0 0 25px #2da5dcc",
                            width: "fit-content",
                            borderRadius: "50px",
                            padding: "0",
                            background: "#2da5dc",
                            height: "fot-content",
                        }}>
                            <GlassyButton to="/login" className="hidden md:block">
                                ورود به حساب
                            </GlassyButton>
                        </div>
                    }
                    <div className="md:hidden">
                        <AccountMenu role={role} username={username} />
                    </div>
                </div>
            </nav>
        </div>

     );
}

export function NavLink({to = '', children, className = ""}) {
    return (
        <Link to={to} className={`text-black hover:text-telegram flex items-center gap-1 transition-all duration-150 ${className}`}>
            <FaChevronLeft fontSize="0.8rem" />
            {children}
        </Link>
    )
}

export default Navbar;