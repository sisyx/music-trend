import { Button } from "@mui/material";
import styles from "./Left.module.css";
import { getCookie } from '../../functions';
import { userLevels } from "../../constatnts";

function Left({ selectedInfs, setShowCampaignSelect }) {

    const role = getCookie("role");
    const priceProperty = userLevels.find(ulevel => ulevel.value === role)?.priceProperty || "normalprice";

    return ( 
        <div className="w-72 shadow-md p-2"
                        // style={{boxShadow: "5px 5px 5px"}} 
                        >
                            <div className="flex justify-between gap-5 w-full">
                            <div className="flex-1 text-center text-gray-900 rounded-md border w-fit p-2 cursor-default transition-all duration-500 relative group overflow-hidden">
                                    <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                                    <span>
                                      2542
                                    </span>
                                </div>
                                <div className="flex-1 text-center text-gray-900 rounded-md border w-fit p-2 cursor-default transition-all duration-500 relative group overflow-hidden">
                                    <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                                    <span>
                                        تعداد ناشران
                                    </span>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="h-full flex flex-col gap-2 items-center">
                                {
                                    selectedInfs.length ?
                                    <>
                                        {selectedInfs.map(influ => 
                                            <div className={`flex rounded-xl bg-gray-200 hover:bg-gray-300 cursor-pointer gap-3 p-4 ${styles.cart_influ}`}>
                                                <div className="flex flex-col items-center justify-end gap-3">
                                                    {/* prices count */}
                                                    <div dir="rtl">
                                                        تعداد تعرفه های انتخاب شده: <span>{influ.prices.length}</span>
                                                    </div>
                                                    <div className="flex w-full" dir="rtl">
                                                        {/* total price */}
                                                        <span>
                                                            قیمت کل: 
                                                        </span>
                                                        <span>
                                                        {
                                                            influ.prices.reduce((acc, cur) => 
                                                                acc += cur[priceProperty], 0
                                                            )
                                                        }
                                                        </span>
                                                    </div>

                                                </div>
                                                <div className="flex flex-col gap-2 items-center justify-center">
                                                    <span>
                                                        <img className={`w-24 ${styles.cart_influ_img}`} src="/logo.png" alt="Profile Photo" />
                                                    </span>
                                                    {/* title */}
                                                    <span>
                                                        {influ.pageId}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            <span>
                                                {
                                                    selectedInfs.reduce((acc, cur) => acc += cur.prices.reduce((xacc, xcur) => xacc += xcur[priceProperty] , 0), 0)
                                                }
                                            </span>
                                            <span>
                                                قیمت کل: 
                                            </span>
                                        </div>
                                    </>
                                    : <span className="text-gray-500">
                                        سبد خرید شما خالی است
                                    </span>
                                }
                                {
                                    selectedInfs.length ? 
                                    <Button onClick={() => setShowCampaignSelect(true)} sx={{width: "100%"}} variant="contained">خرید و تایید نهایی محصولات</Button> : ""
                                }
                            </div>
                        </div>
     );
}

export default Left;