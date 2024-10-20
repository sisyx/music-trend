import { useEffect, useState } from "react";
import { getCookie, getPages } from "../../../functions";
import { Button, Tooltip } from "@mui/material";
import CircleGradient from "../../loadings/CircleGradient";
import Page from "./Page";
import { AddSharp } from "@mui/icons-material";
import AddPage from "./AddPage";
import { root } from "../../../constatnts";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


function SeePages({setState}) {
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    const [pageTypes, setPageTypes] = useState([]);
    const [pageCategories, setPageCategories] = useState([]);
    const [reload, setReload] = useState(1);
    
    useEffect(() => {
        init()
    }, [reload])

    function handleOpenAding() {
        setIsCreating(true);
    }

    function reloadPages() {
        setReload(cur => cur+1);
    }
    
    function handleCloseAdinge(event) {
        event.stopPropagation()
        setIsCreating(false);
    }
    
    async function init() {
        const token = getCookie ("token");
        setIsLoading(() => true)
        const xpages = await getPages();
        setPages(xpages)

        try {
            const req = await fetch(`${root}/api/PageType/GetAll`, {
                headers: {
                    "Autherization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText);
            }

            const res = await req.json();
            setPageTypes(res);
        } catch (error) {
            console.error(error);
        }

        try {
            const req = await fetch(`${root}/api/PageTypeCategory/GetAll`, {
                headers: {
                    "Autherization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText)
            }

            const res = await req.json();
            setPageCategories(res);
        } catch (error) {
            console.error(error);
        }

        setIsLoading(() => false)
    }
    return ( 
        // container
        <div className="w-full px-0 md:px-8 p-8">
            {/* title bar and etc */}
            <div className="flex justify-end items-center w-full bg-transparent">
                <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-bold flex items-center gap-2">
                        <Tooltip title="مدیریت دست بندیها">
                            <span onClick={() => setState("see categories")} className=" rounded-full hover:border-black cursor-pointer border p-2 block">
                                <SkipPreviousIcon />
                            </span>
                        </Tooltip>
                        مدیریت اینفلوینسرها
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
                    <div className="flex items-center overflow-hidden">
                        <Button startIcon={<AddSharp />} onClick={handleOpenAding} >اضافه کردن پیج</Button>
                    </div>
                    <div className="flex justify-between">
                        <Button>text</Button>
                    </div>
                </div>
                {/* pages list */} 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-y-scroll">
                    { pages?.map(page => 
                            <Page reloadPages={reloadPages} page={page} pageTypes={pageTypes} pageCategories={pageCategories} />
                    )}
                    {

                        isLoading ?
                            <div className="flex items-center justify-center  w-full">
                            <CircleGradient />
                        </div>
                        : ""
                    }
                </div>
                {
                }
            </div>

            {/* create page form */}
            <AddPage isVisible={isCreating} setReload={setReload} handleCloseAdinge={handleCloseAdinge} pageCategories={pageCategories} pageTypes={pageTypes} /> : ""
        </div>
     );
}

export default SeePages;