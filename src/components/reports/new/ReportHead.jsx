import { IoCalendarNumber } from "react-icons/io5";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import { toShamsi } from "../../../functions";

function ReportHead({isLoading, name, startDate}) {
    return ( 
        // <div className="pt-4 w-full flex flex-col gap-24 pb-96 h-full overflow-scroll">
            // campaign main details
            <div className="flex flex-col items-center justify-center gap-8">
                {
                    isLoading ? <Skeleton circle width={240} height={240} />
                    : <div>
                            <img src="/logo.png" className="md:w-60 w-32" alt="" />
                    </div>
                }
                {
                    isLoading ? <Skeleton width={360} height={50}  />
                    : <span className="relative flex flex-col items-center gap-3 md:text-2xl font-bold before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:-translate-x-full before:block before:w-12 md:before:w-24 before:h-1 before:bg-gray-400 after:content-[''] after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:translate-x-full after:block after:w-12 md:after:w-24 after:h-1 after:bg-gray-400 hover:after:w-1 hover:after:-right-12 md:hover:after:-right-24 hover:after:h-full after:transition-all after:duration-200 hover:before:w-1 hover:before:-left-12 md:hover:before:-left-24 hover:before:h-full before:transition-all before:duration-200 border-y border-y-transparent hover:border-y-gray-400">
                        <span className="flex items-center gap-2 text-gray-400">
                            نام کمپین
                            <TbBrandCampaignmonitor />
                        </span>
                        {name}
                    </span>
                }
                {
                    isLoading ? <Skeleton width={360} height={50}  />
                    : <div className="relative flex flex-col items-center gap-3 md:text-2xl font-bold before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:-translate-x-full before:block before:w-16 md:before:w-24 before:h-1 before:bg-gray-400 after:content-[''] after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:translate-x-full after:block after:w-16 md:after:w-24 after:h-1 after:bg-gray-400 hover:after:w-1 hover:after:-right-12 md:hover:after:-right-24 hover:after:h-full after:transition-all after:duration-200 hover:before:w-1 hover:before:-left-12 md:hover:before:-left-24 hover:before:h-full before:transition-all before:duration-200 border-y border-y-transparent hover:border-y-gray-400">
                        <span className="flex items-center gap-2 text-gray-400">
                            تاریخ شروع
                            <IoCalendarNumber />
                        </span>
                        {toShamsi(startDate)}
                    </div>
                }
            </div>
        // </div>
     );
}

export default ReportHead;