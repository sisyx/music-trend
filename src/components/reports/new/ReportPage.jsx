import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import ApexBarChart from "../ApexBarChart";
import ApexLineChart from "../ApexLineChart";
import { BASE_URL } from "../../../config/config"; 

function ReportPage({pageId, className="", onChartsLoad, closeCharts}) {
    const [pageDetail, setPageDetail] = useState({data: {}, error: false, loading: true});

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const ispageIdValid = typeof(pageId) === "string" && pageId.length > 4;
        if (!ispageIdValid) {
            setPageDetail({error: true, loading: false, data: {}});
            return {}
        }
        try {
            const req = await fetch(`${BASE_URL}/api/InstagramApi/getInstaUser?username=${pageId}`);
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            setPageDetail({error: false, loading: false, data: res });
            return res;
        } catch (error) {
            console.error(error);
            setPageDetail({error: true, loading: false, data: {}});
            return {}
        }
    }

    return (
        // outer container
        <div onClick={closeCharts} onMouseOver={onChartsLoad}  className={`${className} ${!!pageDetail.data?.posts ? "scale-100" : "scale-0"}`}>
            {/* Charts */}
            <div className="flex items-center flex-wrap justify-between">
                {
                    pageDetail.data?.posts
                    ? <ApexBarChart data={pageDetail.data.posts.map(post => ({x: String(post.likes_count), y: post.timestamp})).slice(0, 15)} title="لایک" />
                    : ""
                }
                {
                    pageDetail.data?.posts
                    ? <ApexLineChart data={pageDetail.data.posts.map(post => ({x: String(post.comments_count), y: post.timestamp})).slice(0, 15)} title="کامنت" />
                    : ""
                }
            </div>
        </div>
    );
}

export default ReportPage;