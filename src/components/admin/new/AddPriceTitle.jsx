import { AddSharp, SkipPrevious as SkipPreviousIcon } from "@mui/icons-material";
import { Button, TextField, Tooltip } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import CircleGradient from "../../loadings/CircleGradient";
import { BASE_URL } from "../../../config/config";
import { customAlert } from "../../../functions";
import { ImPriceTag } from "react-icons/im";

function AddPriceTitle() {
    const [reload, setReload] = useState(0);
    const {loading, error, data} = useFetch("/api/PricePage/GetAllTitle", {alertOnError: "مشکلی در دریافت تعرفه ها پیش آمده", reload });
    const [isAddingTaarig, setIsAddingTaarif] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    function startAdding() {
        setIsAddingTaarif(true);
    }

    function stopAdding() {
        setIsAddingTaarif(false);
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    async function addTitle() {
        const title = newTitle;
        try {
            const req = await fetch(`${BASE_URL}/api/PricePage/AddTitlePricePage`, {
                method: "POST",
                body: JSON.stringify({title}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!req.ok) throw new Error("مشکلی در ایجاد تعرفه به وجود آمده. لطفا مجددا تلاش کنید");
            const res = await req.json() || await req.text();
            customAlert("با موفقیت اضافه شد", "success");
            setNewTitle(cur => "")
        } catch (error) {
            console.error(error);
            customAlert(error.message, "error")
        }
        setReload(cur => cur+1)
    }

    return (
        <>
        // container
        <div data-aos="fade-left" className="w-full px-0 md:px-8 p-8">
            {/* title bar and etc */}
            <div className="flex justify-end items-center w-full bg-transparent">
                <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-bold flex items-center gap-2">
                        <Tooltip title="مدیریت دست بندیها">
                            <span onClick={() => setState("see categories")} className=" rounded-full hover:border-black cursor-pointer border p-2 block">
                                <SkipPreviousIcon />
                            </span>
                        </Tooltip>
                        مدیریت تعرفه ها
                    </span>
                    <span className="flex md:flex-row flex-col pr-2 md:items-center  gap-2" dir="rtl">
                        <div>
                            <span className="hover:bg-gray-200 cursor-pointer">مخاطب گستر</span> /
                        </div>
                        <div>
                            <span className="hover:bg-gray-200 cursor-pointer">رابط کاربری</span> /
                        </div>
                        <span className="hover:bg-gray-200 cursor-pointer">مشاهده تعرفه ها</span>
                        {/* مخاطب گستر / رابط کاربری / مشاهده ی کاربران */}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-black bg-white h-screen mt-5 rounded-3xl p-4">
            {
                loading ? 
                    <div className="flex items-center justify-center  w-full">
                        <CircleGradient />
                    </div>
                    : 
                    <>
                        <div className="flex flex-col gap-8">
                            <div className="text-right">
                                <span>
                                    تعرفه ها
                                </span>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-96" dir="rtl">
                                {
                                    error ? <div>مشکلی در دریافت تعرفه ها پیش آمده</div>
                                    : loading ? <CircleGradient /> :
                                    data.length && data.map(taarif => <div className="flex gap-2 items-center w-full bg-gray-200 px-4 py-2 rounded-full border border-gray-200 hover:border-telegram cursor-text" dir="rtl">
                                        <ImPriceTag />
                                        {taarif.title}
                                    </div>)
                                    }
                            </div>
                                <Button variant="outlined" sx={{width: "100%"}} startIcon={<AddSharp />} onClick={startAdding} >اضافه کردن تعرفه</Button>
                        </div>
                    </>
                }
            </div>
        </div>
            {
                isAddingTaarig ? <div data-aos="zoom-in" data-aos-duration="100" className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center" onClick={stopAdding}>
                    <div className="flex px-4 gap-4 justify-center flex-col w-full aspect-video bg-white max-w-96 rounded-md shadow-lg shadow-gray-400" onClick={e => e.stopPropagation()}>
                        <TextField label="عنوان تعرفه" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                        <Button variant={newTitle.length > 3 ? "contained" : "outlined"} startIcon={<AddSharp />} onClick={() => newTitle.length > 3 ? addTitle() : customAlert("لطفا عنوان طولانی تری انتخاب کنید", "warn")} >اضافه کردن دسته بندی</Button>
                    </div>
                </div> : ""
            }
        </>
    )
}

export default AddPriceTitle;