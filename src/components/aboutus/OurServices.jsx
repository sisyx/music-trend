import { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Wave from "../Wave";
import { getOffsetTop, isElementInViewport } from "../../funcs";
import AboutusChart from "./AbourusChart";

function OurServices() {
    const element = useRef();
    let interval;
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (isElementInViewport(element.current)) {
                // element.current.classList.add("scale-x-100")
                element.current.classList.remove("w-0")
            }
        })
    })

    return ( 
        <>
        <Wave topcolor="#fff" bottomcolor="rgb(243, 244, 246)" rotate="true" className="w-screen" />
        <div className="flex flex-col justify-center items-center vazirmatn bg-gray-100 pt-28 pb-28" ref={element}>
            {/* main content */}
            <div className="grid grid-cols-2 gap-4 items-center justify-center  max-w-screen-xl w-screen">
                {/* left */}
                <div className="w-full">
                    {/* title */}
                    <div className="text-4xl text-primary font-black text-right mb-8">هدف ما در مخاطب گستر</div>
                    {/* text */}
                    <div className="text-right rtl" dir="rtl">
                    هدف ما در "مخاطب گستر" این است که به کسب‌وکارها کمک کنیم تا با استفاده از رسانه‌های تبلیغاتی و اینفلوئنسرهای معتبر، دسترسی به مخاطبان هدف خود را گسترش دهند و بازدهی تبلیغات خود را افزایش دهند. خدمات ما شامل:<br/>
<b>
- معرفی رسانه‌های تبلیغاتی
</b>
: ارائه لیست جامعی از پابلیک پیج‌های اینستاگرام، اینفلوئنسرها و بلاگرهای هر حوزه.<br/>
<b>
- مدیریت محتوا
</b>
: فراهم کردن امکان آپلود و مدیریت آسان محتوای تبلیغاتی.<br/>
<b>
- گزارش‌دهی حرفه‌ای
</b>
: ارائه گزارش‌های دقیق و شفاف از عملکرد تبلیغات با استفاده از نمودارها و تحلیل‌های جامع.<br/>
<b>
- پشتیبانی و مشاوره
</b>
: ارائه مشاوره‌های تخصصی و پشتیبانی مستمر برای بهبود استراتژی‌های تبلیغاتی شما.<br/>
                    </div>
                </div>
                {/* right */}
                <div className="w-full flex flex-col items-center">
                    <AboutusChart />
                </div>
                    {/* left bottom */}
                    <div className="flex items-start gap-2 h-full">
                        <div className="font-black text-right border rounded-xl border-black w-fit p-4 cursor-default transition-all duration-500 relative group overflow-hidden">
                            <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                            <span className="z-10">
                                معرفی رسانه‌های تبلیغاتی
                            </span>
                        </div>
                        <div className="font-black text-right border rounded-xl border-black w-fit p-4 cursor-default transition-all duration-500 relative group overflow-hidden">
                            <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                            <span className="z-10">
                                مدیریت محتوا
                            </span>
                        </div>
                        <div className="font-black text-right border rounded-xl border-black w-fit p-4 cursor-default transition-all duration-500 relative group overflow-hidden">
                            <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                            <span className="z-10">
                                گزارش دهی حرفه ای
                            </span>
                        </div>
                        <div className="font-black text-right border rounded-xl border-black w-fit p-4 cursor-default transition-all duration-500 relative group overflow-hidden">
                            <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                            <span className="z-10">
                                پشتیبانی و مشاوره
                            </span>
                        </div>
                        {/* <div className="flex items-center gap-2 font-black text-right border border-black w-fit p-4 rounded-2xl bg-sbuttonanime bg-ibuttonanime hover:bg-pbuttonanime hover:text-white hover:border-transparent cursor-default transition-all duration-500">
                        مدیریت محتوا
                        </div>
                        <div className="flex items-center gap-2 font-black text-right border border-black w-fit p-4 rounded-2xl bg-sbuttonanime bg-ibuttonanime hover:bg-pbuttonanime hover:text-white hover:border-transparent cursor-default transition-all duration-500">
                        گزارش‌دهی حرفه‌ای
                        </div>
                        <div className="flex items-center gap-2 font-black text-right border border-black w-fit p-4 rounded-2xl bg-sbuttonanime bg-ibuttonanime hover:bg-pbuttonanime hover:text-white hover:border-transparent cursor-default transition-all duration-500">
                        پشتیبانی و مشاوره
                        </div> */}
                    </div>
            </div>
        </div>
        </>
     );
}

export default OurServices;