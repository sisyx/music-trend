import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Wave from "../../components/Wave";
import OurServices from "../../components/aboutus/OurServices";
import { getOffsetTop } from "../../funcs";
import FlowbiteChart from "../../components/aboutus/FlowbiteChart";
import Chart from "../../components/home/Chart";
import AboutusChart from "../../components/aboutus/AbourusChart";

function AboutUsPage() {
    return ( 
        <>
        <Navbar />
            <Wave topcolor="#2da5dc" bottomcolor="#00000000" rotate="true" className="w-screen mt-12" />
        <div className="flex flex-col justify-center items-center vazirmatn pt-28 pb-28">
            {/* main content */}
            <div className="flex items-center justify-center  max-w-screen-xl w-screen">
                {/* left */}
                <div className="w-1/2">
                    <div>
                        <img src="/src/assets/images/services.png" alt="" />
                    </div>
                    {/* left bottom */}
                    <div>
                        <div className="flex items-center gap-2 noto-sans-kr font-black text-4xl border border-black w-fit p-4 rounded-2xl bg-sbuttonanime bg-ibuttonanime hover:bg-pbuttonanime hover:text-white hover:border-transparent cursor-default transition-all duration-500">
                            15+ 
                            <span className="text-2xl">
                                Years
                            </span>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="w-1/2">
                    {/* title */}
                    <div className="text-4xl text-primary font-black text-right mb-8">۱۵ سال تجربه در تبلیغات دیجیتال</div>
                    {/* text */}
                    <div className="text-right">
                    در "مخاطب گستر"، با ۱۵ سال تجربه در زمینه تبلیغات دیجیتال، ما یکی از پیشروترین و قابل اعتمادترین پلتفرم‌های تبلیغاتی هستیم. ما با چالش‌ها و نیازهای مشتریان آشنا هستیم و همواره بهترین راه‌حل‌ها و خدمات را ارائه می‌دهیم.
                    </div>
                </div>
            </div>
        </div>
        <OurServices />
        <Wave topcolor="rgb(243, 244, 246)" bottomcolor="#fff" rotate="true" className="w-screen" />
        <div className="flex flex-col justify-center items-center vazirmatn bg-white pt-28 pb-28">
            {/* main content */}
            <div className="grid grid-cols-2 gap-4 items-center justify-center  max-w-screen-xl w-screen">
                {/* left */}
                <div className="w-full">
                    {/* title */}
                    <div className="text-4xl text-primary font-black text-right mb-8">امنیت و اعتماد</div>
                    {/* text */}
                    <div className="text-justify" dir="rtl">
                    ما در "مخاطب گستر" به اهمیت اعتماد و امنیت در همکاری‌های تبلیغاتی واقف هستیم. به همین دلیل، تعهد داریم که:
                    <br />
- امنیت کامل: استفاده از پروتکل‌های امنیتی پیشرفته برای حفاظت از اطلاعات و داده‌های شما
                    <br />
- دقت و شفافیت: ارائه گزارش‌های دقیق و شفاف از هر کمپین تبلیغاتی.
                    <br />
- اطمینان خاطر: همکاری با رسانه‌ها و اینفلوئنسرهای معتبر و تأیید شده، تا شما با اطمینان خاطر تبلیغات خود را انجام دهید
                    </div>
                </div>
                {/* right */}
                <div className="w-full flex flex-col items-center">
                    <img src="/src/assets/images/aboutus1.jpg" />
                </div>
            </div>
        </div>
        <Wave topcolor="#fff" bottomcolor="#111827" />
        <Footer  />
        </>
     );
}

export default AboutUsPage;