import { useEffect, useState } from "react";
import { getPublishers } from "../../functions";
import CircleGradient from "../loadings/CircleGradient";
import { Instagram, Telegram } from "@mui/icons-material";
import styles from "./PublishersList.module.css";

function PublishersList({ campaignId, type, handleSelect, selectedPub }) {
    const [pubslihers, setPublishers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        init()
        console.log(selectedPub)
        console.log(pubslihers)
    }, [campaignId, type]);

    async function init() {
        setPublishers(() => [])
        setIsLoading(true);
        const tmpPubs = await getPublishers(campaignId, type);
        console.log(tmpPubs)
        setPublishers(() => tmpPubs);
        setIsLoading(false);
    }

    return ( 
        <>
             <div className={`flex-1 flex flex-col bg-gray-900 border min-w-96 h-96 rounded-lg overflow-hidden ${type === "telegram" ? "border-telegram" : "border-primary"}`}>
                <div className={`w-full text-right pr-2 pt-1 pb-1 ${type === "telegram" ? "bg-telegram" : "bg-gradient-to-r from-primary-start to-primary-end"}`}>لطفا یک پابلیشر انتخاب کنید</div>
                    <div className={`flex flex-1 flex-col gap-2 p-2 overflow-y-scroll ${styles.list}`}>
                        { 
                        isLoading 
                        ? 
                            <div className="w-full h-full flex items-center justify-center">
                                <CircleGradient /> 
                            </div>
                        : pubslihers.length ? 
                        pubslihers.map(pub => 
                                <div className={`flex items-center gap-0 p-2 text-left w-full rounded-lg border-0 transition-all duration-100 cursor-pointer hover:gap-2 ${type === "instagram" ? "bg-primary border-l-primary" : "bg-telegram border-l-telegram"} ${selectedPub?.id == pub.id ? "bg-white text-black rounded-l-none border-l-8" : ""} ${styles.publisher}`} onClick={() => handleSelect(pub)}>
                                    <div className="p-2">
                                    {
                                        type === "instagram" 
                                        ? <Instagram /> 
                                        : <Telegram />
                                    }
                                    </div>
                                    {pub.platformid}
                                </div>
                            )
                            : <div className="w-full h-full flex itemc-center justify-center">پابلیشری یافت نشد</div>
                        } 
                    </div>
                </div>    
        </>
     );
}

export default PublishersList;