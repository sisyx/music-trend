import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BeatifullBtn from "../css-components/BeatifullBtn";

const startRoutes = [
    {
        name: "اینستاگرام",
        route: "instagram",
        color: "primary",
        icon: <BiLogoInstagramAlt />
    },
    {
        name: "تلگرام",
        route: "telegram",
        color: "telegram",
        icon: <FaTelegramPlane />
    },
    {
        name: "وبسایت",
        route: "website",
        color: "telegram",
        icon: <FaInternetExplorer />
    },
]

function StartSelectCampType() {
    return ( 
        <div className="w-full flex justify-center overflow-visible p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg shadow-primary p-8 flex flex-col items-center gap-8">
                <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
                    {
                        startRoutes.map(route => 
                            <BeatifullBtn className={`aspect-video h-40 border border-${route.color}`}>
                                <Link to={route.route} className="flex flex-col items-center p-4 rounded-lg border aspect-video group text-${route.color} hover:text-white">
                                    <span className={`text-7xl group-hover:scale-105 transition-all duration-500`}>
                                        {route.icon}
                                    </span>
                                    <span className="text-2xl uppercase font-extrabold transition-all duration-500">
                                        {route.name}
                                    </span>
                                </Link>
                            </BeatifullBtn>
                        )
                    }
                </div>
                <div className="text-2xl font-extrabold">
                    چه کمپینی میخواهید بسازید؟
                </div>
            </div>
        </div>
     );
}

export default StartSelectCampType;