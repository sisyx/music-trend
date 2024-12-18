import { Tooltip } from "@mui/material";
import GlassyButton from "../../GlassyButton";
import { getProfile } from "../../../functions";
import { useEffect, useRef, useState } from "react";
import styles from "./Page.module.css"
import EditCamp from "./EditCamp";
import { Link } from "react-router-dom";
import { toShamsi } from "../../../lib/timeAndDates";

function Camp({ camp }) {

    const [campname, setCampname] = useState(camp.name);
    const [isInDetail, setIsInDetail] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        init()
        setCampname(camp.name)
    }, [camp])

    async function init() {
        if (!camp?.id) return
        const campImageSrc = await getProfile(camp.id);
        imgRef.current.src = campImageSrc;
    }

    function handleOpenDetails() {
        setIsInDetail(true);
    }

    function handleCloseDetails(event) {
        event.stopPropagation();
        setIsInDetail(false);
    }

    return ( 
        <>
        <div className={`flex relative flex-col items-center justify-end gap-6 rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer`}>
                {/* top */}
                <div className="flex flex-col flex-1 justify-between gap-6 ">
                    <div className="flex flex-col items-center gap-2">
                        <img ref={imgRef} src="/logo.png" className="camp-profile-img object-cover object-center w-full aspect-video rounded-3xl" />
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
                <div className="w-full flex gap-2 p-2">
                    <Tooltip title="این قابلیت به شما اجازه میدهد کمپین را همانگونه که مخاطب میبیند ببینید">
                        <Link target="_blank" to={`/report?campname=${campname}`} className="flex-1 border-2 border-telegram text-telegram bg-white hover:text-white hover:border-telegram hover:bg-telegram rounded-lg flex items-center justify-center transition-all duration-100">
                        مشاهده کمپین
                        </Link>
                    </Tooltip>
                    <GlassyButton onClick={handleOpenDetails} className="flex-1 rounded-lg flex items-center justify-center">مشاهده جزییات</GlassyButton>
                </div>

            </div>
            <EditCamp isVisible={isInDetail} handleCloseEdit={handleCloseDetails} camp={camp} />
        </>

     );
}

export default Camp;