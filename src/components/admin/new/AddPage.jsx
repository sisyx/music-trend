import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { genders, root } from "../../../constatnts";
import { customAlert, getCookie } from "../../../functions";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function AddPage({ isVisible, pageCategories, pageTypes, setReload, handleCloseAdinge = () => {return} }) {
    const [isAdding, setIsAdding] = useState(false);
    const [pageId, setPageId] = useState("");
    const [selectedPageType, setSelectedPageType] = useState(1);
    const [selectedPageCat, setSelectedPageCat] = useState(1);
    const [pageDesc, setPageDesc] = useState("");
    const [sex, setSex] = useState(genders.at(0));
 
    async function handleCreatePage() {
        const token = getCookie("token")
        if (!token) return

        const newPageId = pageId;
        const pageType = selectedPageType;
        const pageTypeCategory = selectedPageCat;
        const pageDescription = pageDesc;
        const xsex = sex;
        console.log(newPageId)
        console.log(pageType)
        console.log(pageTypeCategory)
        if (!pageTypeCategory || !pageType || !newPageId || !xsex ) {
            customAlert("لطفا ابتدا فیلد ها را به درستی پر کنید")
            return
        }
        
        setIsAdding(() => true)
        try {
            const req = await fetch(`${root}/api/Pages/CreatePage`, {
                method: "POST",
                body: JSON.stringify({
                    pageId: newPageId,
                    pageTypeId: pageType,
                    pageCategoryId: pageTypeCategory,
                    description: pageDescription,
                    sex: xsex,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Autherization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText)
            }

            const res = await req.text();
            console.log(res);
            setReload(cur => cur + 1)
        } catch (error) {
            customAlert("ایجاد پیج جدید ناموفق بود. لطفا دوباره تلاش کنید")
            console.error(error)
        }

        setIsAdding(false)
    }


    return ( 
        <div className={`fixed top-0 right-0 bottom-0 left-0 transition-all duration-300 ${isVisible ? "scale-y-1" : "scale-y-0"}`} onClick={handleCloseAdinge}>
            <div className="p-2 py-10 flex flex-col items-end gap-5 w-screen max-w-96 shadow-xl shadow-gray-500 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black" onClick={event => event.stopPropagation()}>
                <div className="text-2xl font-extrabold">ایجاد اینفولینسر</div>
                <TextField label="page id" sx={{width: "100%"}} value={pageId} onChange={e => setPageId(event.target.value)} />
                <TextField label="توضیحات پیج" sx={{width: "100%"}} value={pageDesc} onChange={e => setPageDesc(event.target.value)} />
                <div className="flex items-center justify-between w-full gap-2" dir="rtl">
                    <span className="flex-1">جنسیت</span>
                    <Select
                        sx={{flex: "1"}}
                        labelId="gender-select-lable-id"
                        id="gender-select"
                        value={sex}
                        defaultValue={genders.at(0)}
                        label="Age"
                        onChange={event => setSex(event.target.value)}
                    >
                        {
                            genders.map(gender => 
                                <MenuItem value={gender.value}>{gender.text}</MenuItem>
                            )
                        }
                    </Select>
                </div>
                <div className="flex items-center justify-between w-full gap-2" dir="rtl">
                    <span className="flex-1">نوع پیج</span>
                    <Select
                        sx={{flex: "1"}}
                        labelId="type-select-label-id"
                        id="type-select"
                        value={selectedPageType}
                        defaultValue={pageTypes.at(0)}
                        label="نوع پیج"
                        onChange={event => setSelectedPageType(event.target.value)}
                    >
                        {
                            pageTypes.map(type => <MenuItem value={type.id} key={`page-type-${type.id}`}>{type.name}</MenuItem>)
                        }
                    </Select>
                </div>
                <div className="flex justify-between w-full items-center gap-2" dir="rtl">
                    <span className="flex-1">دسته بندی پیج</span>
                    <Select
                        sx={{flex: "1"}}
                        labelId="category-select-label-id"
                        id="category-select"
                        value={selectedPageCat}
                        defaultValue={pageCategories.at(0)}
                        onChange={event => setSelectedPageCat(event.target.value)}
                        label="دسته بندی پیج"
                    >
                        {
                            pageCategories.map(cat => <MenuItem value={cat.id} key={`page-cat-${cat.id}`}>{cat.categoryName}</MenuItem>)
                        }
                    </Select>
                </div>
                <Button 
                    onClick={handleCreatePage} 
                    sx={{width: "100%"}} 
                    disabled={isAdding}
                    variant="contained"
                >
                    {
                        isAdding 
                        ? <span>در حال ایجاد</span>
                        : <span>ایجاد اینفولینسر جدید</span>
                    }
                </Button>
            </div>
        </div>
     );
}

export default AddPage;