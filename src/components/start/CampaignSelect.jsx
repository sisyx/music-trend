import { useEffect, useState } from "react";
import { cartCookies, root } from "../../constatnts";
import { customAlert, getCookie } from "../../functions";
import { Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import CircleGradient from "../loadings/CircleGradient";
import { useNavigate } from "react-router-dom";

function CampaignSelect({ saveSelections }) {
    const [camps, setCamps] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [reload, setReload] = useState(0);
    const [newCampName, setNewCampName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showAddCardDialog, setShowAddCardDialog] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        init()
    }, [reload])

    async function init() {
        setIsLoading(true);
        const token = getCookie("token");
        const id = getCookie("id");

        if (!id || !token) {
            customAlert("لطفا ابتدا وارد حساب کاربری شوید!")
        }

        try {
            const req = await fetch(`${root}/api/Campaign/GetCampaignByUserId?userId=${id}`);

            if (!req.ok) {
                console.log(req )
                if (req.status === 404) {
                    throw new Error("کمپینی برای این کاربر یافت نشد!")
                } else {   
                    throw new Error("دریافت کمپین ها ناموفق بود. لطفا دوباره تلاش کنید!");
                }
            }

            const res = await req.json();
            setCamps(res);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    async function AddCampaign() {
        const campname = newCampName;
        const userId = getCookie("id");

        if (!userId) {
            customAlert("لطفا ابتدا وارد حساب کاربری خود شوید!")
            return
        }

        if (campname.length < 3) {
            if (campname.length <= 0) {
                customAlert("لطفا ابتدا نام کمپین را وارد کنید")
            } else {
                customAlert("لطفا اسم طولانی تری انتخاب کنید")
            }
            return
        }

        try {
            const date = new Date();
            const startDate = date.toISOString();
            const req = await fetch(`${root}/api/Campaign/CreateCampaign`, {
                method: "POST",
                body: JSON.stringify(
                    {
                        "name": campname,
                        "userId": userId,
                        "pricePageId": "",
                        "pageId": "",
                        "startDate": startDate
                    }
                ),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!req.ok) {
                throw new Error("مشکلی در ایجاد کمپین ایجاد شده. لطفا دوباره تلاش کنید!");
            }

            const res = await req.text();
            customAlert(res);
            realoadCamps();
        } catch (error) {
            customAlert(error.message)
            console.log(error);
        }
    }

    function openAdding() {
        setIsAdding(true);
    }

    function closeAdding() {
        setIsAdding(false);
    }

    function realoadCamps() {
        setReload(cur => cur + 1);
        setIsAdding(false);
        setNewCampName("")
    }

    function onChooseCampaign(campId) {
        console.log("campaign id: " + campId)
        const prevCart = getCookie(cartCookies.campidName);
        if (prevCart) setShowAddCardDialog(campId);
        else approveDeletePrevCart(campId);
    }

    async function approveDeletePrevCart(campId) {
        const newCapmName = campId;

        await saveSelections(newCapmName);
        navigate("/payment");
    }

    function closeDialog() {
        setShowAddCardDialog(() => undefined);
    }
    
    return (
        <>
            <div onClick={e => e.stopPropagation()} className={`bg-white border rounded-2xl shadow-2xl shadow-gray-500 text-gray-900 w-full sm:w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center transition-all px-4 py-20 duration-300 ${!showAddCardDialog ? !isAdding ? "scale-1" : "scale-0" : "scale-0"}`}>
                    <div className="text-xl " dir="rtl">لطفا یک کمپین انتخاب کنید!</div>
                    <hr className="w-full" />
                    <span>لیست کمپین ها</span>
                    {
                        camps.length ? 
                        camps.map(camp => 
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex w-full justify-between items-center p-4 sm:w-96" key={`camp-as;kdnas-${camp.id}`}>
                            <Button variant="contained" onClick={() => onChooseCampaign(camp.id)}>انتخاب</Button>
                            <span>
                                {camp.name}
                            </span>
                        </div>) : !isLoading ?  <span>هیچ کمپینی برای شما تعریف نشده!</span> : ""
                    }
                    {
                        isLoading ? <CircleGradient /> : ""
                    }
                    <Button className="sm:w-96" startIcon={<Add />} onClick={openAdding}>اضافه کردن کمپین جدید</Button>
            </div>
            <div onClick={e => e.stopPropagation()} className={`bg-white border rounded-2xl shadow-2xl shadow-gray-500 text-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 w-full sm:w-96 pt-20 pb-10 p-4 transition-all duration-200 ${!showAddCardDialog ? isAdding ? "scale-y-1"  : "scale-y-0": "scale-y-0" }`}>
                <span className="text-2xl text-black inline-block w-full" dir="rtl">
                    اضافه کردن کمپین جدید
                </span>
                <TextField value={newCampName} onChange={e => setNewCampName(e.target.value)} dir="rtl" placeholder="عنوان کمپین" sx={{width: "100%"}} />
                <div className="flex flex-col gap-2">
                    <Button startIcon={<Add />}  variant="contained" onClick={AddCampaign} >اضافه کردن کمپین</Button>
                    <Button onClick={closeAdding} >بازگشت</Button>
                </div>
            </div>
            <div onClick={e => e.stopPropagation()} className={`bg-white border rounded-2xl shadow-2xl shadow-gray-500 text-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 w-full sm:w-96 pt-20 pb-10 p-4 transition-all duration-200 ${showAddCardDialog ? "scale-1"  : "scale-0"}`}>
                <span className="text-2xl text-black inline-block w-full" dir="rtl">
                    در صورت ادامه سبد خرید قبلی شما حذف خواهد شد.
                    <br/>
                    آیا ادامه میدهید؟
                </span>
                <div className="flex flex-col gap-2">
                    <Button startIcon={<Add />}  variant="contained" onClick={() => approveDeletePrevCart(showAddCardDialog)} >ادامه</Button>
                    <Button onClick={closeDialog} >بازگشت</Button>
                </div>
            </div>
        </>
     );
}

export default CampaignSelect;