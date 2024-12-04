import { Outlet } from "react-router-dom";
import ReportHeader from "../components/reports/ReportHeader";
import ReportRightHeader from "../components/reports/ReportRightHeader";
import { getCookie } from "../lib/cacheAndStorage";
import { useEffect } from "react";

function ReportLayout() {
    const username = getCookie("username");

    return ( 
        <>
            <ReportHeader username={username} />
            <div className="flex bg-[#f1f2f7]">
                <Outlet />
                <ReportRightHeader />
            </div>
        </>
     );
}

export default ReportLayout;