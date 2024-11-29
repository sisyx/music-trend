import GlassyButton from "../../GlassyButton";
import { useEffect, useRef, useState } from "react";
import { MdCategory, MdOutlineEdit } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import styles from "./Page.module.css"
import AddPriceToPage from "./AddPriceToPage";
import { customAlert, deletePublisher, refreshPubMetadata } from "../../../functions";
import { IconButton, Tooltip } from "@mui/material";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { GENDERS } from "../../../constatnts";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { BASE_URL } from "../../../config/config";

function Page({page, pageTypes, pageCategories, reloadPages = () => {return}}) {

    const [pageid, setPageId] = useState(page.pageId);
    const [isInDetail, setIsInDetail] = useState(false);
    const imageUrl = page.imgUrl || "/logo.png";
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showName, setShowName] = useState({old: page.showNamem, new: page.showName, isEdditing: false});
    const showNameRef = useRef()
    
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
        customAlert(refresh?.message || "اپدیت پیج ناموفق بود", refresh?.message ? "success" : "error")
        if (!!refresh?.message) {
            reloadPages();
        }
        setIsRefreshing(() => false);
    }

    async function deleteThisPage() {
        const isDeleted = await deletePublisher(page.pageId);
        if (isDeleted) {
            reloadPages();
        }
    }

    function handleStartEditing() {
        setShowName(cur => ({...cur, isEdditing: true}));
        showNameRef.current?.click();
    }

    function handleEndEditing() {
        setShowName(cur => ({...cur, isEdditing: false}));
        changeShowName();
    }

    function handleEdit(event) {
        setShowName(cur => ({...cur, new: event.target.value}));
    }

    async function changeShowName() {
        const newName = showName.new;
        const pageId = page.id;
        try {
            const req = await fetch(`${BASE_URL}/api/Pages/EditShowName?pageID=${pageId}&showName=${newName}`, {
                method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                // }
            })

            if (!req.ok) throw new Error(req.statusText);
            
            await req.text();
            customAlert("نام پیج با موفقیت تغییر یافت", "success");
        } catch (error) {
            console.error(error);
            customAlert("تغییر نام پیج ناموفق بود", "error");
            setShowName(cur => ({...cur, new: cur.old}))
        }
    }

    return ( 
        <div className={`flex relative flex-col items-center justify-end rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer`}>
                {/* top */}
                <div className="w-full flex flex-1  justify-between p-3 px-5">
                    <Tooltip title={GENDERS.find(gender => gender.value === page.sex)?.text} placement="right">
                        <span className="text-gray-900 h-fit text-xl flex items-center justify-center p-2 bg-gray-300 bg-opacity-0 hover:bg-opacity-100 transition-all duration-100 rounded-full">
                            {
                                page.sex === GENDERS.at(0).value ? <AiOutlineMan /> :
                                page.sex === GENDERS.at(1).value ? <AiOutlineWoman /> :
                                <VscWorkspaceUnknown />
                            }
                        </span>
                    </Tooltip>
                    <div className="w-full flex flex-col items-center gap-2">
                        <div className="p-1 border-4 border-primary-start rounded-full aspect-square w-full">
                            <img src={imageUrl} alt={`${pageid} Profile Image`} className="rounded-full w-full h-full aspect-square flex items-center justify-center text-center" loading="lazy" crossOrigin="anonymous" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* refresh button */}
                        <IconButton disabled={isRefreshing} onClick={refreshPub} sx={{ transition: "all 50ms", ":hover": {translate: "0 -5px", scale: "1.1"}}}>
                            <YoutubeSearchedForIcon />
                        </IconButton>
                        {/* delete button */}
                        <IconButton disabled={isRefreshing} onClick={deleteThisPage} sx={{ color: "#a00", transition: "all 50ms", ":hover": {translate: "0 -5px", scale: "1.1"}}}>
                            <RiDeleteBin7Fill />
                        </IconButton>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex-1 w-full p-3 px-5">
                    <div className="flex flex-col gap-2 items-center">
                        <span className={`text-2xl font-extrabold ${styles.pt_serif_regular}`}>
                            {pageid}
                        </span>
                        <div className={`relative flex items-center ${showName.isEdditing ? "gap-1" : "gap-2"} transition-all duration-100 text-2xl font-extrabold`}>
                            {
                                showName.isEdditing
                                ? <div className="w-full items-center">
                                    <input ref={showNameRef} value={showName.new} placeholder="نام جدید پیج" onChange={handleEdit} onBlur={handleEndEditing} className="outline-none bg-transparent py-0 text-base text-center min-w-[0px] w-full" />
                                </div>
                                : <span onBlur={handleEndEditing} onChange={handleEdit}>{showName.new || "اسم پیج"}</span>
                            }
                            {
                                showName.isEdditing ? ""
                                : <MdOutlineEdit onClick={handleStartEditing} className="text-xl absolute top-1/2 -right-2 -translate-y-1/2 translate-x-full" />
                            }
                        </div>
                    </div>
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