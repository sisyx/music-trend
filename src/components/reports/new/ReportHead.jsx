import { IoCalendarNumber } from "react-icons/io5";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import { toShamsi } from "../../../lib/timeAndDates";
import { SiCampaignmonitor } from "react-icons/si";
import SumRect from "../../../pages/report/SumRect";

function ReportHead({isLoading, sums, name, startDate}) {
    return ( 
        // <div className="pt-4 w-full flex flex-col gap-24 pb-96 h-full overflow-scroll">
            // campaign main details
            <div className="flex justify-between items-start w-full gap-8 p-4">
                {
                    isLoading ? <Skeleton width={360} height={50}  />
                    : <span  data-aos-duration="1000" className="relative flex flex-col items-center md:text-2xl font-bold rounded-xl p-4 px-16 border border-gray-400">
                        <span className="text-3xl bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <SiCampaignmonitor />
                        </span>
                        <span className="flex items-center gap-2 text-gray-400">
                            نام کمپین
                        </span>
                        <span className="w-full text-right">
                            {name}
                        </span>
                    </span>
                }
                <div className="md:flex-1 w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-0 p-8 gap-4">
                    {
                        sums === "loading" ? [0,1,2,3,4,5,6].map(_ => <Skeleton className="w-full aspect-video" />)
                        : sums.map((item, index) => <SumRect index={index} xkey={item.name} value={item.value} />)
                    }
                </div>
                {/* {
                    isLoading ? <Skeleton circle width={240} height={240} />
                    : <div data-aos="zoom-in" data-aos-duration="1000">
                            <img src="/logo.png" className="md:w-48 w-32" alt="" />
                    </div>
                } */}
                {
                    isLoading ? <Skeleton width={360} height={50}  />
                    : <span  data-aos-duration="1000" className="relative flex flex-col items-center md:text-2xl font-bold rounded-xl p-4 px-16 border border-gray-400">
                        <span className="text-3xl bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <IoCalendarNumber />
                        </span>
                        <span className="flex items-center gap-2 text-gray-400">
                        تاریخ شروع
                        </span>
                        <span className="w-full text-right">
                            {toShamsi(startDate)}
                        </span>
                    </span>
                }
            </div>
        // </div>
     );
}

export default ReportHead;
// : <div data-aos="zoom-in" data-aos-duration="1500" className="relative flex flex-col items-center gap-3 md:text-2xl font-bold before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:-translate-x-full before:block before:w-16 md:before:w-24 before:h-1 before:bg-gray-400 after:content-[''] after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:translate-x-full after:block after:w-16 md:after:w-24 after:h-1 after:bg-gray-400 before:transition-all before:duration-200 border-y border-y-transparent hover:border-y-gray-400">
//     <span className="flex items-center gap-2 text-gray-400">
//         تاریخ شروع
//         <IoCalendarNumber />
//     </span>
//     {toShamsi(startDate)}
// </div>