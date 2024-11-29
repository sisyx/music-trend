import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toKFormat, toPercentFormat } from '../../utils/numbers';
import { IoCaretBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { USER_LEVELS } from "../../constatnts";
import { getRole } from '../../utils/auth';
import CircleGradient from "../loadings/CircleGradient";
import { BASE_URL } from '../../config/config';


function InfluencerInfo({ setInfs, setindetails, selectedInf = {}}) {
    const [prices, setPrices] = useState(["loading"]);
    const [role] = useState(getRole());
    const priceProperty = USER_LEVELS.find(ulevel => ulevel.value === role).priceProperty;
    const imgUrl = selectedInf?.imgUrl ? selectedInf?.imgUrl : "/logo.png"
    useEffect(() => {
        init()
    }, []);

    async function init() {
        try {
            const req = await fetch(`${BASE_URL}/api/PricePage/GetPricePageByPageID?PageID=${selectedInf.id}`);

            if (!req.ok) {
                throw new Error(req.statusText);
            }

            const res = await req.json();
            setPrices(res);
            
        } catch (error) {
            console.error(error);
            setPrices([]);
        }
    }

    return (
        <>
        {/* blur bg */}
        <div className={`relative w-fit h-fit bg-white border rounded-2xl shadow-2xl shadow-gray-500 text-gray-900 p-20 transition-200`} onClick={event => event.stopPropagation()}>
                <div className="text-right font-bold text-2xl">
                    <span>اطلاعات ناشر</span>
                </div>
                <br />
                <hr />
                <div className="text-black flex justify-end items-end p-4">
                    <div className="flex gap-5">
                        {/* details */}
                        <div className="flex gap-5 items-start justify-evenly w-full">
                            <div className="flex flex-col items-center gap-2">
                                <span className="font-bold">نرخ مشارکت</span>
                                {
                                    selectedInf
                                    ? <span>{toPercentFormat(selectedInf?.engagement)}</span> 
                                    : ""
                                }
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="font-bold">فالورها</span>
                                {
                                    selectedInf ? 
                                    <span>{toKFormat(selectedInf?.followesrs)}</span>
                                    : ""
                                }
                            </div>
                        </div>
                        {/* image */}
                        <div className="w-36 flex flex-col  gap-4 justify-center items-center">
                            <img src={imgUrl} alt="influencer image" className="rounded-full overflow-hidden border-primary border-2 aspect-square flex items-center justify-center text-center" />
                            <span className="text-2xl pt_serif_regular">{selectedInf.pageId}</span>
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