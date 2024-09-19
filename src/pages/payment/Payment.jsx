import { useEffect } from "react";
import { cartCookieSelectedInflus, cartCookieSelectedPrices, englishAlphabetLC, root } from "../../constatnts";
import { getAllPrices, getCookie, getPages, getUser, getUserCamps } from "../../functions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import GlassyButton from "../../components/GlassyButton";
import CircleGradient from "../../components/loadings/CircleGradient";
import { IoBagCheck } from "react-icons/io5";
import { routes } from "../../constatnts";

function Payment() {
    const [prices, setPrices] = useState([]);
    const [influs, setInflus] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    
    useEffect(() => {
        init()
    }, []);

    async function init() {
        const userId = getCookie("id");
        if (!userId) {
            navigate(routes.login)
        }

        const tmpCamps = await getUserCamps(userId);
        console.log(tmpCamps)

        setLoading(() => true)
        try {
            const allPrices = await getAllPrices();
            const allPages = await getPages();
            const priceIdsList = getCookie(cartCookieSelectedPrices)
            .split(",") // make a list of id's
            .reduce((acc, cur) => acc = [...acc, allPrices.find(x => x.id == cur)] , []); // get real price object
            
            const influIdsList = getCookie(cartCookieSelectedInflus)
            .split(",")
            .reduce((acc, cur) => [...acc, allPages.find(page => page.id == cur)] , [])
            setPrices(priceIdsList);
            setInflus(influIdsList);
        } catch(error) {
            console.log(error.message)
        }
        setLoading(() => false)
    }
    
    // function pay() {
    //     const 
    // }


    return ( 
        <div className="flex items-center justify-center h-screen">
            <div className="flex w-screen h-fit max-w-7xl bg-red-100 ">
                <div className="flex-1 h-full w-blue-200">
                    Hello
                </div>
                <div className="flex flex-col gap-5 items-center justify-center">
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
                                                            {price?.normalprice}
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
                        <GlassyButton className="w-full flex gap-2 items-center justify-center rounded-none">
                            <IoBagCheck />
                            <span>
                                پرداخت
                            </span>
                        </GlassyButton>
                    </div>
                    <Button onClick={() => navigate("/")}>بازگشت به خانه</Button>
                </div>
            </div>
        </div>
     );
}

export default Payment;