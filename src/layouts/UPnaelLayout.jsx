import { useEffect } from "react";
import UserSideNav from "../components/userPanel/UserSideNav";
import CheckPageAccess from "../lib/CheckPageAccess";

function UPnaelLayout({ children }) {

    useEffect(() => {
        console.log(children)
    }, [])

    return ( 
        <>
        <CheckPageAccess />
        <div className="h-screen w-full flex">
             <div className="flex-1">
                {children}
                {/* <h1>Hello World</h1> */}
            </div>
            <UserSideNav />
            </div>
        </>
     );
}

export default UPnaelLayout;