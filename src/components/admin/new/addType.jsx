import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { customAlert } from "../../../functions";
import { getCookie } from "../../../lib/cacheAndStorage";
import { BASE_URL } from "../../../config/config";

function AddType({ reloadAll = () => {return}, addingWhat = "type", handleCloseAdinge = () => {return} }) {

    const [isAdding, setIsAdding] = useState(false);
    const [pageId, setPageId] = useState("");

    async function handleCreatePage() {

        const token = getCookie("token")
        if (!token) return

        const newPageId = pageId;
        if (!newPageId ) {
            customAlert("لطفا ابتدا فیلد ها را به درستی پر کنید")
            return
        }

        const reqBody = addingWhat === "type" ? {
            id: 0, // doesn't need to be filled just pass 0
            name: newPageId, // main data to pass
            pageId: 0 // doesn't need to be filled just pass 0
        } : {
            id: 0,
            categoryName: newPageId,
            pageTypeId: 1
        }
        
        setIsAdding(() => true)
        try {
            const req = await fetch(`${BASE_URL}/api/${addingWhat === "type" ? "PageType/CreatePageType" : "PageTypeCategory/CreatePageTypeCategory"}`, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json",
                    "Autherization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText)
            }

            const res = await req.json();
            customAlert(`
                ${addingWhat === "type" ? "نوع پیج" : "دسته بندی"} با موفقیت اضافه شد
                `, "success")
        } catch (error) {
            console.error(error)
        }

        reloadAll()
        setIsAdding(false)
    }


    return ( 
        <div className="fixed top-0 right-0 bottom-0 left-0" onWheelCapture={event => event.stopPropagation()} onClick={handleCloseAdinge}>
            <div className="p-2 py-10 flex flex-col items-end gap-5 w-screen max-w-96 shadow-2xl shadow-gray-500 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black" onClick={event => event.stopPropagation()}>
                <div className="text-2xl font-extrabold">ایجاد {addingWhat === "type" ? "نوع پیج" : "دسته بندی"}</div>
                <TextField label={addingWhat === "type" ? "نوع پیج" : "دسته بندی پیج"} sx={{width: "100%"}} value={pageId} onChange={e => setPageId(event.target.value)} />
                <Button 
                    onClick={handleCreatePage}
                    sx={{width: "100%"}} 
                    disabled={isAdding}
                    variant="contained"
                >
                    {
                        isAdding 
                        ? <span>در حال ایجاد</span>
                        : <span>ایجاد دسته بندی جدید</span>
                    }
                </Button>
            </div>
        </div>
     );
}

export default AddType;