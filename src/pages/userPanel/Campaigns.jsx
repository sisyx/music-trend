import Skeleton from "react-loading-skeleton";
import UPnaelLayout from "../../layouts/UPnaelLayout";
import { useEffect, useState } from "react";
import { getCookie } from "../../lib/cacheAndStorage";
import { BASE_URL } from "../../config/config";
import UCampaign from "../../components/userPanel/UCampaign";

function Campaigns() {
    const [camps, setCamps] = useState({error: false, loading: true, data: {}});

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const userId = getCookie("id");
        
        try {
            const req = await fetch(`${BASE_URL}/api/Campaign/GetCampaignByUserId?userId=${userId}`);
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            ;
            setCamps({error: false, loading: false, data: res});
        } catch(error) {
            setCamps({error: true, loading: false, data: {}});
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
                    <div className={`w-full py-8 grid ${camps.error ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
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
                            camps.data?.map(camp => <UCampaign name={camp.name} startDate={camp.startDate} id={camp.id} />)
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