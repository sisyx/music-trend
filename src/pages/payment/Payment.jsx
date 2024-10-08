import { useEffect } from "react";
import { cartCookies, englishAlphabetLC, root, userLevels } from "../../constatnts";
import { customAlert, getAllPrices, getCookie, getPages, getRole } from "../../functions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import GlassyButton from "../../components/GlassyButton";
import CircleGradient from "../../components/loadings/CircleGradient";
import { IoBagCheck } from "react-icons/io5";
import NeonLightBg from "../../components/NeonLightBg";

function Payment() {
    const [prices, setPrices] = useState([]);
    const [influs, setInflus] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const role = getRole();
    const priceProperty = userLevels.find(xlevel => xlevel.value === role).priceProperty

    
    useEffect(() => {
        init()
    }, []);

    async function init() {
        setLoading(() => true)
        try {
            const allPrices = await getAllPrices();
            const allPages = await getPages();
            const priceIdsList = getCookie(cartCookies.selectedPrices)
            .split(",") // make a list of id's
            .reduce((acc, cur) => acc = [...acc, allPrices.find(x => x.id == cur)] , []); // get real price object
            
            const influIdsList = getCookie(cartCookies.selectedInflus)
            .split(",")
            .reduce((acc, cur) => [...acc, allPages.find(page => page.id == cur)] , [])
            setPrices(priceIdsList);
            setInflus(influIdsList);
        } catch(error) {
            console.log(error.message)
        }
        setLoading(() => false)
    }
    
    async function pay() {
        const xpages = getCookie(cartCookies.selectedInflus);
        const xprices = getCookie(cartCookies.selectedPrices);
        const campid = getCookie(cartCookies.campidName);
        const listPages = xpages

        if (!campid || !xprices || !xpages) {
            customAlert("error loading cookies");
            return
        }

        // console.log(campid)
        // console.log(xpages)
        // console.log(xprices)

        // return

        // /api/Campaign/AddPricePagesToCampaign
        const xdata = {
            campaignId: Number(campid),
            pricePageIds: xprices,
            pageID: xpages,
        }

        let success = false;

        for (let i = 0; i < listPages.length; i++) {
            try {
                if (listPages[i] == ",") { continue }
                const req = await fetch(`${root}/api/Campaign/AddPageToCampaign?campaignId=${xdata.campaignId}&pageId=${listPages[i]}`, {
                    method: "POST",
                })

                if (!req.ok) {
                    throw new Error("پرداخت ناموفق بود. لطفا مجددا تلاش کنید")
                }

                const res = await req.text();
                // customAlert(res);
                success = true;
            } catch (error) {
                customAlert(error.message);
                console.error(error);
                success = false
            }
        }

        if (success) {
            document.cookie = `${cartCookies.campidName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
            customAlert("پرداخت با موفقیت انجا شد");
        }
        else customAlert("پرداخت ناموفق بود");

        navigate(`/reports/instagram?id=${xdata.campaignId}`);
    }


    return ( 
        <div>
            <NeonLightBg />
            <div className="w-full h-screen bg-gray-100 flex flex-col gap-5 items-center justify-center">
                <div className="shadow-xl shadow-gray-500 bg-white overflow-hidden flex flex-col gap-4 pt-4 rounded-xl justify-center items-center">
                    <span>تعرفه ها</span>
                    <div className=" flex flex-col gap-2 w-screen max-w-96 rounded-t-xl p-4">
                            {
                                influs?.map(  influ =>
                                    <div className="flex flex-col gap-2 rounded-xl p-4">
                                        <div className="">{influ.pageId}</div>
                                        {
                                            prices.filter(price => price.pageId === influ.id).map(price =>
                                                <div className="flex justify-between bg-gradient-to-r from-primary-start to-telegram text-white rounded-xl p-2 pl-4 hover:bg-gray-400 cursor-pointer" dir={englishAlphabetLC.includes(price?.name[0]) ? "ltr" : "rtl"}>
                                                <span>{price.name}</span>
                                                <span className="flex gap-2 items-center vazir">
                                                    <span>
                                                        {price[priceProperty] ? price[priceProperty] : ""}
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