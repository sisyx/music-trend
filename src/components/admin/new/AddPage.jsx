import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { root } from "../../../constatnts";
import { customAlert, getCookie } from "../../../functions";

function AddPage({ isVisible, pageCategories, pageTypes, setReload, handleCloseAdinge = () => {return} }) {

    const [isAdding, setIsAdding] = useState(false);
    const [pageId, setPageId] = useState("");
    const [selectedPageType, setSelectedPageType] = useState(1);
    const [selectedPageCat, setSelectedPageCat] = useState(1);
    const [pageDesc, setPageDesc] = useState("");
 
    async function handleCreatePage() {
        const token = getCookie("token")
        if (!token) return

        const newPageId = pageId;
        const pageType = selectedPageType;
        const pageTypeCategory = selectedPageCat;
        const pageDescription = pageDesc;
        console.log(newPageId)
        console.log(pageType)
        console.log(pageTypeCategory)
        if (!pageTypeCategory || !pageType || !newPageId ) {
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
                    description: pageDescription
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Autherization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText)
            }

            const res = await req.json();
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
                <div className="flex items-center gap-2" dir="rtl">
                        <span>نوع پیج</span>
                    <select value={selectedPageType} onChange={event => setSelectedPageType(event.target.value)}>
                        {
                            pageTypes.map(type => 
                                <option value={type.id} key={type.id}>
                                    {type.name}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="flex items-center gap-2" dir="rtl">
                        <span>دسته بندی پیج</span>
                    <select value={selectedPageCat} onChange={event => setSelectedPageCat(event.target.value)}>
                        {
                            pageCategories.map(type => 
                                <option value={type.id} key={type.id}>
                                    {type.categoryName}
                                </option>
                            )
                        }
                    </select>
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