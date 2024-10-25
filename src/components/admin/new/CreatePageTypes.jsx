import { useEffect, useState } from "react";
import { customAlert, deletePageCat, deletePageType, getCookie } from "../../../functions";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import CircleGradient from "../../loadings/CircleGradient";
import { AddSharp, SkipPrevious } from "@mui/icons-material";
import { englishAlphabetLC, root } from "../../../constatnts";
import AddType from "./addType";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Type from "./Type";
import Category from "./Category";

function CreatePageTypes({ setState }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [addingWhat, setAddingWhat] = useState("type");
    const [pageTypes, setPageTypes] = useState([]);
    const [pageCategories, setPageCategories] = useState([]);

    
    useEffect(() => {
        init();
    }, [])

    function handleOpenAding(xaddingWhat) {
        setAddingWhat(xaddingWhat);
        setIsCreating(true);
    }
    
    function handleCloseAdinge(event) {
        event.stopPropagation()
        setIsCreating(false);
    }
    
    async function init() {
        const token = getCookie ("token");
        setIsLoading(() => true)

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
            setPageTypes([])
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

    async function deleteThisType(name) {
        const isDeleted = await deletePageType(name);
        if (isDeleted) {
            init();
        };
    }

    async function deleteThisCat(name) {
        const isDeleted = await deletePageCat(name);
        if (isDeleted) {
            init();
        } else {
            customAlert("حذف دسته بندی ناموق بود. لطفا مجددا تلاش کنید", "error")
        }
    }

    return ( 
        // container
        <div className="w-full px-0 md:px-8 p-8">
            {/* title bar and etc */}
            <div className="flex justify-end items-center w-full bg-transparent">
                <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-bold flex items-center gap-2">
                        <Tooltip title="مدیریت کمپین ها">
                            <span onClick={() => setState("see camps")} className=" rounded-full hover:border-black cursor-pointer border p-2 block">
                                <SkipPrevious />
                            </span>
                        </Tooltip>
                        مدیریت دسته بندی ها
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
                {/* users list */} 
                {
                    isLoading ? 
                    <div className="flex items-center justify-center  w-full">
                        <CircleGradient />
                    </div>
                    : 
                    <>
                        <div>
                            <div className="flex items-center justify-between">
                                <span>
                                    Types
                                </span>
                                <Button startIcon={<AddSharp />} onClick={() => handleOpenAding("type")} >اضافه کردن نوع پیج</Button>
                            </div>
                            <div className="flex flex-col gap-2 max-h-96">
                                {
                                    pageTypes.map(type => <Type reload={init} name={type.name} deleteThisType={deleteThisType} />)
                                }
                            </div>
                        </div>
                        <div>
                        <div className="flex items-center justify-between">
                                <span>
                                    Categories
                                </span>
                                <Button startIcon={<AddSharp />} onClick={() => handleOpenAding("category")} >اضافه کردن دسته بندی</Button>
                            </div>
                            <div className="flex flex-col gap-2 h-96">
                                {
                                    // pageCategories.map(cat => <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full p-3" dir={englishAlphabetLC.includes(cat.categoryName[0]) ? "ltr" : "rtl" }>{cat.categoryName}</div>)
                                    pageCategories.map(cat => <Category name={cat.categoryName} reload={init} deleteThisCat={deleteThisCat} />)
                                }
                            </div>
                        </div>
                    </>
                }
            </div>

            {/* create page form */}
            {
                isCreating ?
                <AddType reloadAll={init} addingWhat={addingWhat} handleCloseAdinge={handleCloseAdinge} pageCategories={pageCategories} pageTypes={pageTypes} /> : ""
            }
        </div>
     );
}

export default CreatePageTypes;