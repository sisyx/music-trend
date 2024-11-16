import { useState } from "react";
import { getUser } from "../../../utils/auth";
import { Avatar } from "@mui/material";
import { NavLink } from "../../Navbar";
import { Link } from "react-router-dom";

function AdminHeader() {
    const [username] = useState(getUser())
    return ( 
        <div className="flex items-centertext-black w-full py-3 bg-white">
            <div className="flex items-center pl-4">
                <Link to='/logout' className="flex items-center gap-2 p-1 rounded-xl text-black px-4 hover:bg-gray-400 cursor-pointer border">
                    خروج از حساب
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-end gap-2 pr-4">
                <NavLink to="/">
                    رفتن به صفحه اصلی
                </NavLink>
                <div className="flex items-center gap-2 p-1 rounded-xl hover:bg-gray-400 cursor-pointer border">
                {
                    username
                    ? <div className="font-bold text-black">{username}</div>
                    : ""
                }
                <Avatar />
                </div>
            </div>
        </div>
     );
}

export default AdminHeader;