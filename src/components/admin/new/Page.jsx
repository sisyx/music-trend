import { Avatar, Button } from "@mui/material";
import GlassyButton from "../../GlassyButton";
import { root } from "../../../constatnts";
import { customAlert, getCookie } from "../../../functions";
import { useEffect, useState } from "react";
import { FaUserGear } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import styles from "./Page.module.css"
import AddPriceToPage from "./AddPriceToPage";

function Page({page, pageTypes, pageCategories}) {

    const [pageid, setPageId] = useState(page.pageId);
    const [xpage, setXpage] = useState({followers: 0, following: 0})
    const [isInDetail, setIsInDetail] = useState(false);
    useEffect(() => {
        init()
        setPageId(page.pageId)
    }, [page])

    async function init() {
        setXpage({
            followers: 12500,
            following: 532111
        })
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
                            {pageid}
                        </span>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex-1 w-full p-3 px-5">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-2">
                                <span><PiInstagramLogoFill color="#555" /></span>
                                {
                                    pageTypes.find(type => type.id === page.pageTypeId)?.name
                                }
                            </div>
                            <div className="flex items-center gap-2">
                                <span><MdCategory color="#555" /> </span>
                                {
                                    pageCategories.find(cat => cat.id === page.pageCategoryId)?.categoryName
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2">
                                <code>{xpage.followers}</code>
                                <span>فالورها</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code>{xpage.following}</code>
                                <span>فالوینگها</span>
                            </div>
                        </div>
                    </div>
                </div>
                <GlassyButton onClick={handleOpenDetails} className="w-full rounded-none flex items-center justify-center">مشاهده جزییات</GlassyButton>


                <AddPriceToPage isVisible={isInDetail} page={page} handleCloseAdinge={handleCloseDetails} />
            </div>
     );
}

export default Page;