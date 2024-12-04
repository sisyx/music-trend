import { Button, IconButton } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Timeline from "../components/start/Timeline";
import StartNav from "../components/start/StartNav";
import { timelinedata } from "../constatnts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function StartLayout({children, searchCho}) {
    const navigate = useNavigate();

    useEffect(() => {
        const href = location.href;
        const splitedHref = href.split('/');
        const isLastItemEmptyString = !splitedHref[splitedHref.length - 1];
        const lastSubpath = splitedHref[isLastItemEmptyString ? splitedHref.length - 2 : splitedHref.length - 1 ];
        if (lastSubpath.startsWith("start")) {
            navigate("instagram");
        }
    }, [])

    return ( 
        <div>
            {/* <CheckPageAccess /> */}
            <StartNav />
            <div className="mt-5 overflow-hidden">
                {/* top */}
                <div className="flex items-center justify-between px-2 md:px-12 transition-all duration-300 vazirmatn">
                    {/* top left */}
                    <div></div>
                    {/* <div className="flex items-center gap-2">
                        <Link to="/" className="hidden sm:block">
                            <Button variant="contained" sx={{
                                backgroundColor: "#2da5dc",
                                ":hover": {
                                    backgroundColor: "#2da5d0"
                                }
                            }}>
                                    بازگشت
                            </Button>
                        </Link>
                    <Link to="/" className="text-sm sm:hidden">
                        بازگشت
                    </Link>
                    </div> */}
                    {/* top center */}
                    <Timeline className="hidden md:flex items-center flex-1 max-w-96" itemWidth={40} data={timelinedata} />
                    {/* top right */}
                    {/* <div>
                        <div className=" underline sm:no-underline sm:border p-2 rounded-md sm:shadow-telegram sm:shadow-md hover:shadow-primary transition-all duration-150 cursor-pointer text-sm">
                            ایجاد کمپین جدید
                        </div>
                    </div> */}
                    <div></div>
                </div>
                {/* main */}
                <div className="w-screen flex flex-col items-center justify-center md:mt-12">
                <Timeline className="flex flex-nowrap md:hidden items-center w-screen px-4" itemWidth={40} data={timelinedata} />
                {/* React Router Outlet (for pathes headed by /p/start) */}
                <Outlet />
                </div>
            </div>
        </div>
     );
}

export default StartLayout;