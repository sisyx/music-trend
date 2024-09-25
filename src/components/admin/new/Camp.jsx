import { Avatar, Button } from "@mui/material";
import GlassyButton from "../../GlassyButton";
import { root } from "../../../constatnts";
import { customAlert, getCookie, toShamsi } from "../../../functions";
import { useEffect, useState } from "react";
import { FaUserGear } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import styles from "./Page.module.css"
import AddPriceToPage from "./AddPriceToPage";
import EditCamp from "./EditCamp";

function Camp({ camp }) {

    const [campname, setCampname] = useState(camp.name);
    const [isInDetail, setIsInDetail] = useState(false);

    useEffect(() => {
        init()
        setCampname(camp.name)
    }, [camp])

    async function init() {
        console.log("initialized")
    }

    function handleOpenDetails() {
        setIsInDetail(true);
    }

    function handleCloseDetails(event) {
        event.stopPropagation();
        setIsInDetail(false);
    }

    return ( 
        <div className={`flex relative flex-col items-center justify-end gap-6 rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer`}>
                {/* top */}
                <div className="flex flex-col flex-1 justify-between gap-6 p-3 px-5">
                    <div className="flex flex-col items-center gap-2">
                        <img src="/logo.png" />
                        <span className={`text-2xl font-extrabold ${styles.pt_serif_regular}`}>
                            {campname}
                        </span>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex-1 w-full p-3 px-5">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col items-end w-full">
                            <div className="flex items-center justify-between w-full gap-2">
                                <code>{campname}</code>
                                <span>نام کمپین</span>
                            </div>
                            <div className="flex items-center justify-between gap-2 w-full">
                                <code>{toShamsi(camp.startDate)}</code>
                                <span>تاریخ شروع</span>
                            </div>
                        </div>
                    </div>
                </div>
                <GlassyButton onClick={handleOpenDetails} className="w-full rounded-none flex items-center justify-center">مشاهده جزییات</GlassyButton>

                <EditCamp isVisible={isInDetail} handleCloseEdit={handleCloseDetails} camp={camp} />
            </div>
     );
}

export default Camp;