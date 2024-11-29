import { toPersianUnits } from "../../../utils/numbers";
import { useDispatch, useSelector } from "react-redux";
import { addPrice, removePrice } from "../../../Redux/core/cart/cartSlice";
import { USER_LEVELS } from "../../../constatnts";
import { getRole } from "../../../utils/auth";

function Page({ viewMode = "large", index = 0, pageId = "", prices= {}, followers = 0, name = "", currentPrice = "" }) {
    const dispatch = useDispatch();
    const priceAndPagesPair = useSelector((state) => state.cart.priceAndPagesPair);
    const isInPages = priceAndPagesPair.find(page => page.page === pageId && !!page.prices.length && !!page.prices?.find(price => price?.title === currentPrice));
    const role = getRole();
    const priceProperty = USER_LEVELS.find(ulevel => ulevel.value === role).priceProperty;
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
            <div onClick={handleClickCard} className={`flex flex-col items-center gap-2 border border-telegram cursor-pointer ${isInPages ? "bg-telegram bg-opacity-50 hover:bg-telegram hover:bg-opacity-60" : "bg-white hover:bg-telegram hover:bg-opacity-30" }`}>
                <div className="">
                    <img src="/logo.png" alt="Profile.png" />
                </div>
                <div className="flex flex-col items-center">
                    <span className="pt_serif_regular">{pageId}</span>
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
                    <span>{pageId}</span>
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

export default Page;