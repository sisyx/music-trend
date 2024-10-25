import { useNavigate, useSearchParams } from "react-router-dom";
import ReportHeader from "../../components/reports/ReportHeader";
import ReportLeftHeader from "../../components/reports/ReportLeftHeader";
import ReportPage from "../../components/reports/ReportPage";
import { getCookie } from "../../functions";
import { useEffect, useState } from "react";
import { root } from "../../constatnts";

function Report() {
    const username = getCookie("username");
    const [params, _setParams] = useSearchParams();
    const navigate = useNavigate();
    const [campDetail, setCampDetail] = useState({error: false, loading: true, data: {}});
    useEffect(() => {
        init()
    }, []);

    useEffect(() => {
        // console.log(campDetail);
        // campDetail.data?.report?.map(page => console.log(page.PageId))
    }, [campDetail])

    async function init() {
        const campname = params.get("campname");
        // console.log(campname);
        if (!campname) {
            navigate(-1);
            return
        }
        try {
            const req = await fetch(`${root}/api/Campaign/GetCampByName?CampName=${campname}`);
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
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
        <div className="flex">
            <ReportLeftHeader />
            <div className="pt-4 w-full flex flex-col gap-24">
                {
                    !campDetail.loading && !campDetail.error ? campDetail.data?.report?.map(page => <ReportPage postDetails={page.Page} pageId={page.PageId} yourPostLink={page.Page.PostLink} />) : ""
                }
            </div>
        </div>
        </>
     );
}

export default Report;