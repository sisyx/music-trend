import { useRef, useState } from "react";
import styles from "./AddCampaign.module.css";
import { Button, TextField } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createCampaign, customAlert, getAllCamps } from "../../functions";

function AddCampaign({ dispath }) {
    const [type, setType] = useState("instagram");
    const [telName, settelName] = useState('');
    const [isSending, setIsSending] = useState(false);

    async function handleAddTel() {
        if (!telName) return
        setIsSending(true)
        const addingcamp = await createCampaign(telName, type);
        if (addingcamp.id) {
            customAlert(`
                کمپین با موفقیت اضافه شد
                `)
        } else{
            customAlert(addingcamp);
        }
        const tmpCamps = await getAllCamps();
        dispath({type: "set camps", payload: {camps: tmpCamps}})
        settelName(_cur => "");
        setIsSending(false)
    }


    return ( 
        <div className={styles.container}>
            <div className={styles.telegram}>
                <div className={`bg-gradient-to-r from-telegram to-red-500 ${styles.telegram_form}`}>
                    <h1 className="text-2xl font-bold text-center">افزودن کمپین {type === "instagram" ? "اینستاگرام" : "تلگرام"}</h1>
                    <TextField variant="standard" label="Campaign Name" value={telName} onChange={e => settelName(e.target.value)} />
                    <Button type="SUBMIT" variant="contained" onClick={handleAddTel} disabled={isSending}>
                        {
                            isSending 
                            ? "در حال افزودن کمپین"
                            : "افزودن کمپین"
                        }
                    </Button>
                    <div className={styles.type_selector}>
                        <Button 
                            startIcon={<TelegramIcon />}
                            onClick={() => setType("telegram")} variant="contained" sx={type === "telegram" ? {backgroundColor: "#222", outline: "3px #ddd solid",  "&:hover": {backgroundColor: "#333"}} : {}} className={`${styles.type} ${type === "telegram" ? styles.selected : ""}`}>Telegram</Button>
                        <Button 
                            startIcon={<InstagramIcon />}
                            onClick={() => setType("instagram")} variant="contained" sx={type === "instagram" ? {backgroundColor: "#222", outline: "3px #ddd solid", "&:hover": {backgroundColor: "#333"}} : {background: "linear-gradient(#833AB4, #C13584)"}}className={`${styles.type} ${type === "instagram" ? styles.selected : ""}`}>Instagram</Button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AddCampaign;