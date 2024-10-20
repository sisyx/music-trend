import { useEffect, useState } from "react";
import { cartCookies, taarifs } from "../../constatnts";
import Timeline from "../../components/start/Timeline";
import { Button, Checkbox } from "@mui/material";
import RightFilters from "../../components/start/RightFilters";
import StartCards from "../../components/start/StartCards";
import { Link, useSearchParams } from "react-router-dom";
import StartNav from "../../components/start/StartNav";
import { customAlert, saveCookie, setTitle } from "../../functions";
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
    const [params, setParams] = useSearchParams();
    const [costs, setCosts] = useState([]); // [{id: xxx, pageImg: xxx, pageid: xxx, normalprice: xxx, specialprice: xxx. hamkarprice: xxx, }]

    useEffect(() => {
        setTitle("ایجاد کمپین")
    }, []);

    useEffect(() => {
        console.log(costs)
    }, [costs]);

    const searchedInfs = infs.filter(influ => influ?.pageId.includes(search));
    const selectedInfs = infs.filter(influ => influ.selcted);

    function saveSelections(campId) {
        const isCampSaved = saveCookie(cartCookies.campidName, campId, cartCookies.saveLocalDays);
        const selecteds = [];
        costs.forEach(cost => {
            selecteds.push(`${cost.pageNId}::${cost.id}`);
        })

        const priceIdsString = selecteds.reduce((acc, cur, index) => acc += `${cur}${index >= selecteds.length - 1 ? "" : ","}` , "");
        // const influIdsString = influIdsList.reduce((acc, cur, index) => acc += `${cur}${index >= influIdsList.length - 1 ? "" : ","}` , "");
        const isPricesSaved = saveCookie(cartCookies.selectedPrices, priceIdsString, cartCookies.saveLocalDays);
        // const isPagesSaved = saveCookie(cartCookies.selectedInflus, influIdsString, cartCookies.saveLocalDays);

        if (isCampSaved  && isPricesSaved ) {
            customAlert("سبد خرید شما با موفقیت ذخیره شد\n شما میتوانید با مراجعه به ادمین سایت خرید خود را تکمیل کنید")
        }

        return 1
    }

    return ( 
        <div>
            <StartNav search={search} setSearch={setSearch} />
            <div className="mt-5 overflow-hidden">
                {/* top */}
                <div className="flex items-center justify-between px-2 md:px-12 transition-all duration-300 vazirmatn">
                    {/* top left */}
                    <div>
                    <Link to="/" className="hidden sm:block">
                        <Button variant="contained" sx={{
                            backgroundColor: "#2da5dc",
                            ":hover": {
                                backgroundColor: "#2da5d0"
                            }
                        }}>
                                بازگشت
                        </Button>
                    </Link>
                    <Link to="/" className="text-sm sm:hidden">
                        بازگشت
                    </Link>
                    </div>
                    {/* top center */}
                    <Timeline className="hidden md:flex items-center flex-1 max-w-96" itemWidth={40} data={timelinedata} />
                    {/* top right */}
                    <div>
                        <div className=" underline sm:no-underline sm:border p-2 rounded-md sm:shadow-telegram sm:shadow-md hover:shadow-primary transition-all duration-150 cursor-pointer text-sm">
                            ایجاد کمپین جدید
                        </div>
                    </div>
                </div>
                {/* main */}
                <div className="w-screen flex flex-col items-center justify-center mt-12">
                <Timeline className="flex flex-nowrap md:hidden items-center w-screen px-4" itemWidth={40} data={timelinedata} />
                    {/* inner */}
                    <div className="flex flex-col md:flex-row w-screen justify-center min-h-80">
                        {/* main left */}
                        <Left costs={costs} selectedInfs={selectedInfs} setShowCampaignSelect={setShowCampaignSelect} />
                        {/* main center */}
                        <div className="flex flex-col text-white w-full max-w-6xl flex-1 shadow-md">
                            <div className="flex flex-nowrap items-center text-sm sm:text-base gap-3 p-2 w-full bg-gray-100 overflow-x-scroll rounded-t-lg" dir="rtl">
                                <span className="text-black text-nowrap">تعرفه ها</span>
                                {
                                    taarifs.map((taarif, index) =>
                                        <div onClick={() => setParams(`ptid=${index + 1}`)} className={`flex text-nowrap gap-0 items-center p-2 text-gray-900 rounded-xl border border-transparent hover:border-gray-900 hover:gap-2 ${params.get("ptid") == index + 1 ? "gap-2 border-gray-900" : ""} cursor-pointer transition-all duration-200`}>
                                            {/* <Checkbox checked={params.get("ptid") == index + 1} /> */}
                                            <span>
                                                #
                                            </span>
                                            {taarif.text}
                                        </div>
                                    )
                                }
                            </div>
                            <StartCards setCosts={setCosts} costs={costs} influencers={searchedInfs} setInfs={setInfs} />
                        </div>
                        {/* main right */}
                        <div className="w-fit hidden md:block">
                            <RightFilters />
                        </div>
                    </div>
                    <div className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 transition-all duration-200 ${showCampaignSelect ? "scale-y-1" : "scale-y-0"}`} onClick={() => setShowCampaignSelect(false)}>
                        <CampaignSelect saveSelections={saveSelections} />
                    </div> 
                </div>
            </div>
        </div>
     );
}

export default Start;