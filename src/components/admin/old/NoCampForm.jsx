import { TextField } from "@mui/material";
import { useState } from "react";
import styles from './NoCampForm.module.css';
import CircleGradient from "../loadings/CircleGradient";
import { createCampaign } from "../../functions";

function NoCampForm({ isHide, dispatch }) {

    const [type, setType] = useState("");
    const [campname, setCampname] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false);

    function selectType(xtype) {
        setType(xtype);
    }

    async function handleCreateFirstCampaign(event) {
        event.preventDefault();
        setIsLoading(true);
        await createCampaign(campname, type)
        // setTimeout(() => {
        dispatch({type: "add", payload: {name: campname, type: type, id: 1}})
        setIsDone(true);
        setIsLoading(false);
        // }, 3000)
    }

    return ( 
        <div className={`flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHide ? "scale-0" : "scale-1"}`}>
            <div className="flex flex-col w-full h-screen items-center justify-center gap-10">
                <div className={`flex flex-col items-center justify-center gap-10 bg-slate-800 p-5 pt-10 rounded-3xl relative overflow-hidden ${isHide ? "scale-0" : "scale-1"}`}>
                    <h1 className={`text-4xl cursor-pointerl`}>
                        <span className={`transition-all duration-500 ${!!type ? styles.nofontsize : ""}`}>
                            چه کمپینی میخواهید ایجاد کنید؟
                        </span>
                        <span className={`transition-all duration-500 ${!!type ? "" : styles.nofontsize}`}>
                            لطفا اسم کمپین را وارد کنید
                        </span>
                    </h1>
                    {/* cards */}
                    <div className={`flex gap-5 w-full ${!!type ? "hidden" : ""}`}>
                        {/* card */}
                        <div 
                            className="flex flex-col gap-5 items-center bg-black p-5 rounded-3xl flex-1 border-4 border-black hover:border-primary cursor-pointer"
                            onClick={() => selectType("instagram")}
                        >
                            {/* card title */}
                            <div className="text-2xl text-center">اینستاگرام</div>
                            {/* card image */}
                            <div>
                                <img className="max-w-28" src="/src/assets/images/nocamp-type-insta.png" alt=""  />
                            </div>
                        </div>

                        {/* card */}
                        <div 
                            className="flex flex-col items-center gap-5 bg-black p-5 rounded-3xl flex-1 border-4 border-black hover:border-telegram cursor-pointer"
                            onClick={() => selectType("telegram")}
                        >
                            {/* card title */}
                            <div className="text-2xl text-center">تلگرام</div>
                            {/* card image */}
                            <div>
                                <img className="max-w-28" src="/src/assets/images/nocamp-type-telegram.png" alt=""  />
                            </div>
                        </div>
                    </div>

                    {/* Input */}
                    <div dir="rtl" className={`w-full flex flex-col gap-5 transition-all duration-500 ${!!type ? "" : "-translate-x-full scale-x-0 absolute"}`}>
                        <label htmlFor="campaign name"></label>
                        <input 
                            className={`pr-5 bg-transparent outline-none border p-2 w-full rounded disabled:opacity-50 ${type === "instagram" ? "focus:border-primary" : "focus:border-telegram"}`}
                            placeholder="اسم کمپین جدید"
                            name="campaign name" 
                            type="text" 
                            onChange={event => setCampname(event.target.value)}
                            value={campname}
                            disabled={isLoading}
                        />
                        <button
                            onClick={(event) => handleCreateFirstCampaign(event)}
                            disabled={!(campname.length >= 3) || isLoading}
                            className={`"wfull p-5 pt-2 pb-2 flex items-center justify-center gap-2 rounded disabled:opacity-50 hover:opacity-80 active:opacity-85 transition-all duration-75 ${type === "instagram" ? "bg-primary" : "bg-telegram"}`}
                        >
                            ایجاد کمپین
                            {
                                isLoading &&
                                <CircleGradient  />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NoCampForm;