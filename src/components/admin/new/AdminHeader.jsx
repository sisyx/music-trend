import { useState } from "react";
import { getUser } from "../../../functions";
import { Avatar } from "@mui/material";

function AdminHeader() {
    const [username] = useState(getUser())
    return ( 
        <div className="flex items-centertext-black w-full py-3 bg-white">
            <div className="flex items-center gap-2 p-1 rounded-xl hover:bg-gray-400 cursor-pointer">
                <Avatar />
                {
                    username 
                    ? <div className="font-bold text-black">{username}</div>
                    : ""
                }
            </div>
            <div className="flex-1"></div>
        </div>
     );
}

export default AdminHeader;