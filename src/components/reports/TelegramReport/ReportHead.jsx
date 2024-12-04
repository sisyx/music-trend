import { IoCalendarNumber } from "react-icons/io5";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import { toShamsi } from "../../../lib/timeAndDates";
import { SiCampaignmonitor } from "react-icons/si";
import SumRect from "../../../pages/report/SumRect";

function ReportHead({isLoading, sums, name = "کمپین یک", startDate = "2024-11-16T07:24:37.281"}) {
    return (
            <div className="flex justify-between w-full gap-4 py-8 px-4">
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex-1 max-w-xl flex items-center gap-4">
                        {
                            sums === "loading" ? [0,1].map(_ => <Skeleton className="w-full aspect-video h-full" />)
                            : sums.map((item, index) => <SumRect index={index} xkey={item.name} icon={item.icon} color={item.color} value={item.value} />)
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-stretch gap-8">
                {
                    isLoading ? <Skeleton width={450} height={50}  />
                    : <span  data-aos-duration="1000" className="relative flex flex-col items-center justify-center md:text-2xl font-bold rounded-xl flex-1 py-4 px-32 border border-gray-400 bg-white">
                        <span className="text-3xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-telegram">
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
                {
                    isLoading ? <Skeleton width={450} height={50}  />
                    : <span  data-aos-duration="1000" className="relative flex flex-col items-center justify-center md:text-2xl font-bold rounded-xl flex-1 py-4 px-32 border border-gray-400 bg-white">
                        <span className="text-3xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-telegram">
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
            </div>
     );
}

export default ReportHead;