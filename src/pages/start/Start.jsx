import { useEffect, useState } from "react";
import { influencers } from "../../constatnts";
import Loading from "../../components/loadings/Loading";
import CircleGradient from "../../components/loadings/CircleGradient";
import Navbar from "../../components/Navbar";
import Timeline from "../../components/start/Timeline";
import { Button } from "@mui/material";
import RightFilters from "../../components/start/RightFilters";
import StartCards from "../../components/start/StartCards";
import Wave from "../../components/Wave";
import styles from './Start.module.css';

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

    const [infs, setInfs] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setInfs(() => influencers)
        }, 3000);
    })

    return ( 
        <div>
            {/* {
            infs.length ? 
                <div>
                    Loaded Dive
                </div>
            : <CircleGradient />
            } */}
            <Navbar />
            <Wave topcolor="#2da5dc" bottomcolor="#00000000" rotate="true" className={`w-screen ${styles.wave}`} />
            <div className="mt-5 overflow-hidden">
                
                {/* top */}
                <div className="flex items-start justify-between pl-12 pr-12 vazirmatn">
                    {/* top left */}
                    <div>
                        <Button>بازگشت</Button>
                    </div>
                    {/* top center */}
                    <Timeline data={timelinedata} />
                    {/* top right */}
                    <div>
                        <div>
                            ایجاد کمپین جدید
                        </div>
                    </div>
                </div>

                {/* main */}
                <div className="w-screen flex justify-center mt-12">
                    {/* inner */}
                    <div className="flex max-w-screen-xl w-screen  min-h-80">
                        {/* main left */}
                        <div className="w-72 shadow-md" 
                        // style={{boxShadow: "5px 5px 5px"}} 
                        >
                            <div className="flex justify-between gap-5 p-2 w-full">
                            <div className="flex-1 text-center text-gray-900 rounded-md border w-fit p-2 cursor-default transition-all duration-500 relative group overflow-hidden">
                                    <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                                    <span>
                                      2542
                                    </span>
                                </div>
                                <div className="flex-1 text-center text-gray-900 rounded-md border w-fit p-2 cursor-default transition-all duration-500 relative group overflow-hidden">
                                    <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                                    <span>
                                        تعداد ناشران
                                    </span>
                                </div>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <span className="text-gray-500">
                                    سبد خرید شما خالی است
                                </span>
                            </div>
                        </div>
                        {/* main center */}
                        <div className="text-white flex-1 ml-4 shadow-md">
                            <StartCards influencers={infs} />
                        </div>
                        {/* main right */}
                        <div className="w-fit">
                            <RightFilters />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Start;