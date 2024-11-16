import { toKFormat, toPercentFormat } from "../../utils/numbers";
import styles from './StartCard.module.css';
import { useSearchParams } from "react-router-dom";
import { TAARIFS, USER_LEVELS } from "../../constatnts";
import { getCookie } from "../../lib/cacheAndStorage";
import { TfiStatsUp } from "react-icons/tfi";
import { RiUserFollowFill } from "react-icons/ri";
import { Button } from "@mui/material";
import { toPersianUnits } from "../../utils/numbers";

function StartCard({ influencer, index = 0, addPriceToCosts = () => {return}, costs = [] }) {

    const [params, _setParams] = useSearchParams();
    const thisTaarif = influencer.pricePages.find(taarif => taarif.name === TAARIFS[params.get("ptid") - 1]?.text);
    const role = getCookie("role");
    const isThisPageSelected = costs.find(cost => cost.pageId === influencer.pageId)


    function addThisPriceToCosts() {
        addPriceToCosts({
            pageNId: influencer.id, 
            pageId: influencer.pageId,
            pageImg: influencer.imgUrl,
            ...thisTaarif
        })
    }

    return ( 
        <div className={`relative w-full border flex flex-col justify-between bg-transparent ${styles.card}`} style={{
            animationDelay: `${index * 150}ms`,
        }}>
            {/* top line */}
            <div className="w-full absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-start to-telegram "></div>
            {/* top */}
            <div className="text-black flex justify-between items-center gap-2 md:gap-4 p-1 md:p-4 pb-0">
                {/* image */}
                <div className="flex flex-col  items-center gap-2">
                    <div className="w-14 md:w-20 aspect-square rounded-full overflow-hidden border-primary border-2">
                        <img src={influencer.imgUrl || "/logo.png"} alt="influencer image" className="aspect-square object-cover object-center" />
                    </div>
                </div>
                {/* details */}
                <div className="flex flex-col items-start w-full">
                    <span className="vazir mb-2 text-base md:text-xl">{influencer.showName}</span>
                    <div className="flex gap-2 text-sm md:text-base">
                        <RiUserFollowFill />
                        <span>{toKFormat(influencer.followesrs)}</span>
                    </div>
                    <div className="flex gap-2 text-sm md:text-base">
                        <TfiStatsUp />
                        <span>{toPercentFormat(influencer.engagement)}</span>
                    </div>
                </div>
                <div className="flex flex-col text-sm md:text-base" dir="rtl">
                    <span>قیمت:</span>
                    <span className="text-black flex-nowrap text-nowrap flex gap-2 items-center" dir="rtl">
                        <span>
                            {
                                !!thisTaarif ?
                                toPersianUnits(thisTaarif[USER_LEVELS.find(level => level.value === role).priceProperty])
                                : ""
                            }
                        </span>
                        <span>
                            تومان
                        </span>
                    </span>
                </div>
            </div>
            <Button onClick={!isThisPageSelected ? addThisPriceToCosts : () => {return}} sx={isThisPageSelected ? {} : {}} color={isThisPageSelected ? "success" : "primary"} variant={isThisPageSelected ? "contained" : "text"}>
                {
                    isThisPageSelected ? "اضافه شد" : "افزودن"
                }
            </Button>
        </div>
     );
}

export default StartCard;