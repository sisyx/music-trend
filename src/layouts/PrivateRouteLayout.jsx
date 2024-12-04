import { Outlet } from "react-router-dom";
import CheckPageAccess from "../lib/CheckPageAccess";

function PrivateRouteLayout() {
    return ( 
        <>
            <CheckPageAccess />
            <Outlet />
        </>
     );
}

export default PrivateRouteLayout;