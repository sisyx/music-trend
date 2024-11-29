import { useEffect } from "react";
import ReportShotPage from "./ReportShotPage";

function ReportShots({ pages, campId }) {
    return (
        <div className="w-full max-w-7xl grid grid-cols-3 gap-4 justify-items-center">
            {
                pages.length && pages.map(page => <ReportShotPage pageName={page.ShowName} campId={campId} pageNId={page.Id} />)
            }
        </div>
    );
}

export default ReportShots;