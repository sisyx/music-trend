import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getPublishers } from "../../../functions";
import { AiFillInstagram } from "react-icons/ai";
import CircleGradient from "../../loadings/CircleGradient"
import { Edit, Instagram } from "@mui/icons-material";
import EditPublisher from "./EditPublisher";
import UploadShots from "./UploadShots";
import { toKFormat } from "../../../utils/numbers";

function EditCamp({isVisible = false, handleCloseEdit, camp}) {
    const [isInDetails, _setIsInDetail] = useState(true);
    const [isLoading, _setIsLoading] = useState(false);
    const [pages, setPages] = useState([])
    const [isGettingPrices, setIsGettingPrices] = useState(false);
    const [selectedPage, setSelectedPage] = useState();
    const [isEdtingPub, setIsEditingPub] = useState(false);

    useEffect(() => {
        init();
    }, [isVisible, camp]);

    async function init() { // get pages

        if (!isVisible) return
        setIsGettingPrices(() => true)
        const xpages = await getPublishers(camp.id);

        setPages(xpages);
        setIsGettingPrices(() => false);
        if (xpages.length) setSelectedPage(xpages[0])
    }

    function startEdit(page) {
        setIsEditingPub(() => true);
        setSelectedPage(page);
    }

    return ( 
        <div className={`fixed top-0 right-0 bottom-0 left-0 z-50 cursor-default transition-all duration-300 ${isVisible ? "scale-y-1" : "scale-y-0"}`} onClick={handleCloseEdit}>
            {/* page details */}
            <div className={`p-2 pt-10 flex flex-col items-end gap-5 w-screen max-w-96 shadow-xl shadow-gray-500 border rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black cursor-default transition-all duration-300 ${isInDetails && !isEdtingPub ? "scale-1" : "scale-0"}`} onClick={event => event.stopPropagation()}>
                    <div>
                        <img src="/logo.png" />
                    </div>
                    <div className="flex w-full items-center justify-center">{camp.name}</div>
                    {/* Page Prices */}
                    <div className="flex flex-col gap-3 items-end w-full py-5 px-2 rounded-lg bg-gray-200">
                        <div className="flex w-full items-center justify-center ">اینفلوینسر ها</div>
                        {
                            pages.map(page => 
                                <div className="flex flex-row-reverse items-center justify-between gap-2 w-full max-w-96">
                                <div className="flex items-center gap-2">
                                    {/* title */}
                                    <div>
                                        {page?.page.pageId || page.pageId}
                                    </div>
                                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-gradient-to-r  from-primary-start hover:to-primary-start hover:from-primary-end  to-primary-end transition-all duration-1000 cursor-pointer">
                                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                                        <Instagram />
                                    </div>
                                </div>
                                {/* price */}
                                <div className="flex items-center gap-2">
                                    <div onClick={() => startEdit(page)} className="flex items-center justify-center rounded-xl border border-black p-2 hover:text-sm hover:text-white hover:bg-primary hover:border-primary transition-all duration-100 cursor-pointer"> 
                                        <Edit />
                                    </div>
                                    <span>
                                        فالور
                                    </span>
                                    <span>
                                        {toKFormat(page?.page?.followesrs || 0)}
                                    </span>
                                </div>
                            </div> 
                            )
                        }
                        {
                            isGettingPrices ? 
                            <div className="w-full flex items-center justify-center">
                                <CircleGradient /> 
                            </div> : ""
                        }

                    </div>
                    <Button sx={{width: "100%"}} onClick={handleCloseEdit}>بستن</Button>
                </div>
                <div className={`p-2 pt-10 flex flex-col items-end gap-5 w-screen max-w-96 shadow-xl shadow-gray-500 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black cursor-default transition-all duration-300 ${isInDetails ? "scale-x-0" : "scale-x-1"}`} onClick={event => event.stopPropagation()}>
                        <div className="text-2xl font-extrabold">اضافه کردن تعرفه به پیج</div>
                        <div className="flex items-center gap-2 w-full">
                            <AiFillInstagram fontSize="2rem" />
                            {/* <span className={`text-2xl ${styles.pt_serif_regular}`}>{page.pageId}</span> */}
                        </div>
                        <Button
                            // onClick={handleCreatePage} 
                            sx={{width: "100%"}} 
                            disabled={isLoading}
                            variant="contained"
                        >
                            {
                                isLoading 
                                ? <span>در حال ایجاد</span>
                                : <span>اضافه کردن تعرفه به پیج</span>
                            }
                        </Button>
                        <Button sx={{width: "100%"}}>بازگشت به جزییات</Button>
                </div>
                {
                    selectedPage ? <EditPublisher campid={camp.id} page={selectedPage} isEdtingPub={isEdtingPub} handleClosePubEdit={() => setIsEditingPub(false)} /> : ""
                }
        </div>
     );
}

export default EditCamp;