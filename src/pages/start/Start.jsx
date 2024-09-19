import { useEffect, useState } from "react";
import { cartCookieCampidName, cartCookieSelectedInflus, cartCookieSelectedPrices, influencers, saveLocalCartDays } from "../../constatnts";
import Timeline from "../../components/start/Timeline";
import { Button } from "@mui/material";
import RightFilters from "../../components/start/RightFilters";
import StartCards from "../../components/start/StartCards";
import Wave from "../../components/Wave";
import styles from './Start.module.css';
import { Link, useNavigate } from "react-router-dom";
import StartNav from "../../components/start/StartNav";
import { customAlert, getPages, saveCookie } from "../../functions";
import CampaignSelect from "../../components/start/CampaignSelect";
import Left from "../../components/start/Left";

const timelinedata = [
    {
        title: "انتخاب ناشر",
        active: true
    },
    {
        title: "بررسی حساب کاربری"
    },
    {
        title: "پرداخت"
    },
    {
        title: "اتمام خرید"
    },
]

function Start() {

    const [showCampaignSelect, setShowCampaignSelect] = useState(false);
    const [infs, setInfs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        init()
    }, []);

    useEffect(() => {
        console.log(infs)
    }, [infs]);

    async function init() {
        const tmpInfs = await getPages();
        setInfs(tmpInfs)
    };

    const searchedInfs = infs.filter(influ => influ?.pageId.includes(search));
    const selectedInfs = infs.filter(influ => influ.selcted);

    function resetInflus() {
        setInfs(cur => cur.map(influ => {
            return {...influ, prices: [], selcted: false};
        }))
    }

    function closeCampSelect() {
        setShowCampaignSelect(false)
    }

    function saveSelections(campId) {
        console.log(campId)
        const isCampSaved = saveCookie(cartCookieCampidName, campId, saveLocalCartDays);
        const priceIdsList = [];
        const influIdsList = []
        selectedInfs.forEach(influ => {
            influIdsList.push(influ.id);
            influ?.prices.forEach(price => {
                priceIdsList.push(price.id);
            })
        })
        const priceIdsString = priceIdsList.reduce((acc, cur, index) => acc += `${cur}${index >= priceIdsList.length - 1 ? "" : ","}` , "");
        const influIdsString = influIdsList.reduce((acc, cur, index) => acc += `${cur}${index >= influIdsList.length - 1 ? "" : ","}` , "");
        const isPricesSaved = saveCookie(cartCookieSelectedPrices, priceIdsString, saveLocalCartDays);
        const isPagesSaved = saveCookie(cartCookieSelectedInflus, influIdsString, saveLocalCartDays);

        if (isCampSaved  && isPricesSaved && isPagesSaved ) {
            customAlert("<div dir='rtl'>سبد خرید شما با موفقیت ذخیره شد<br/> شما میتوانید با مراجعه به ادمین سایت خرید خود را تکمیل کنید</div>")
        }
    }

    return ( 
        <div>
            <StartNav search={search} setSearch={setSearch} />
            <div className="mt-5 overflow-hidden">
                {/* top */}
                <div className="flex items-start justify-between pl-12 pr-12 vazirmatn">
                    {/* top left */}
                    <div>
                        <Link to="/">
                        <Button variant="contained" sx={{
                            backgroundColor: "#2da5dc",
                            ":hover": {
                                backgroundColor: "#2da5d0"
                            }
                        }}>
                                بازگشت
                        </Button>
                            </Link>
                    </div>
                    {/* top center */}
                    <Timeline data={timelinedata} />
                    {/* top right */}
                    <div>
                        <div className="border p-2 rounded-md shadow-telegram shadow-md hover:shadow-primary transition-all duration-150 cursor-pointer">
                            ایجاد کمپین جدید
                        </div>
                    </div>
                </div>
                {/* main */}
                <div className="w-screen flex justify-center mt-12">
                    {/* inner */}
                    <div className="flex w-screen justify-center min-h-80">
                        {/* main left */}
                        <Left selectedInfs={selectedInfs} setShowCampaignSelect={setShowCampaignSelect} />
                        {/* main center */}
                        <div className="text-white w-full max-w-6xl flex-1 ml-4 shadow-md">
                            <StartCards influencers={searchedInfs} setInfs={setInfs} />
                        </div>
                        {/* main right */}
                        <div className="w-fit">
                            <RightFilters />
                        </div>
                    </div>
                    <div className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 transition-all duration-200 ${showCampaignSelect ? "scale-y-1" : "scale-y-0"}`} onClick={() => setShowCampaignSelect(false)}>
                        <CampaignSelect resetInflus={resetInflus} saveSelections={saveSelections} closeCampSelect={closeCampSelect} />
                    </div> 
                </div>
            </div>
        </div>
     );
}

export default Start;