import { Button } from "@mui/material";
import { toKFormat, toPercentFormat } from "../../funcs";
import styles from './StartCard.module.css';

function StartCard({ setindetails, influencer, index = 0, selectInf }) {
    return ( 
        <div className={`relative w-full border border-telegram flex flex-col gap-7 justify-between bg-transparent ${styles.card}`} style={{
            animationDelay: `${index * 150}ms`,
        }}>
            {/* top line */}
            <div className="w-full absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-start to-primary-end "></div>
            {/* top */}
            <div className="text-black flex justify-between items-end p-4">
                {/* details */}
                <div className="flex justify-evenly w-full">
                    <div className="flex flex-col">
                        <span className="font-bold">نرخ مشارکت</span>
                        <span>{toPercentFormat(influencer.participateRate)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">فالورها</span>
                        <span>{toKFormat(influencer.followers)}</span>
                    </div>
                </div>
                {/* image */}
                <div className="w-20 rounded-full overflow-hidden border-primary border-2">
                    <img src="/src/assets/images/inf1.png" alt="influencer image" />
                </div>
            </div>
            <div className="text-right p-3 min-h-24 vazirmatn">
                <div className="text-gray-500">
                    توضیحات
                </div>
                <div className="text-black">
                    این اینفلوینسر ماهر با توجه به سابقه کاری ای که دارند میتوانند گزینه ی مناسبی برای انتخاب شما باشند.
                </div>
            </div>
            <div className="w-full">
                <button
                    onClick={() => selectInf(influencer)} 
                    className="w-full text-primary bg-white relative group pt-1 pb-1 border border-primary"
                >
                    <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full  group-hover:-left-full"></span>
                    مشاهده جزییات
                </button>
            </div>

            
        </div>
     );
}

export default StartCard;