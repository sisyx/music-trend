import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsGenderTrans } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toKFormat, toPercentFormat } from "../../funcs";
import { IoCaretBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { root, userLevels } from "../../constatnts";
import { getRole } from "../../functions";
import CircleGradient from "../loadings/CircleGradient";


function InfluencerInfo({ setInfs, setindetails, selectedInf = {}}) {

    const [prices, setPrices] = useState(["loading"]);
    const [role] = useState(getRole());
    const priceProperty = userLevels.find(ulevel => ulevel.value === role).priceProperty;

    useEffect(() => {
        init()
    }, []);

    // useEffect(() => {
    //     console.log(prices)
    // }, [prices])

    async function init() {
        try {
            const req = await fetch(`${root}/api/PricePage/GetPricePageByPageID?PageID=${selectedInf.id}`);

            if (!req.ok) {
                throw new Error(req.statusText);
            }

            const res = await req.json();
            setPrices(res);
            console.log(res)
        } catch (error) {
            console.error(error);
            setPrices([]);
        }
    }

    return (
        <>
        {/* blur bg */}
        <div className={`relative w-fit h-fit bg-white border rounded-2xl shadow-2xl shadow-gray-500 text-gray-900 p-20 transition-500`} onClick={event => event.stopPropagation()}>
                <div className="text-right font-bold text-2xl">
                    <span>اطلاعات ناشر</span>
                </div>
                <br />
                <hr />
                <div className="text-black flex justify-end items-end p-4">
                    <div className="flex gap-5">
                        {/* details */}
                        <div className="flex gap-5 items-end justify-evenly w-full">
                            <div className="flex flex-col">
                                <span className="font-bold">نرخ مشارکت</span>
                                {
                                    selectedInf
                                    ? <span>{toPercentFormat(selectedInf?.participateRate)}</span> 
                                    : ""
                                }
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">فالورها</span>
                                {
                                    selectedInf ? 
                                    <span>{toKFormat(selectedInf?.followers)}</span>
                                    : ""
                                }
                            </div>
                        </div>
                        {/* image */}
                        <div className="w-36 rounded-full overflow-hidden border-primary border-2">
                            <img src="/logo.png" alt="influencer image" />
                        </div>
                    </div>
                </div>
                <hr />
                {/* prices */}
                <div className="flex flex-col gap-3 items-end p-5">
                    <div className="w-full text-center">تعرفه های پیج</div>
                        {
                            prices?.at(0) === "loading" ? 
                                <div className="w-full flex items-center justify-center">
                                    <CircleGradient />
                                </div> 
                            : prices.length 
                            ? prices.map(price => 
                            <div className="flex flex-row-reverse items-center justify-between gap-2 w-full max-w-96">
                                <div className="flex items-center gap-2">
                                    <div>
                                        {/* title */}
                                        {price.name}
                                    </div>
                                <div>
                                    </div>
                                        <div 
                                            onClick={() => {
                                                console.log(price.selected)
                                                if (!price.selected) {
                                                    setInfs(cur => cur.map(influ => influ.id === selectedInf.id ? {...influ, selcted: true, prices: influ?.prices ? [...influ?.prices, price] : [price]} : influ))
                                                    setPrices(cur => cur.map(xprice => xprice.id === price.id ? {...xprice, selected: true} : xprice))
                                                } else {
                                                    setInfs(cur => cur.map(influ => influ.id === selectedInf.id ? {...influ, prices: influ?.prices ? influ?.prices.filter(xprice => xprice.id !== price.id) : []} : influ))
                                                    setInfs(cur => cur.map(influ => influ.id === selectedInf.id ? {...influ, selcted: influ?.prices?.length ? true : false} : influ))
                                                    // selcted: influ?.prices?.length ? true : false
                                                    setPrices(cur => cur.map(xprice => xprice.id === price.id ? {...xprice, selected: false} : xprice))
                                                }
                                            }}
                                            className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-gradient-to-r  from-primary-start hover:to-primary-start hover:from-primary-end  to-primary-end transition-all duration-1000 cursor-pointer">
                                            <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                                            {
                                                price.selected
                                                ? <span className="opacity-0">
                                                    <AddShoppingCartIcon />
                                                    </span>
                                                : <AddShoppingCartIcon />
                                            }
                                        </div>
                                </div>
                                {/* price */}
                                <div className="flex items-end gap-2">
                                    <span>
                                        تومان
                                    </span>
                                    <span>
                                        {
                                            price[priceProperty]
                                        }
                                    </span>
                                </div>
                            </div> 
                        ) : <div className="w-full text-center">تعرفه ای برای این پیج تعریف نشده</div>
                    }
                </div>
                <button onClick={() => setindetails(false)} className="group absolute top-4 left-4 p-5 text-white border border-telegram transition-all duration-100 bg-telegram rounded-full hover:bg-white hover:text-telegram z-20">
                    <IoCaretBack />
                </button>
            </div>
        </>
     );
}

export default InfluencerInfo;