 import { Button } from "@mui/material";
import { useEffect } from "react";
import { LuCalendarCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { toShamsi } from "../../lib/timeAndDates";
import useFetch from "../../hooks/useFetch";
import CircleGradient from "../loadings/CircleGradient";

function UCampaign({ name, startDate, id }) {

    const {error, loading, data} = useFetch(`/api/Campaign/GetRejectedPages?campaignId=${id}`, {});

    useEffect(() => {
        console.log(id);
    }, [id]);

    return ( 
        <div className="shadow-lg relative flex flex-col items-center justify-between gap-2 bg-gray-200 pt-8 rounded-xl overflow-hidden" dir="rtl">
            <div className="flex justify-between w-full px-4">
                <div className="flex flex-col">
                    <span className="absolute top-2 flex items-center gap-4  text-sm">
                        <span className="text-gray-400">
                            اسم کمپین
                        </span>
                    </span>
                    <span className="md:text-xl text-sm font-bold">{name}</span>
                </div>
                <span className="p-1 rounded-sm text-gray-900 flex items-center gap-2">
                    <span className="text-sm">
                        {toShamsi(startDate)}
                    </span>
                    <LuCalendarCheck className="md:text-2xl text-base" />
                </span>
            </div>
            <div className="w-full p-4">
                <div className="w-full bg-white py-4 rounded-lg">
                {
                    data.length ? <div className="text-center">پیج های تایید نشده</div> : ""
                }
                {
                    error ? <code>Error</code>
                    : loading ? <div className="w-full flex items-center justify-center">
                        <CircleGradient />
                    </div>
                    : data ? data.map(item => 
                        <div className="w-full px-4">
                        <div className="bg-gray-100 p-2 rounded-md" dir="ltr">
                            {item.pageId}
                        </div>
                    </div>
                    ) : ""
                }
                </div>
            </div>
            <Link to={`/report?campname=${name}`} className="w-full">
                <Button sx={{width: "100%"}} variant="contained">مشاهده کمپین</Button>
            </Link>
        </div>
     );
}

export default UCampaign;