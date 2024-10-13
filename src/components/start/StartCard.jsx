import { Button } from "@mui/material";
import { toKFormat, toPercentFormat } from "../../funcs";
import styles from './StartCard.module.css';
import GlassyButton from "../GlassyButton"
import { imagebase } from "../../constatnts";
function StartCard({ setindetails, influencer, index = 0, selectInf }) {
    return ( 
        <div className={`relative w-full border flex flex-col gap-7 justify-between bg-transparent ${styles.card}`} style={{
            animationDelay: `${index * 150}ms`,
        }}>
            {/* top line */}
            <div className="w-full absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-start to-telegram "></div>
            {/* top */}
            <div className="text-black flex justify-between items-center p-4">
                {/* details */}
                <div className="flex justify-evenly w-full">
                    <div className="flex flex-col">
                        <span className="font-bold">نرخ مشارکت</span>
                        <span>{toPercentFormat(influencer.engagement)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">فالورها</span>
                        <span>{toKFormat(influencer.followesrs)}</span>
                    </div>
                </div>
                {/* image */}
                <div className="flex flex-col  items-center gap-2">
                    <div className="w-20 aspect-square rounded-full overflow-hidden border-primary border-2">
                        <img src={influencer.imgUrl || "/logo.png"} alt="influencer image" className="aspect-square object-cover object-center" />
                    </div>
                        <span>{influencer.pageId}</span>
                </div>
            </div>
            <div className="text-right p-3 min-h-24 vazirmatn">
                <div className="text-gray-500">
                    توضیحات
                </div>
                <div className="text-black">
                    {influencer.description}
                </div>
            </div>
            <div className="w-full bg-red-500">
                <GlassyButton 
                    to={location.href}
                    className="w-full rounded-sm flex justify-center"
                    onClick={() => selectInf(influencer)} 
                >
                    جزییات بیشتر
                </GlassyButton>
            </div>

            
        </div>
     );
}

export default StartCard;