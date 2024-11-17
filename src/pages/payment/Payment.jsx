import { useEffect } from "react";
import { CART_COOKIES, englishAlphabetLC, USER_LEVELS } from "../../constatnts";
import { customAlert, getAllPrices, getPages } from "../../functions";
import { getCookie } from "../../lib/cacheAndStorage";
import { getRole } from "../../utils/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import GlassyButton from "../../components/GlassyButton";
import CircleGradient from "../../components/loadings/CircleGradient";
import { IoBagCheck } from "react-icons/io5";
import NeonLightBg from "../../components/NeonLightBg";
import { BASE_URL } from "../../config/config";

function Payment() {
    const [prices, setPrices] = useState([]);
    const [influs, setInflus] = useState([]);
    const [metadata, setMetadata] = useState({pages: [], prices: []});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const role = getRole();
    const priceProperty = USER_LEVELS.find(xlevel => xlevel.value === role).priceProperty
    const filteredPrices = prices.reduce((acc, price) => !acc.find(x => x.pageId === price.pageId) ? [...acc, price] : [...acc], [])
    useEffect(() => {
        init()
    }, []);

    useEffect(() => {
        console.log(metadata)
    }, [metadata])

    async function init() {
        setLoading(() => true)
        try {
            const allPrices = await getAllPrices();
            const allPages = await getPages();
            setMetadata({pages: allPages, prices: allPrices});
            const priceIdsList = parseCookie(getCookie(CART_COOKIES.selectedPrices));
            // priceIdsList.forEach(price => {
            //     price.pageNId = price.pageId;
            //     price.pageId = allPages.find(page => page.id === price.priceNId)
            // })

            for (let i = 0; i < priceIdsList.length; i++) {
                priceIdsList[i].pageNId = priceIdsList[i].xpageId;
                priceIdsList[i].pageId = allPages.find(page => page.id == priceIdsList[i].xpageId).pageId;
                priceIdsList[i].priceDetail = allPrices.find(price => price.id == priceIdsList[i].priceId);
            }

            console.log(priceIdsList)
            setPrices(priceIdsList)
        } catch(error) {
            console.log(error.message)
        }
        setLoading(() => false)
    }

    function parseCookie(input) {
        return input.split(',').map(item => {
            const [xpageId, priceId] = item.split('::');
            return { xpageId, priceId };
        });
    }
    
    
    async function pay() {
        const xprices = getCookie(CART_COOKIES.selectedPrices);
        const campid = getCookie(CART_COOKIES.campidName);
        const xpricesList = parseCookie(xprices).reduce((acc, cur) => !acc.includes(cur.xpageId) ? [...acc, cur.xpageId] : acc, []);

        if (!campid || !xprices) {
            customAlert("error loading cookies");
            return
        }

        const xdata = {
            campaignId: Number(campid),
            pricePageIds: xprices,
        }

        let success = false;

        for (let i = 0; i < xpricesList.length; i++) {
            try {
                if (xpricesList[i] == ",") { continue }
                const req = await fetch(`${BASE_URL}/api/Campaign/AddPageToCampaign?campaignId=${xdata.campaignId}&pageId=${xpricesList[i]}`, {
                    method: "POST",
                })

                if (!req.ok) {
                    throw new Error("پرداخت ناموفق بود. لطفا مجددا تلاش کنید")
                }filteredPrices

                const res = await req.text();
                success = true;
            } catch (error) {
                customAlert(error.message);
                console.error(error);
                success = false
            }
        }

        if (success) {
            document.cookie = `${CART_COOKIES.campidName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
            customAlert("پرداخت با موفقیت انجا شد");
        }
        else customAlert("پرداخت ناموفق بود");

        navigate(`/report/?id=${xdata.campaignId}`);
    }


    return ( 
        <div>
            <NeonLightBg />
            <div className="w-full h-screen bg-gray-100 flex flex-col gap-5 items-center justify-center">
                <div className="shadow-xl shadow-gray-500 bg-white overflow-hidden flex flex-col gap-4 pt-4 rounded-xl justify-center items-center">
                    <span>فاکتور خرید شما</span>
                    <div className="flex flex-col gap-2 w-screen max-w-96 rounded-t-xl p-4">
                            {
                                filteredPrices?.map(price =>
                                    <div className="flex flex-col gap-2 rounded-xl p-4">
                                        <div className="">{price.pageId}</div>
                                        {
                                            prices.filter(xprice => xprice.pageId === price.pageId).map(xprice =>
                                                <div className="flex justify-between bg-gradient-to-r from-primary-start to-telegram text-white rounded-xl p-2 pl-4 hover:bg-gray-400 cursor-pointer" dir={englishAlphabetLC.includes(xprice?.priceDetail.name[0]) ? "ltr" : "rtl"}>
                                                <span>{xprice.priceDetail.name}</span>
                                                <span className="flex gap-2 items-center vazir">
                                                    <span>
                                                        {xprice.priceDetail[priceProperty] ? xprice.priceDetail[priceProperty] : ""}
                                                    </span>
                                                    <span>
                                                        تومان
                                                    </span>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                            {
                                loading && 
                                <div className="flex items-center justify-center">
                                    <CircleGradient />
                                    <span>در حال بارگزاری</span>
                                </div>
                            }
                    </div>
                    <GlassyButton onClick={pay} className="w-full flex gap-2 items-center justify-center rounded-none">
                        <IoBagCheck />
                        <span>
                            پرداخت
                        </span>
                    </GlassyButton>
                </div>
                <Button onClick={() => navigate("/")}>بازگشت به خانه</Button>
            </div>
        </div>
     );
}

export default Payment;