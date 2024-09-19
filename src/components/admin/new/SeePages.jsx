import { useEffect, useState } from "react";
import { getCookie, getPages, getUsers } from "../../../functions";
import { Button, TextField } from "@mui/material";
import User from "./User";
import CircleGradient from "../../loadings/CircleGradient";
import Page from "./Page";
import { AddSharp } from "@mui/icons-material";
import AddPage from "./AddPage";
import { root } from "../../../constatnts";

function SeePages() {
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
        <div className="w-full p-8">
            {/* title bar and etc */}
            <div className="flex justify-end items-center w-full bg-transparent">
                <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-bold">مدیریت اینفولینسرها</span>
                    <span className="flex items-center  gap-2" dir="rtl">
                        <span className="hover:bg-gray-200 cursor-pointer">مخاطب گستر</span> /
                        <span className="hover:bg-gray-200 cursor-pointer">رابط کاربری</span> /
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
                <div className="grid grid-cols-4 gap-3">
                    { pages?.map(page => 
                            <Page page={page} pageTypes={pageTypes} pageCategories={pageCategories} />
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