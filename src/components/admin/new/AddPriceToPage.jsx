import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { TAARIFS } from "../../../constatnts";
import { customAlert, getPagePrices } from "../../../functions";
import { AiFillInstagram, AiFillLike } from "react-icons/ai";
import styles from './Page.module.css';
import CircleGradient from "../../loadings/CircleGradient";
import { getCookie } from "../../../lib/cacheAndStorage";
import { BASE_URL } from "../../../config/config";
import useFetch from "../../../hooks/useFetch";

function AddPriceToPage({ page, imgUrl, isVisible,  setReload = () => {return}, handleCloseAdinge = () => {return} }) {
    const {error, loading, data} = useFetch("/api/PricePage/GetAllTitle", {})
    const [reloadPriceList, setreloadPriceList] = useState(1);
    const [isInDetails, setIsInDetail] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [priceTitle, setPriceTitle] = useState(TAARIFS.at(0).value);
    const [selectedNormalPrice, setSelectedNormalPrice] = useState("");
    const [selectedSpecialPrice, setSelectedSpecialPrice] = useState("");
    const [selectedCowokerPrice, setSelectedCowokerPrice] = useState("");
    const [prices, setPrices] = useState([])
    const [isGettingPrices, setIsGettingPrices] = useState(false);

    useEffect(() => {
        if (isVisible) {
            getPrices()
        }
    }, [isVisible])

    useEffect(() => {
        if (error) setreloadPriceList(cur => cur+1);
    }, [error])

    async function handleCreatePage() {
        const token = getCookie("token");
        if (!token) return

        const newPageId = priceTitle;
        const normalPrice = selectedNormalPrice;
        const specialPrice = selectedSpecialPrice;
        const coworkerPrice = selectedCowokerPrice;
        if (!specialPrice || !normalPrice || !newPageId ) {
            customAlert("لطفا ابتدا فیلد ها را به درستی پر کنید")
            return
        }
        if (!Number(normalPrice) || !Number(specialPrice) || !Number(coworkerPrice)) {
            customAlert("لطفا همه فیلدها را به درستی پر کنید")
            return
        }
        
        setIsLoading(() => true)
        try {
            const req = await fetch(`${BASE_URL}/api/PricePage/CreatePricePage`, {
                method: "POST",
                body: JSON.stringify({
                    id: 0,
                    name: newPageId,
                    normalprice: normalPrice,
                    hamkarPrice: coworkerPrice,
                    specialPrice: specialPrice,
                    pageId: page.id
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Autherization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText)
            }

            const res = await req.json();
            
            const req2 = await fetch(`${BASE_URL}/api/Pages/AddPriceToPage?pageId=${page.id}&pricePageId=${res.price.id}`, {
                method: "POST",
            });
            if (!req2.ok) throw new Error(req2.statusText);
            const res2 = await req2.json();

            customAlert(res2.message);
            setReload(cur => cur + 1)
        } catch (error) {
            console.error(error)
        }

        setIsLoading(false)
    }

    function handleStartAdding() {
        setIsInDetail(false);
    }

    function handleCloseAdding() {
        setIsInDetail(true);
    }

    async function getPrices() {
        setIsGettingPrices(() => true)
        const xprices = await getPagePrices(page.id);

        setPrices(xprices);
        setIsGettingPrices(() => false)
    }

    return ( 
        <div className={`fixed top-0 right-0 bottom-0 left-0 z-50 cursor-default transition-all duration-300 ${isVisible ? "scale-y-1" : "scale-y-0"}`} onClick={handleCloseAdinge}>
            {/* page details */}
            <div className={`p-2 pt-10 flex flex-col items-center gap-5 w-screen max-w-96 shadow-xl shadow-gray-500 border rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black cursor-default transition-all duration-300 ${isInDetails ? "scale-1" : "scale-0"}`} onClick={event => event.stopPropagation()}>
                    <div className="p-1 border-4 border-primary-start rounded-full aspect-square w-48">
                        <img src={imgUrl} alt={`${page.pageId} Profile Image`} className="rounded-full w-full h-full aspect-square flex items-center justify-center text-center" loading="lazy" crossOrigin="anonymous" />
                    </div>
                    <div className="flex w-full items-center justify-center">{page.pageId}</div>
                    {/* Page Prices */}
                    <div className="flex flex-col gap-3 items-end w-full py-5 px-2 rounded-lg bg-gray-200">
                        <div className="flex w-full items-center justify-center ">تعرفه های پیج</div>
                        {
                            isGettingPrices ? 
                            <div className="w-full flex items-center justify-center">
                                <CircleGradient /> 
                            </div> : ""
                        }
                        {
                            prices.length ? prices.map(price => 
                            <div className="flex flex-row-reverse items-center justify-between gap-2 w-full max-w-96">
                                <div className="flex items-center gap-2">
                                    {/* title */}
                                    <div>
                                        {price?.name}
                                    </div>
                                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-gradient-to-r  from-primary-start hover:to-primary-start hover:from-primary-end  to-primary-end transition-all duration-1000 cursor-pointer">
                                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                                        <AiFillLike />
                                    </div>
                                </div>
                                {/* price */}
                                <div className="flex items-end gap-2">
                                    <span>
                                        تومان
                                    </span>
                                    <span>
                                        {price?.normalprice}
                                    </span>
                                </div>
                            </div> 
                        ) : isGettingPrices ? "" : <div className="flex items-center justify-center w-full">هیچ تعرفه ای تعریف نشده</div>
                    }
                    </div>
                    <Button onClick={handleStartAdding} sx={{width: "100%"}}>اضافه کردن تعرفه</Button>
                </div>
                <div className={`p-2 pt-10 flex flex-col items-end gap-5 w-screen max-w-96 shadow-xl shadow-gray-500 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black cursor-default transition-all duration-300 ${isInDetails ? "scale-x-0" : "scale-x-1"}`} onClick={event => event.stopPropagation()}>
                        <div className="text-2xl font-extrabold">اضافه کردن تعرفه به پیج</div>
                        <div className="flex items-center gap-2 w-full">
                            <AiFillInstagram fontSize="2rem" />
                            <span className={`text-2xl ${styles.pt_serif_regular}`}>{page.pageId}</span>
                        </div>
                        <div className="flex items-center gap-2 w-full" >
                            <Select
                                defaultValue={TAARIFS.at(0).value}
                                value={priceTitle}
                                onChange={event => setPriceTitle(event.target.value)}
                                sx={{width: "100%"}}
                            >
                                {
                                    data.length && data.map(taarif => 
                                        <MenuItem value={taarif.title} dir="rtl">{taarif.title}</MenuItem>
                                    )
                                }
                            </Select>
                        </div>
                        <div className="flex items-center gap-2 w-full" >
                                <TextField sx={{width: "100%"}} type="number" label="قیمت برای مشتری معمولی" value={selectedNormalPrice} onChange={evebt => setSelectedNormalPrice(evebt.target.value)} />
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <TextField sx={{width: "100%"}} type="number" label="قیمت برای مشتری مخصوص" value={selectedSpecialPrice} onChange={evebt => setSelectedSpecialPrice(evebt.target.value)} />
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <TextField sx={{width: "100%"}} type="number" label="قیمت برای همکار" value={selectedCowokerPrice} onChange={evebt => setSelectedCowokerPrice(evebt.target.value)} />
                        </div>
                        <Button
                            onClick={handleCreatePage} 
                            sx={{width: "100%"}} 
                            disabled={isLoading}
                            variant="contained"
                        >
                            {
                                isLoading 
                                ? <span>در حال ایجاد</span>
                                : <span>اضافه کردن تعرفه به پیج</span>
                            }
                        </Button>
                        <Button onClick={handleCloseAdding} sx={{width: "100%"}}>بازگشت به جزییات</Button>
                </div>
        </div>
     );
}

export default AddPriceToPage;