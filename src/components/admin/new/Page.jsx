import GlassyButton from "../../GlassyButton";
import { useEffect, useState } from "react";
import { MdCategory } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import styles from "./Page.module.css"
import AddPriceToPage from "./AddPriceToPage";
import { customAlert, deletePublisher, refreshPubMetadata } from "../../../functions";
import { IconButton, Tooltip } from "@mui/material";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { genders } from "../../../constatnts";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { RiDeleteBin7Fill } from "react-icons/ri";

function Page({page, pageTypes, pageCategories}) {

    const [pageid, setPageId] = useState(page.pageId);
    const [xpage, setXpage] = useState({followers: 0, following: 0})
    const [isInDetail, setIsInDetail] = useState(false);
    const imageUrl = page.imgUrl || "/logo.png";
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        setPageId(page.pageId)
    }, [page])

    function handleOpenDetails() {
        setIsInDetail(true);
    }

    function handleCloseDetails(event) {
        event.stopPropagation();
        setIsInDetail(false);
    }

    async function refreshPub() {
        setIsRefreshing(() => true);
        const refresh = await refreshPubMetadata(pageid);
        customAlert(refresh?.message || "اپدیت پیج ناموفق بود")
        setIsRefreshing(() => false);
    }

    return ( 
        <div className={`flex relative flex-col items-center justify-end gap-6 rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer`}>
                {/* refresh button */}
                <IconButton disabled={isRefreshing} onClick={refreshPub} sx={{position: "absolute", top: "1rem", right: "1rem", zIndex: "10", transition: "all 50ms", ":hover": {translate: "0 -5px", scale: "1.1"}}}>
                    <YoutubeSearchedForIcon />
                </IconButton>
                <IconButton disabled={isRefreshing} onClick={() => deletePublisher(page.pageId)} sx={{position: "absolute", top: "3rem", right: "1rem", zIndex: "10", color: "#a00", transition: "all 50ms", ":hover": {translate: "0 -5px", scale: "1.1"}}}>
                    <RiDeleteBin7Fill />
                </IconButton>
                <Tooltip title={genders.find(gender => gender.value === page.sex)?.text} placement="right">
                    <span className="absolute top-4 left-4 text-gray-900 text-xl flex items-center justify-center p-2 bg-gray-300 bg-opacity-0 hover:bg-opacity-100 transition-all duration-100 rounded-full">
                        {
                            page.sex === genders.at(0).value ? <AiOutlineMan /> :
                            page.sex === genders.at(1).value ? <AiOutlineWoman /> :
                            <VscWorkspaceUnknown />
                        }
                    </span>
                </Tooltip>

                {/* top */}
                <div className="flex flex-col flex-1 justify-between gap-6 p-3 px-5">
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-1 border-4 border-primary-start rounded-full aspect-square w-48">
                            <img src={imageUrl} alt={`${pageid} Profile Image`} className="rounded-full w-full h-full aspect-square flex items-center justify-center text-center" loading="lazy" crossOrigin="anonymous" />
                        </div>
                        <span className={`text-2xl font-extrabold ${styles.pt_serif_regular}`}>
                            {pageid}
                        </span>
                        <span className={`text-2xl font-extrabold`}>
                            {page.showName}
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
                                <code>{page?.followesrs || "0"}</code>
                                <span>فالورها</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code>{page?.following || "0"}</code>
                                <span>فالوینگها</span>
                            </div>
                        </div>
                    </div>
                </div>
                <GlassyButton onClick={handleOpenDetails} className="w-full rounded-none flex items-center justify-center">مشاهده جزییات</GlassyButton>


                <AddPriceToPage imgUrl={imageUrl} isVisible={isInDetail} page={page} handleCloseAdinge={handleCloseDetails} />
            </div>
     );
}

export default Page;