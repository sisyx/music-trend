import CardsSwiper from "../../components/CardsSwiper";
import { toShamsi } from "../../functions";
import SumRect from "./SumRect";
import PagesStatsTable from "./PagesStatsTable";
import InstaReportChart from "../../components/reports/InstaReportChart";
import { AiFillLike } from "react-icons/ai";

function CampaignMainInfo({campaign, slides, sums = {}, influs = []}) {
    return ( 
        <div className="flex gap-16 md:gap-0 flex-col md:flex-row md:p-5 md:pr-0">
            <div className={`flex flex-col gap-0 rounded-3xl md:shadow-xl md:shadow-gray-500 bg-white`}>
                {/* Camp Image / Site Logo */}
                <div className="w-full flex items-center justify-end md:justify-center mb-2">
                    <img src="/logo.png" className="w-24 md:w-auto md:max-w-[420px] rounded-full md:aspect-video object-contain object-center cursor-pointer" />
                </div>
                {/* camp name */}
                <div className={`relative flex md:flex-row flex-col gap-2 bg-white text-gray-600 p-2 md:py-8`} dir="rtl">
                    <span className="md:absolute top-0 right-2 text-sm">اسم کمپین: </span>
                    <span className="md:text-2xl font-extrabold">
                        {campaign?.name}
                    </span>
                </div>
                <div className={`relative flex md:flex-row flex-col gap-2 bg-gray-100 text-gray-600 p-2 md:py-8`} dir="rtl">
                    <span className="md:absolute top-0 right-2 text-sm">تاریخ شروع: </span>
                    <span className="md:text-2xl font-extrabold">
                        {toShamsi(campaign?.startDate)}
                    </span>
                </div>
                <div className={`relative flex md:flex-row flex-col gap-2 bg-white text-gray-600 p-2 md:py-8`} dir="rtl">
                    <span className="md:absolute top-0 right-2 text-sm">مجموع لایک ها</span>
                    <span className="md:text-2xl font-extrabold flex items-center gap-1">
                        <AiFillLike className="text-telegram" />
                        <span>
                            {sums?.postLikes} 
                        </span>
                    </span>
                </div>
                {/* sums */}
                <div className='flex flex-col gap-7 items-center justfy-center backdrop:blur-md p-10 px-14 rounded-3xl'>
                    <CardsSwiper slides={slides} />
                    <div className='text-xl'>
                        دستاورد ها در یک نگاه
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center m-4 mt-0 h-fit bg-white rounded-xl overflow-hidden">
                <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 pt-24 gap-4 p-8 w-full bg-white relative"> 
                    <span className=" absolute top-8 right-4 text-3xl font-bold">دستاورد ها</span>
                    <SumRect xkey="لایک پست" value={sums?.postLikes} />
                    <SumRect xkey="بازدید پست" value={sums?.postViews} />
                    <SumRect xkey="کامنت پست" value={sums?.postComments} />
                    <SumRect xkey="ایمپرشن پست" value={sums?.postImpertion} />
                    <SumRect xkey="بازدید استوری" value={sums?.storyViews} />
                    <SumRect xkey="ایمپرشن استوری" value={sums?.storyImprertion} />
                </div>
                <PagesStatsTable data={influs} />
                <div className="h-8"></div>
                <InstaReportChart />
            </div>
        </div>
     );
}

export default CampaignMainInfo;