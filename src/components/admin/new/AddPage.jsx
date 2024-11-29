import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { GENDERS } from "../../../constatnts";
import { customAlert } from "../../../functions";
import { getCookie } from "../../../lib/cacheAndStorage";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { BASE_URL } from "../../../config/config";


function AddPage({ isVisible, pageCategories, pageTypes, setReload, handleCloseAdinge = () => {return} }) {
    const [isAdding, setIsAdding] = useState(false);
    const [pageId, setPageId] = useState("");
    const [selectedPageType, setSelectedPageType] = useState(1);
    const [selectedPageCat, setSelectedPageCat] = useState(1);
    const [pageDesc, setPageDesc] = useState("");
    const [sex, setSex] = useState(GENDERS.at(0));
    const [telegramID, setTelegramID] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
 
    async function handleCreatePage() {
        const token = getCookie("token")
        if (!token) return

        const newPageId = pageId;
        const pageType = selectedPageType;
        const pageTypeCategory = selectedPageCat;
        const pageDescription = pageDesc;
        const xsex = sex;
        const xtel = telegramID;
        const xwat = whatsappNumber;

        if (!pageTypeCategory || !pageType || !newPageId || !xsex || !xtel || !xwat ) {
            customAlert("لطفا ابتدا فیلد ها را به درستی پر کنید")
            return
        }

        if (xtel.length < 5 || !xtel.startsWith("@")) {
            customAlert("لطفا آیدی تلگرام را به درستی وارد.");
            return
        }

        if (xwat.length !== 11 || !xwat.startsWith("09")) {
            customAlert("لطفا شماره واتساپ معتبری وارد کنید");
            return
        }
        
        setIsAdding(() => true)
        try {
            const req = await fetch(`${BASE_URL}/api/Pages/CreatePage2`, {
                method: "POST",
                body: JSON.stringify({
                    pageId: newPageId,
                    pageTypeId: pageType,
                    pageCategoryId: pageTypeCategory,
                    description: pageDescription,
                    sex: xsex,
                    telegramID: xtel,
                    whatsappNumber: xwat,
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
            setReload(cur => cur + 1)
        } catch (error) {
            customAlert("ایجاد پیج جدید ناموفق بود. لطفا دوباره تلاش کنید", "error")
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
                <div className="w-full flex gap-4">
                    <TextField label="آیدی تلگرام" placeholder="ex: @username" sx={{flex: "1"}} value={telegramID} onChange={e => setTelegramID(event.target.value)} />
                    <TextField label="شماره واتساپ" placeholder="ex: 09876543210" sx={{flex: "1"}} value={whatsappNumber} onChange={e => setWhatsappNumber(event.target.value)} />
                </div>
                <div className="flex items-center justify-between w-full gap-2" dir="rtl">
                    <span className="flex-1">جنسیت</span>
                    <Select
                        sx={{flex: "1"}}
                        labelId="gender-select-lable-id"
                        id="gender-select"
                        value={sex}
                        defaultValue={GENDERS[0].value}
                        label="جنسیت"
                        onChange={event => setSex(event.target.value)}
                    >
                        {
                            GENDERS.map(gender => 
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