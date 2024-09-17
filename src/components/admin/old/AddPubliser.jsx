import { useState } from "react";
import styles from "./AddPublisher.module.css";
import { Button, TextField } from "@mui/material";
import { createPublisher, customAlert } from "../../functions";
import { englishAlphabetLC } from "../../constatnts";

function AddPublisher({ campaings }) {
    const [telName, settelName] = useState('');
    const [isSending, setIsSending] = useState(false);
    
    async function handleAddTel() {
        if (!telName) {
            customAlert("لطفا ابتدا آیدی را وارد کنید")
            return
        }
        setIsSending(true)
        const addingcamp = await createPublisher(telName, type, selectedCamp.id);
        customAlert(addingcamp);
        settelName(cur => "");
        setIsSending(false)
    }

    const selectedCamp = campaings?.find(camp => camp.selected === true);
    const type = selectedCamp?.type;

    return ( 
        <div className={`${styles.container}`}>
            <div className={styles.telegram}>
                {
                    !!selectedCamp 
                    ? <div className={`bg-gradient-to-r from-telegram to-red-500 ${styles.telegram_form}`}>
                        <h1 className="text-2xl font-bold text-center">اضافه کردن پابلیشر {type === "instagram" ? "اینستاگرام" : "تلگرام"}</h1>
                        <div dir="rtl">
                            <span>کمپین هدف: </span>
                            <span dir={englishAlphabetLC.includes(selectedCamp.name.charAt(0)) ? "ltr" : "rtl"}>{selectedCamp.name}</span>

                        </div>
                        <TextField variant="standard" label={type === "instagram" ? "Page Id" : "Channel Id"} value={telName} onChange={e => settelName(e.target.value)} />
                        <Button type="SUBMIT" variant="contained" onClick={handleAddTel} disabled={isSending}>
                            {
                                isSending
                                ? "در حال افزدون،"
                                : "افزودن پابلیشر"
                            }
                        </Button>
                    </div>
                    : "لطفا ابتدا یک کمپین برای اضافه کردن پابلیشر انتخاب کنید"
                }
            </div>
        </div>
     );
}

export default AddPublisher;