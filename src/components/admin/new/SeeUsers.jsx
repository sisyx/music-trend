import { useEffect, useState } from "react";
import { getUsers } from "../../../functions";
import { Button } from "@mui/material";
import User from "./User";
import CircleGradient from "../../loadings/CircleGradient";

const filters = [
    {
        text: "ادمین ها",
        value: ["admin"]
    },
    {
        text: "کاربران حرفه ای",
        value: ["professional"]
    },
    {
        text: "کاربران معمولی",
        value: ["user"]
    },
    {
        text: "همه",
        value: ["admin", "professional", "user"]
    },
]


function SeeUsers() {
    const [filter, setFilter] = useState(filters[filters.length - 1])
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        init()
    }, [])
    
    async function init() {
        setIsLoading(() => true)
        const xusers = await getUsers();
        console.log(xusers);
        setUsers(xusers)
        setIsLoading(() => false)
    }

    const filteredUser = users.filter(user => filter.value.includes(user.roles) && user.username.includes(search));

    return ( 
        // container
        <div className="w-full p-8">
            {/* title bar and etc */}
            <div className="flex justify-end items-center w-full bg-transparent ">
                <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-bold">مدیریت کاربران سایت</span>
                    <span className="flex items-center  gap-2" dir="rtl">
                        <span className="hover:bg-gray-200 cursor-pointer">مخاطب گستر</span> /
                        <span className="hover:bg-gray-200 cursor-pointer">رابط کاربری</span> /
                        <span className="hover:bg-gray-200 cursor-pointer">مشاهده کاربران</span>
                        {/* مخاطب گستر / رابط کاربری / مشاهده ی کاربران */}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-black bg-white h-screen mt-5 rounded-3xl p-4">
                {/* search and filter users */}
                <div className="flex justify-between">
                    <div className="flex items-center border rounded-full overflow-hidden">
                        <input placeholder="جستجو" type="text" dir="rtl" className="pr-2 bg-none border-none outline-none w-full h-full min-w-0 min-h-0" value={search} onChange={event => setSearch(event.target.value)} />
                    </div>
                    <div className="flex justify-between">
                    {
                        filters.map(xfilter => <Button variant={xfilter.text === filter.text ? 'contained' : ""} onClick={() => setFilter(xfilter)}>{xfilter.text}</Button>)
                    }
                    </div>
                </div>
                {/* users list */} 
                {
                    isLoading ? 
                    <div className="flex items-center justify-center  w-full">
                        <CircleGradient />
                    </div>
                    : filteredUser.map(user => 
                        <User user={user} />
                    )
                }
            </div>
        </div>
     );
}

export default SeeUsers;