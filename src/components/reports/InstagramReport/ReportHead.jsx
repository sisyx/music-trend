import { IoCalendarNumber } from "react-icons/io5";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import { toShamsi } from "../../../lib/timeAndDates";
import { SiCampaignmonitor } from "react-icons/si";
import SumRect from "../../../pages/report/SumRect";
import { IconButton, Tooltip } from "@mui/material";
import { FaFileExcel, FaFilePdf, FaFileZipper, FaLink } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

function ReportHead({isLoading, sums, name, startDate}) {
    return ( 
        // campaign main details
        <div className="flex justify-between items-start w-full gap-8 p-4">
            <div className="md:flex-1 w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-0 p-8 gap-4 gap-y-8">
                {
                    sums === "loading" ? [0,1,2,3,4,5,6].map(_ => <Skeleton className="w-full aspect-video" />)
                    : sums.map((item, index) => <SumRect index={index} xkey={item.name} icon={item.icon} color={item.color} value={item.value} />)
                }
            </div>
            <div className="flex flex-col gap-8">
            {
                isLoading ? <Skeleton width={360} height={50}  />
                : <span  data-aos-duration="1000" className="relative flex flex-col items-center md:text-2xl font-bold rounded-xl p-4 px-16 border border-gray-400 bg-white">
                    <span className="text-3xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                isLoading ? <Skeleton width={360} height={50}  />
                : <span  data-aos-duration="1000" className="relative flex flex-col items-center md:text-2xl font-bold rounded-xl p-4 px-16 border border-gray-400 bg-white">
                    <span className="text-3xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
            {
                isLoading ? <Skeleton width={360} height={50} />
                : <span className="relative flex flex-col items-center md:text-2xl font-bold rounded-xl p-4 px-16 border border-gray-400 bg-white">
                    <span className="text-3xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <FaLink color="#e31e78" />
                    </span>
                    <span className="flex items-center gap-2 text-gray-400">
                    اشتراگ گذاری
                    </span>
                    <div className="flex items-center">
                        <Tooltip title="فایل PDF">
                            <IconButton sx={{color: "#e31e78", "&:hover": {
                                backgroundColor: "#e31e78",
                                color: "white"
                            }}}>
                                <FaFilePdf />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="اشتراک گذاری">
                            <IconButton 
                            onClick={() => copy(location.href)}
                            sx={{color: "#ff00ff", "&:hover": {
                                backgroundColor: "#ff00ff",
                                color: "white"
                            }}}
                            >
                                <FaShareAlt />
                            </IconButton>
                        </Tooltip>
                    </div>
                </span>
            }
            </div>
        </div>
     );
}

export default ReportHead;