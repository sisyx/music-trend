import styles from "../Left.module.css";
import { USER_LEVELS } from "@/constatnts";
import { getCookie } from "@/lib/cacheAndStorage";
import { IconButton } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { toPersianUnits } from "@/utils/numbers";
import { useDispatch } from "react-redux";
import { removePage, removePrice } from "@/Redux/core/cart/cartSlice";

function InstagarmLeftCosts({ costs }) {
    const role = getCookie("role");
    const priceProperty = USER_LEVELS.find(ulevel => ulevel.value === role)?.priceProperty || "normalprice";
    const dispatch = useDispatch();

    return ( 
        <>
        {
            costs.length ?
            <>
                {costs.map(cost =>
                    <div className={`relative flex flex-col items-center rounded-md w-full bg-gray-200 hover:bg-gray-300 cursor-pointer md:gap-3 ${styles.cart_influ}`}>
                        <IconButton onClick={() => dispatch(removePage(cost.page))} sx={{position: "absolute", top: "0rem", left: "0rem"}}>
                            {/* <Delete sx={{color: "#a00"}} /> */}
                            <IoCloseSharp />
                        </IconButton>
                        <div className="flex items-start justify-end w-full gap-2 p-2">
                            <div className="flex flex-col items-end justify-end md:gap-0">
                                <span className="text-base font-bold pt_serif_regular">
                                    {cost.page}
                                </span>
                                <span dir="rtl" className="text-base">
                                    {cost.page}
                                </span>
                                {/* prices count */}
                                <div dir="rtl" className="flex items-center gap-2 text-nowrap">
                                    <span>{cost.prices.length} تعرفه</span>
                                    <span className="" dir="rtl">
                                    {
                                        // toPersianUnits(cost[priceProperty])
                                        toPersianUnits(cost.prices.reduce((acc, price) => acc += price.cost, 0))
                                    }
                                    <span>
                                        تومان
                                    </span>
                                </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <span>
                                    <img className={`max-w-16 w-16 rounded-full overflow-hidden aspect-square ${styles.cart_influ_img}`} src={cost?.pageImg || "/logo.png"} alt="Profile Photo" />
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                    <div className="w-full flex text-white bg-primary py-2 px-4 rounded-xl" dir="rtl">
                        <span>
                            قیمت کل: 
                        </span>
                        <span className="flex gap-2">
                            <span>
                                {
                                    // toPersianUnits(costs.reduce((acc, cur) => acc += cur[priceProperty], 0))
                                    toPersianUnits(costs.reduce((acc, cur) => acc += 15000, 0))
                                }
                            </span>
                            <span>تومان</span>
                        </span>
                    </div>

                </>
            : <span className="text-gray-500 text-sm md:text-base">
                سبد خرید شما خالی است
            </span>
        }
        </>
     );
}

export default InstagarmLeftCosts;