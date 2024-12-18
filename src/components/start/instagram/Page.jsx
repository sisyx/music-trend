import { toPersianUnits } from "../../../utils/numbers";
import { useDispatch, useSelector } from "react-redux";
import { addPrice, removePrice } from "../../../Redux/core/cart/cartSlice";
import { USER_LEVELS } from "../../../constatnts";
import { getRole } from "../../../utils/auth";
import { IconButton, Tooltip } from "@mui/material";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";

function Page({ viewMode = "large", index = 0, pageId = "", prices= {}, followers = 0, followings = 0, name = "", currentPrice = "" }) {
    const dispatch = useDispatch();
    const priceAndPagesPair = useSelector((state) => state.cart.priceAndPagesPair);
    const isInPages = priceAndPagesPair.find(page => page.page === pageId && !!page.prices.length && !!page.prices?.find(price => price?.title === currentPrice));
    const role = getRole();
    const priceProperty = role ? USER_LEVELS.find(ulevel => ulevel.value === role).priceProperty : USER_LEVELS[0].priceProperty;
    const cost = prices.find(price => price.title === currentPrice)

    function handleClickCard() {
        if (isInPages) {
            dispatch(removePrice({page: pageId, price: {title: cost.title, cost: cost[priceProperty]}}));
        } else {
            dispatch(addPrice({page: pageId, price: {title: cost.title, cost: cost[priceProperty]}}));
        }
    }
    
    return ( 
        <>
        {
            viewMode !== "small" ? 
            <div data-aos="scale-up" onClick={handleClickCard} className={`relative flex flex-col items-center gap-2 border border-telegram cursor-pointer ${isInPages ? "bg-telegram bg-opacity-50 hover:bg-telegram hover:bg-opacity-60" : "bg-white hover:bg-telegram hover:bg-opacity-30" }`}>
                <IconButton sx={{position: "absolute", left: "0", top: "0", fontSize: viewMode === "large" ? "2rem" : "1rem", transition: "all 150ms"}} onClick={e => e.stopPropagation()}>
                    <FaHeartCirclePlus />
                </IconButton>
                <div>
                    <img className="transition-all duration-200" src="/logo.png" alt="Profile.png" />
                </div>
                <div className="flex flex-col items-center">
                    <span className="pt_serif_regular">{pageId}</span>
                    <span>{name}</span>
                </div>
            </div> : 
            <div data-aos="scale-up" onClick={handleClickCard} className={`flex items-center justify-between gap-2 border border-telegram cursor-pointer ${isInPages ? "bg-telegram bg-opacity-50 hover:bg-telegram hover:bg-opacity-60" : "bg-white hover:bg-telegram hover:bg-opacity-30" }`}>
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Profile.png" className="w-14" />
                        <span>{pageId}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>لیونل مسی</span>
                        <CiUser />
                    </div>
                    <Tooltip title="تعداد فالورها">
                        <div className="flex items-center gap-2">
                            {followers}
                            <MdPeople />
                        </div>
                    </Tooltip>
                    <Tooltip title="نرخ مشارکت">
                        <div className="flex items-center gap-2">
                            {Math.floor(Math.random() * 30)}%
                            <GiProgression />
                        </div>
                    </Tooltip>
                </div>
                <div className="flex items-center">
                    <IconButton onClick={e => e.stopPropagation()}>
                        <FaHeartCirclePlus />
                    </IconButton>
                </div>
            </div>
        }
        </>
     );
}

export default Page;