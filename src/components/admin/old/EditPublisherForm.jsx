import { useEffect, useState, useRef } from "react";
import styles from "./EditPublisherForm.module.css";
import { Button, IconButton, TextField } from "@mui/material";
import { customAlert, updatePublisher } from "../../functions";


function EditPublisherForm({ selectedPub, type = "instagram" }) {

    const [isLoading, setIsLoading] = useState(false);
    const [telTelId, setTelTelId] = useState('');
    const [telTelView, setTelTelView] = useState("");
    const [insPI, setInsPI] = useState("");
    const [insPL, setInsPL] = useState("");
    const [insPC, setInsPC] = useState("");
    const [insSI, setInsSI] = useState("");
    const [insPR, setInsPR] = useState("");
    const [insSV, setInsSV] = useState("");
    const [insPV, setInsPV] = useState("");
    const [insStC, setInsStC] = useState("");
    const [insLastAdLink, setInsLastAdLink] = useState("");

    useEffect(() => {
        setInsLastAdLink("");
        setInsPI("");
        setInsPR("");
        setInsPV("");
        setInsSI("");
        setInsSV("");
        setInsStC("");
        setTelTelId("");
        setTelTelView("");
        setInsPL("");
        setInsPC("");
    }, [selectedPub]);

    async function handleAddTel() {
        if (telTelId && telTelView) {
            setIsLoading(true);
            const newData = {
                id: selectedPub.id,
                postViews: telTelView ? telTelView : selectedPub.postViews,
                postLink: telTelId ? telTelId : selectedPub.postLink,
                channelId: selectedPub.channelId,
                campaignId: selectedPub.campaignId
            };

            await updatePublisher(selectedPub.id, newData, "telegram")
            customAlert("پابلیشر با موفقیت آپدیت شد")
            resetFields()
        } else {
            customAlert("لطفا حداقل یک ");
        }
    }

    function resetFields() {
        setInsLastAdLink("");
        setInsPI("");
        setInsPR("");
        setInsPV("");
        setInsSI("");
        setInsSV("");
        setInsStC("");
        setTelTelId("");
        setTelTelView("");
        setInsPL("");
        setInsPC("");
        setIsLoading(false);
    }

    async function handleAddIns() {
        if (insPI || insPR || insPV || insSV || insSI || insLastAdLink) {
            setIsLoading(true)
            const newData = {
                "id": 0,
                "pageId": selectedPub.pageId,
                "postViews": insPV ? insPV : selectedPub.postViews,
                "postLink": insLastAdLink ? insLastAdLink : selectedPub.postLink,
                "postLikes": insPL ? insPL : selectedPub.postLikes,
                "postComments": insPC ? insPC : selectedPub.postComments,
                "postImpertion": insPI ? insPI : selectedPub.postImpertion,
                "storyViews": insSV ? insSV : selectedPub.storyViews,
                "storyImpertion": insSI ? insSI : selectedPub.storyImpertion,
                "campaignId": selectedPub.campaignId
            }
            await updatePublisher(selectedPub.id, newData, type);
            customAlert("پابلیشر با موفقیت آپدیت شد")
            resetFields()
        } else {
            customAlert("Please Fill a Input")
        }
    }


    return ( 
        <div className={styles.container}>
            {   selectedPub.id ? 
                type === "telegram" ?
                    <div className={styles.telegram}>
                        <div className={`bg-gradient-to-r from-telegram to-red-500 ${styles.telegram_form}`}>
                            <h1>تغییر اطلاعات پابلیشر</h1>
                            <TextField sx={{width: "100%"}} variant="standard" label="Post Link" value={telTelId} onChange={e => setTelTelId(e.target.value)} />
                            <TextField sx={{width: "100%"}} variant="standard" label="Views" value={telTelView} onChange={e => setTelTelView(e.target.value)} />
                                <Button 
                                type="SUBMIT" 
                                disabled={isLoading}
                                onClick={handleAddTel}
                                sx={{width: "100%"}}
                                variant="contained"
                                >
                                {
                                    isLoading ?
                                    <span>
                                        Loading
                                    </span> 
                                    : <span>
                                        اعمال تغییرات
                                    </span>
                                }
                            </Button>
                        <div>
                        </div>
                        </div>
                    </div>
                : <div className={styles.instagram}>
                    <div className={`bg-gradient-to-r from-telegram to-red-500 ${styles.instagram_form}`}>
                        <h1>Edit Instagram Publisher</h1>
                        <TextField variant="standard" placeholder="New Ad Link" value={insLastAdLink} onChange={e => setInsLastAdLink(e.target.value)} />
                        <div className={styles.two_cols_container}>
                            <div className={styles.col}>
                                {/* <TextField variant="standard" placeholder="New Story Imp." value={insSI} onChange={e => setInsSI(e.target.value)} /> */}
                                {/* <TextField variant="standard" placeholder="New Story View" value={insSV} onChange={e => setInsSV(e.target.value)} /> */}
                                <TextField variant="standard" placeholder="Post Imp." value={insPI} onChange={e => setInsPI(e.target.value)} />
                                {/* <TextField variant="standard" placeholder="Post Reach" value={insPR} onChange={e => setInsPR(e.target.value)} /> */}
                                <TextField variant="standard" placeholder="Post Views" value={insPV} onChange={e => setInsPV(e.target.value)} />
                                <TextField variant="standard" placeholder="Comments" value={insPC} onChange={e => setInsPC(e.target.value)} />
                            </div>
                            <div className={styles.col}>
                                <TextField variant="standard" placeholder="Story Imp." value={insSI} onChange={e => setInsSI(e.target.value)} />
                                <TextField variant="standard" placeholder="Story View" value={insSV} onChange={e => setInsSV(e.target.value)} />
                                {/* <TextField variant="standard" placeholder="Post Imp." value={insPI ? insPI : selectedPub.postmperssion} onChange={e => setInsPI(e.target.value)} /> */}
                                {/* <TextField variant="standard" placeholder="Post View" value={insPV} onChange={e => setInsPV(e.target.value)} /> */}
                                {/* <TextField variant="standard" placeholder="Story Link Click" value={insStC} onChange={e => setInsStC(e.target.value)} /> */}
                                <TextField variant="standard" placeholder="Likes" value={insPL} onChange={e => setInsPL(e.target.value)} />
                            </div>
                        </div>
                        <Button 
                            type="SUBMIT" 
                            onClick={handleAddIns}
                            disabled={isLoading}
                        >
                            {
                                isLoading ? 
                                <span>Loading</span>
                                : <span>
                                    Update Publisher
                                </span>
                            }
                        </Button>
                    </div>
                </div> : ""
            }
            {
                !selectedPub.id && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", fontWeight: "bold"}}>please select a publisher to start</div> 
            }
        </div>
     );
}

export default EditPublisherForm;