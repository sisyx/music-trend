import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import GlassyButton from "./GlassyButton";
import AccountMenu from "./AccountBtn";
import { getRole, getUser, isLoggedin } from "../functions";
import { useEffect, useState } from "react";

function Navbar() {

    const [username, setUsername] = useState(undefined);
    const role = getRole();
    useEffect(() => {
        setUsername(getUser());
    }, [])

    return ( 
        // border outer
        <div className="w-screen md:p-5 md:fixed md:top-0 flex justify-center max-z">
            <nav className="max-w-7xl w-screen shadow p-2 md:p-5 md:rounded-2xl flex items-center justify-between backdrop-blur-3xl">
                {/* left */}
                <div className="flex items-center gap-4">
                    {/* logo */}
                    <div className="top-0">
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
                    <div className="rounded-full aspect-square border p-3 cursor-pointer hover:border-telegram hover:text-telegram">
                        <FaBagShopping />
                    </div>
                    {
                        username 
                        ? <div className="hidden sm:block">{username}</div>
                        : <GlassyButton to="/login" className="hidden sm:block">
                            ورود به حساب
                        </GlassyButton>
                    }
                    <div className="sm:hidden">
                        <AccountMenu username={username} />
                    </div>
                </div>
            </nav>
        </div>

     );
}

function NavLink({to = '', children}) {
    return (
        <Link to={to} className="text-black hover:text-telegram">
            {children}
        </Link>
    )
}

export default Navbar;