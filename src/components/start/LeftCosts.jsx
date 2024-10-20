import styles from "./Left.module.css";
import { userLevels } from "../../constatnts";
import { getCookie, toPersianUnits } from '../../functions';

function LeftCosts({costs}) {
    const role = getCookie("role");
    const priceProperty = userLevels.find(ulevel => ulevel.value === role)?.priceProperty || "normalprice";


    return ( 
        <>
        {
            costs.length ?
            <>
                {costs.map(cost => 
                    <div className={`flex flex-col items-center rounded-xl w-full bg-gray-200 hover:bg-gray-300 cursor-pointer gap-3 p-4 ${styles.cart_influ}`}>
                        <div className="flex items-start gap-2">
                            <div className="flex flex-col items-end justify-end gap-3">
                                <span dir="rtl" className="text-xl font-bold">
                                    {cost.name}
                                </span>
                                {/* prices count */}
                                <div dir="rtl">
                                    تعداد تعرفه های انتخاب شده: <span>1</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <span>
                                    <img className={`max-w-16 w-16 rounded-full overflow-hidden border-2 border-primary aspect-square ${styles.cart_influ_img}`} src={cost.pageImg || "/logo.png"} alt="Profile Photo" />
                                </span>
                                {/* title */}
                                <span>
                                    {cost.pageId}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2" dir="rtl">
                                {/* total price */}
                                <span>
                                    قیمت کل:
                                </span>
                                <span className="" dir="rtl">
                                    {
                                        toPersianUnits(cost[priceProperty])
                                    }
                                    <span>
                                        تومان
                                    </span>
                                </span>
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
                                    toPersianUnits(costs.reduce((acc, cur) => acc += cur[priceProperty], 0))
                                }
                            </span>
                            <span>تومان</span>
                        </span>
                    </div>

                </>
            : <span className="text-gray-500">
                سبد خرید شما خالی است
            </span>
        }
        </>
     );
}

export default LeftCosts;