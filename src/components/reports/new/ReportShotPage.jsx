import { useEffect, useState } from "react";
import { getShotData, getShots } from "../../../functions";
import { getFileExtension } from "../../../utils/files";
import CircleGradient from "../../loadings/CircleGradient";
import useFetch from "../../../hooks/useFetch";

function ReportShotPage({campId, pageNId, pageName}) {
    const [shotsUrls, setShotsUrls] = useState([]);
    const [shotsData, setShotsData] = useState([]);
    const [newShotStatus, setNewShotStatus] = useState({loading: true, error: false});

    async function initShots() {
        const shots = await getShots(campId, pageNId);
        
        setShotsUrls(() => shots);
    }

    async function downloadShots() {
        const xshotsUrls = shotsUrls;
        for (let i = 0; i < xshotsUrls.length; i++) {
            setNewShotStatus({loading: true, error: false});
            const tmpShotData = await getShotData(xshotsUrls[i].filePath, getFileExtension(xshotsUrls[i].fileName));
            // add this shot data to all shots datas
            setShotsData(cur => [...cur, {data: tmpShotData, fileName: xshotsUrls[i].fileName}]);
            setNewShotStatus({loading: false, error: false});
        }
        setNewShotStatus({loading: false, error: false});
    }

    useEffect(() => {
        initShots();
    }, []);

    useEffect(() => {
        downloadShots();
    }, [shotsUrls])

    return (
        <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg w-full hover:shadow-black hover:shadow-lg transition-all duration-100">
            <span dir="rtl">
                اسکرین شات های {pageName}
            </span>
            {
                shotsData.length ? shotsData.map((shot, index) => 
                    <div className="flex flex-col items-center gap-2 pb-2 w-full rounded-md hover:shadow-xl hover:shadow-black shadow-black shadow-lg overflow-hidden">
                        <img src={shot.data} alt="shot" key={`the-shot${index}`} />
                        <span>{shot.fileName}</span>
                    </div>
                ) 
                : newShotStatus.loading ? <CircleGradient /> : <span>هیچ شاتی برای این پیج یافت نشد</span>
            }
            {
                newShotStatus.error ? <code>مشکلی در دریافت فایل به وجود آمده.</code> : ""
            }
        </div>
     );
}

export default ReportShotPage;