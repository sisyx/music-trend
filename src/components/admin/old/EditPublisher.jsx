import { useEffect, useState } from "react";
import styles from "./EditPublisher.module.css";
import { Button, TextField } from "@mui/material";
import { createPublisher, customAlert } from "../../functions";
import { englishAlphabetLC } from "../../constatnts";
import PublishersList from "./PublishersList";
import EditPublisherForm from "./EditPublisherForm";

function EditPublisher({ campaings }) {
    const [telName, settelName] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [selectedPub, setSelectedPub] = useState(undefined);

    const selectedCamp = campaings?.find(camp => camp.selected === true);
    const type = selectedCamp?.type;

    useEffect(() => {
        setSelectedPub(undefined);
    }, [selectedCamp]);

    function handleSelect(publisher) {
        setSelectedPub(() => publisher)
    }

    return ( 
        <div className={`${styles.container}`}>
            <div className={styles.telegram}>
                {
                    !!selectedCamp 
                    ? <div className="flex">
                        <PublishersList type={type} campaignId={selectedCamp.id} handleSelect={handleSelect} selectedPub={selectedPub} />
                        {
                            selectedPub 
                            ? <EditPublisherForm selectedPub={selectedPub} type={type} />
                            : <div className="w-96 h-96 flex items-center justify-center">
                                لطفا ابتدا یک پابلیشر انتخاب کنید
                            </div> 
                        }
                    </div> 
                    : "لطفا ابتدا یک کمپین برای ویرایش کردن پابلیشر انتخاب کنید"
                }
            </div>
        </div>
     );
}

export default EditPublisher;