import Skeleton from "react-loading-skeleton";
import UPnaelLayout from "../../layouts/UPnaelLayout";
import { useEffect, useState } from "react";
import { getCookie, toShamsi } from "../../functions";
import { root } from "../../constatnts";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LuCalendarCheck } from "react-icons/lu";

function Campaigns() {
    const [camps, setCamps] = useState({error: false, loading: true, data: {}});

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const userId = getCookie("id");
        
        try {
            const req = await fetch(`${root}/api/Campaign/GetCampaignByUserId?userId=${userId}`);
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            console.log(res);
            setCamps({error: false, loading: false, data: res});
        } catch(error) {
            console.error(error);
        }
    }

    return ( 
        <UPnaelLayout>
            <div data-aos="fade-up" className="w-full h-full flex flex-col items-center overflow-y-scroll pb-48">
                <div>
                    <img src="/logo.png" alt="Logo" className="w-80" />
                </div>
                <div className="text-4xl md:text-6xl font-bold text-gray-900">
                    کمپین ها
                </div>
                <div className="flex flex-col items-center md:w-3/4 w-full px-4 p-4 mt-16">
                    <div className="md:text-3xl">
                        کمپین های شما
                    </div>
                    <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            camps.loading 
                            ? <>
                                <Skeleton className="w-full h-32 rounded-xl" />
                                <Skeleton className="w-full h-32 rounded-xl" />
                                <Skeleton className="w-full h-32 rounded-xl" />
                                <Skeleton className="w-full h-32 rounded-xl" />
                            </>
                            : camps.error ? <div className="w-full text-center p-4 text-3xl font-bold">
                                مشکلی در دریافت کمپین ها پیش آمده
                            </div> : 
                            camps.data?.map(camp => 
                            <div className="shadow-lg relative flex flex-col items-center justify-between gap-2 bg-gray-200 pt-8 rounded-xl overflow-hidden" dir="rtl">
                                <div className="flex justify-between w-full px-4">
                                    <div className="flex flex-col">
                                        <span className="absolute top-2 flex items-center gap-4  text-sm">
                                            <span className="text-gray-400">
                                                اسم کمپین
                                            </span>
                                        </span>
                                        <span className="md:text-xl text-sm font-bold">{camp.name}</span>
                                    </div>
                                    <span className="p-1 rounded-sm text-gray-900 flex items-center gap-2">
                                        <span className="text-sm">
                                            {toShamsi(camp.startDate)}
                                        </span>
                                        <LuCalendarCheck className="md:text-2xl text-base" />
                                    </span>
                                </div>
                                <Link to={`/report?campname=${camp.name}`} className="w-full">
                                    <Button sx={{width: "100%"}} variant="contained">مشاهده کمپین</Button>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
                <div className="md:w-3/4 w-full border-t border-black my-8" />
                {/* what are campaigns */}
                <div className="md:w-3/4 w-full px-4 py-4 flex flex-col gap-4" dir="rtl">
                    {/* title 1 */}
                    <span className="md:text-5xl text-xl font-bold">لورم ایپسوم</span>
                    {/* text 1 */}
                    <span className="md:leading-10 leading-5 text-justify tracking-wide text-sm md:text-xl">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </span>
                </div>
                <div className="md:w-3/4 w-full px-4 py-4 flex flex-col gap-4" dir="rtl">
                    {/* title 2 */}
                    <span className="md:text-5xl text-xl font-bold">لورم ایپسوم</span>
                    {/* text 2 */}
                    <span className="md:leading-10 leading-5 text-justify tracking-wide text-sm md:text-xl">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                    </span>
                </div>
            </div>
        </UPnaelLayout>
     );
}

export default Campaigns;