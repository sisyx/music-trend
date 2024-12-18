import { useNavigate, useSearchParams } from "react-router-dom";
import ReportHeader from "../../components/reports/ReportHeader";
import ReportRightHeader from "../../components/reports/ReportRightHeader";
import { getCookie } from "../../lib/cacheAndStorage";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import ReportHead from "../../components/reports/InstagramReport/ReportHead";
import { toKFormat } from "../../utils/numbers";
import ReportTable from "../../components/reports/InstagramReport/ReportTable";
import { BASE_URL } from "../../config/config";
import { FaCommentAlt, FaHeartbeat } from "react-icons/fa";
import { MdOutlineInsights } from "react-icons/md";
import { TbProgressCheck } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";
import ReportShots from "../../components/reports/new/ReportShots";
import Skeleton from "react-loading-skeleton";
import ReportChart from "../../components/reports/InstagramReport/ReportChart";

const tmpSums = [
    {
        key: "plike",
        dataBaseKey: "PostLikes",
        name: "لایک پست",
        value: toKFormat(0),
        icon: <FaHeartbeat />,
        color: "#f05"
    },
    {
        key: "pcomment",
        dataBaseKey: "PostLikes",
        name: "کامنت پست",
        value: toKFormat(0),
        icon: <FaCommentAlt />,
        color: "#2da5dc"
    },
    {
        key: "pview",
        dataBaseKey: "PostViews",
        name: "ویو پست",
        value: toKFormat(0),
        icon: <IoEye />,
        color: "#e31e78"
    },
    {
        key: "pimp",
        dataBaseKey: "PostImpertion",
        name: "ایمپرشن پست",
        value: toKFormat(0),
        icon: <MdOutlineInsights />,
        color: "#5e298e"
    },
    {
        key: "sview",
        dataBaseKey: "StoryViews",
        name: "ویو استوری",
        value: toKFormat(0),
        icon: <TbProgressCheck />,
        color: "#f12911"
    },
    {
        key: "simp",
        dataBaseKey: "StoryImpertion",
        name: "ایمپرشن استوری",
        value: toKFormat(0),
        icon: <GiProgression />,
        color: "#f26c13"
    },
    {
        key: "totalPubs",
        dataBaseKey: "x",
        name: "تعداد ناشران",
        value: toKFormat(0),
        icon: <FaPeopleRobbery />,
        color: "#f4a919"
    },
]

function InstagramReport() {
    const [params, _setParams] = useSearchParams();
    const navigate = useNavigate();
    const [sums, setSums] = useState(tmpSums)
    const [campDetail, setCampDetail] = useState({error: false, loading: true, data: {}});
    useEffect(() => {
        init()
    }, []);

    async function init() {
        const campname = params.get("campname");
        const campid = params.get("id");
        if (!campname && !campid) {
            navigate(-1);
            return
        }
        try {
            let req;
            var res;
            const url = campname ? `${BASE_URL}/api/Campaign/GetCampByName?CampName=${campname}` : campid ?  `${BASE_URL}/api/Campaign/GetCampaignByCampID?campaignID=${campid}` : undefined;
            req = await fetch(url);
            if (!req.ok) throw new Error(req.statusText);
            res = await req.json();
            res = campname ? res : res[0]
            setCampDetail(_ => ({loading: true, error: false, data: res}));

            
            if (res.id) {
                const req2 = await fetch(`${BASE_URL}/api/Pages/GetEditedPageAndOriginalBuCampID?campaignId=${res.id}`);
                if (!req2.ok) throw new Error(req2.statusText);
                const res2 = await req2.json();

                const reportPages = [];
                for (let i = 0; i < res2.length; i++) {
                    const thisPage = res2[i];
                    if (thisPage.PageId && !reportPages.find(rpage => thisPage.PageId == rpage.PageId)) {
                        reportPages.push(thisPage);
                    }
                }

                setCampDetail(cur => ({loading: false, error: false, data: {...cur.data, report: reportPages}}))
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }
    
    return ( 
        <div className="pt-4 w-full flex flex-col items-center gap-24 pb-96 overflow-scroll">
            {/* campaign main details */}
            <ReportHead sums={campDetail.loading ? "loading" : sums} startDate={campDetail.data?.startDate || ""} name={campDetail.data?.name || ""} isLoading={campDetail.loading} />
            <div className="md:w-3/4 w-11/12">
            {
                (!campDetail.loading && !campDetail.error)
                ? <ReportTable setSums={setSums} report={campDetail.data.report || [] } />
                : ""
            }
            {/* Charts */}
            <div className="w-full max-w-7xl">
                {
                    campDetail.loading ? <Skeleton count={3} width={300} height={200} />
                    : campDetail.data?.report ? 
                    campDetail.data.report.map(page => <ReportChart pageId={page.PageId} />)
                    : <code>Error Loading Charts</code>
                }
            </div>
            {/* Campaign Screen Shots */}
            {
                (!campDetail.loading && !campDetail.error)
                ? <ReportShots campId={campDetail.data?.id} pages={campDetail.data?.report.reduce((acc, cur) => [...acc, cur.Page] , [])} />
                : ""
            }
            </div>
        </div>
     );
}

export default InstagramReport;