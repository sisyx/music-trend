import { toPersianUnits } from "../../../utils/numbers";
import { useDispatch, useSelector } from "react-redux";
import { addPrice, removePrice } from "../../../Redux/core/cart/telegram_cart/telegramCartSlice";
import { USER_LEVELS } from "../../../constatnts";
import { getRole } from "../../../utils/auth";

function Channel({ viewMode = "large", index = 0, channelId = "", prices= {}, followers = 0, name = "", currentPrice = "" }) {
    const dispatch = useDispatch();
    const priceAndChannelsPair = useSelector((state) => state.telegramCart.priceAndChannelsPair);
    const isInPages = priceAndChannelsPair.find(channel => channel.channel === channelId && !!channel.prices.length && !!channel.prices?.find(price => price?.title === currentPrice));
    const role = getRole();
    const priceProperty = USER_LEVELS.find(ulevel => ulevel.value === role).priceProperty;
    const cost = prices.find(price => price.title === currentPrice)

    function handleClickCard() {
        if (isInPages) {
            dispatch(removePrice({channel: channelId, price: {title: cost.title, cost: cost[priceProperty]}}));
        } else {
            dispatch(addPrice({channel: channelId, price: {title: cost.title, cost: cost[priceProperty]}}));
        }
    }
    
    return ( 
        <>
        {
            viewMode !== "small" ? 
            <div onClick={handleClickCard} className={`flex flex-col items-center gap-2 border border-telegram cursor-pointer ${isInPages ? "bg-telegram bg-opacity-50 hover:bg-telegram hover:bg-opacity-60" : "bg-white hover:bg-telegram hover:bg-opacity-30" }`}>
                <div className="">
                    <img src="/logo.png" alt="Profile.png" />
                </div>
                <div className="flex flex-col items-center">
                    <span className="pt_serif_regular">{channelId}</span>
                    <span>{name}</span>
                </div>
                <div className="text-sm flex flex-col items-center">
                    <div dir="rtl" className="flex items-center gap-1">
                        <span>{toPersianUnits(cost[priceProperty])}</span>
                        <span>تومان</span>
                    </div>
                    <span>{currentPrice}</span>
                </div>
            </div> : 
            <div onClick={handleClickCard} className={`flex items-center justify-between px-4 gap-2 border border-telegram cursor-pointer ${isInPages ? "bg-telegram bg-opacity-50 hover:bg-telegram hover:bg-opacity-60" : "bg-white hover:bg-telegram hover:bg-opacity-30" }`}>
                <div className="flex items-center">
                    <div className="">
                        <img src="/logo.png" alt="Profile.png" className="w-14" />
                    </div>
                    <span>{channelId}</span>
                </div>
                <div className="text-sm flex items-center gap-4">
                    <div>
                        <span>{toPersianUnits(cost[priceProperty])}</span>
                        <span>تومان</span>
                    </div>
                    <span>{currentPrice}</span>
                </div>
            </div>
        }
        </>
     );
}

export default Channel;