import { useNavigate, useSearchParams } from "react-router-dom";
import ReportHeader from "../../components/reports/ReportHeader";
import ReportLeftHeader from "../../components/reports/ReportLeftHeader";
import ReportPage from "../../components/reports/ReportPage";
import { getCookie } from "../../functions";
import { useEffect, useState } from "react";
import { root } from "../../constatnts";

function Report() {
    const username = getCookie("username");
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [campDetail, setCampDetail] = useState({error: false, loading: true, data: {}});
    useEffect(() => {
        init()
    }, []);

    useEffect(() => {
        console.log(campDetail);
        // campDetail.data?.report?.map(page => console.log(page.PageId))
    }, [campDetail])

    async function init() {
        const campname = params.get("campname");
        const campid = params.get("id");
        // console.log(campname);
        if (!campname && !campid) {
            navigate(-1);
            return
        }
        try {
            let req;
            var res;
            const url = campname ? `${root}/api/Campaign/GetCampByName?CampName=${campname}` : campid ?  `${root}/api/Campaign/GetCampaignByCampID?campaignID=${campid}` : undefined;
            req = await fetch(url);
            if (!req.ok) throw new Error(req.statusText);
            res = await req.json();
            res = campname ? res : res[0]
            setCampDetail(_ => ({loading: true, error: false, data: res}));

            
            if (res.id) {
                const req2 = await fetch(`${root}/api/Pages/GetEditedPageAndOriginalBuCampID?campaignId=${res.id}`);
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
        <>
        <ReportHeader username={username} />
        <div className="flex h-screen">
            <ReportLeftHeader />
            <div className="pt-4 w-full flex flex-col gap-24 pb-96 h-full overflow-scroll">
                {
                    !campDetail.loading && !campDetail.error ? campDetail.data?.report?.map(page => <ReportPage postDetails={page.Page} pageId={page.PageId} yourPostLink={page.Page.PostLink} />) : ""
                }
            </div>
        </div>
        </>
     );
}

export default Report;