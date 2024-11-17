import { useEffect, useState } from "react";
import { getUsers } from "../../../functions";
import { Button, Tooltip } from "@mui/material";
import User from "./User";
import CircleGradient from "../../loadings/CircleGradient";
import { USER_LEVELS } from "../../../constatnts";
import AccountMenu from "../../MenuComponent";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const filters = [
    {
        text: "ادمین ها",
        value: [USER_LEVELS[4].value]
    },
    {
        text: "کاربران حرفه ای",
        value: [USER_LEVELS[2].value]
    },
    {
        text: "همکار ها",
        value: [USER_LEVELS[3].value]
    },
    {
        text: "کاربران معمولی",
        value: [USER_LEVELS[1].value]
    },
    {
        text: "در انتظار تایید",
        value: [USER_LEVELS[0].value]
    },
    {
        text: "همه",
        value: USER_LEVELS.reduce((acc, cur) => [...acc, cur.value], [])
    },
]


function SeeUsers({setState}) {
    const [filter, setFilter] = useState(filters[filters.length - 1])
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    
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
        <div data-aos="fade-left" className="w-full px-0 md:px-8 p-8">
            {/* title bar and etc */}
            <div className="flex justify-end items-center w-full bg-transparent ">
                <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-bold flex items-center gap-2">
                        <Tooltip title="مدیریت اینفلویسرها">
                            <span onClick={() => setState("see pages")} className=" rounded-full hover:border-black cursor-pointer border p-2 block">
                                <SkipPreviousIcon />
                            </span>
                        </Tooltip>
                        مدیریت کاربران
                    </span>
                    <span className="flex md:flex-row flex-col pr-2 md:items-center  gap-2" dir="rtl">
                        <div>
                            <span className="hover:bg-gray-200 cursor-pointer">مخاطب گستر</span> /
                        </div>
                        <div>
                            <span className="hover:bg-gray-200 cursor-pointer">رابط کاربری</span> /
                        </div>
                        <span className="hover:bg-gray-200 cursor-pointer">مشاهده اینفولینسرها</span>
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
                    <div className="justify-between md:flex hidden">
                    {
                        filters.map(xfilter => <Button variant={xfilter.text === filter.text ? 'contained' : ""} onClick={() => setFilter(xfilter)}>{xfilter.text}</Button>)
                    }
                    </div>
                    <div className="md:hidden">
                        <AccountMenu items={filters} setFilter={setFilter} />
                    </div>
                </div>
                {/* users list */} 
                {
                    isLoading ? 
                    <div className="flex items-center justify-center  w-full">
                        <CircleGradient />
                    </div>
                    : filteredUser.map(user => 
                        <User user={user} setUsers={setUsers} />
                    )
                }
            </div>
        </div>
     );
}

export default SeeUsers;