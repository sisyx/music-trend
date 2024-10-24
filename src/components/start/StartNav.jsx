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
            <nav className="w-full border-b flex items-center justify-between gap-2 px-4 py-2 md:py-4">
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
                <div className="flex-1 flex justify-center" dir="rtl">
                    <div className="flex items-center pr-2 md:pr-4 rounded-lg md:rounded-full  overflow-hidden max-w-2xl w-full bg-gray-100">
                        <label htmlFor="search-start" className="hidden">search</label>
                        <IoSearchSharp className="text-sm md:text-base" />
                        <input type="text" value={search} onChange={event => setSearch(event.target.value)} name="search-start" id="#search" placeholder="جستجوی اینفلوینسر ها" className="w-full h-full outline-none bg-transparent px-2 py-1 md:py-2 text-black text-sm md:text-base" />
                    </div>
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