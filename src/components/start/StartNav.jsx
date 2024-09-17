// import { RiProfileFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { getCookie } from "../../functions";
import { useEffect } from "react";

function StartNav({ search, setSearch }) {

    useEffect(() => {
        const token = getCookie("token");
        if (!token) location.assign("/login")
    }, []);

    const username = getCookie("username")

    return ( 
        // outer container
        <div>
            <nav className="w-full border-b flex items-center justify-between border-b-black p-4">
                {/* left */}
                <div className="flex-1 text-2xl flex items-center gap-2">
                    <div className="rounded-full bg-gray-200 p-2">
                        <FaUserAlt  />
                    </div>
                    <span className=" text-base">
                        {username}
                    </span>
                </div>
                
                {/* center */}
                <div className="flex-1 flex justify-center" dir="rtl">
                    <div className="flex items-center border pr-4  rounded-full  overflow-hidden max-w-2xl w-full bg-gray-300">
                        <label htmlFor="search-start" className="hidden">search</label>
                        <IoSearchSharp />
                        <input type="text" value={search} onChange={event => setSearch(event.target.value)} name="search-start" id="#search" placeholder="جستجوی اینفلوینسر ها" className="w-full h-full outline-none bg-transparent p-2 text-black" />
                    </div>
                </div>
                
                {/* right */}
                <div className="flex-1 flex items-center justify-end"> 
                    <div className="flex items-center gap-2 text-transparent bg-gradient-to-r from-primary to-telegram bg-clip-text font-bold text-2xl">
                        <span>مخاطب گستر</span>
                        <img src="/logo.png" className=" w-16" />
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default StartNav;