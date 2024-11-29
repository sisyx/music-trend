import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { customAlert } from "../../../functions";
import { getCookie } from "../../../lib/cacheAndStorage";
import { BASE_URL } from "../../../config/config";
import UploadShots from "./UploadShots";

function EditPublisher({ campid, page = undefined, isEdtingPub = false, handleClosePubEdit = () => {return} }) {
    const [pl, spl] = useState(page?.postLikes) // post likes
    const [pc, spc] = useState(page?.postComments) // post comment
    const [pv, spv] = useState(page?.postViews) // post view
    const [pi, spi] = useState(page?.postImpertion) // post impertion
    const [sv, ssv] = useState(page?.storyViews) // story view
    const [si, ssi] = useState(page?.storyImpertion) // story impertion
    const [link, setlink] = useState(page?.postLink)
    const [id, _sid] = useState(page?.page.id);
    
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        spl(page.postLikes);
        spc(page.postComments);
        spv(page.postViews);
        spi(page.postImpertion);
        ssv(page.storyViews);
        ssi(page.storyImpertion);
        setlink(page.link);
    }, [page]);

    async function updatePublisher(newData) {
        const token = getCookie("token")
        if (!campid || !page.page.id || !newData || !token ) return

        // return
        setIsSending(() => true)
        try {
            const req = await fetch(`${BASE_URL}/api/Pages/UpdatePageContent?campaignId=${campid}&pageId=${page.page.id}`, {
                method: "POST",
                body: JSON.stringify(newData),
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (!req.ok) {
                throw new Error("اعمال تغییرات ناموفق بود")
            }

            const res = await req.text();
            customAlert(res);
        } catch (error) {
            customAlert(error.message);
        }

        setIsSending(() => false)
    }

    function handleClickSend() {
        const newData = {
            "description": page.description,
            "postLikes": pl,
            "postLink": link,
            "postComments": pc,
            "postViews": pv,
            "postImpertion": pi,
            "storyViews": sv,
            "storyImpertion": si
        }

        updatePublisher(newData);
    }

    return ( 
        <div className={`fixed top-0 right-0 bottom-0 left-0 z-50 cursor-default transition-all duration-300 ${isEdtingPub ? "scale-x-1" : "scale-x-0"}`} onClick={handleClosePubEdit}>
            {/* page details */}
            <div className={`p-2 pt-10 flex flex-col items-center gap-5 w-screen max-w-96 shadow-xl shadow-gray-500 border rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black cursor-default transition-all duration-300 ${isEdtingPub ? "scale-x-1" : "scale-x-0"}`} onClick={event => event.stopPropagation()}>
                {page?.pageId}

                {/* edit form */}
                <div className="flex flex-col w-full gap-4">
                    <UploadShots campId={campid} pubId={id} />
                    <TextField label="لایک پست" type="number" value={pl} onChange={e => spl(e.target.value)} />
                    <TextField label="کامنت پست" type="number" value={pc} onChange={e => spc(e.target.value)} />
                    <TextField label="بازدید پست" type="number" value={pv} onChange={e => spv(e.target.value)} />
                    <TextField label="ایمپرشن پست" type="number" value={pi} onChange={e => spi(e.target.value)} />
                    <TextField label="بازدید استوری" type="number" value={sv} onChange={e => ssv(e.target.value)} />
                    <TextField label="ایمپرشن استوری" type="number" value={si} onChange={e => ssi(e.target.value)} />
                    <TextField label="لینک پست جدید" type="text" value={link} onChange={e => setlink(e.target.value)} />
                    <Button disabled={isSending} onClick={handleClickSend}>
                        {
                            isSending ?
                            <span>در حال ارسال</span>
                            : <span>
                                اعمال تغییرات
                            </span>
                        }
                    </Button>
                </div>
                <Button onClick={handleClosePubEdit} disabled={isSending}>بازگشت</Button>
            </div>
        </div>
     );
}

export default EditPublisher;