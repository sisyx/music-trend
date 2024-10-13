import { useEffect, useState } from "react";
// import NoCamp from "../../components/admin/NoCamp";
// import Main from "../../components/admin/Main";
import { getRole, setTitle } from "../../functions";
import AdminSidebar from "../../components/admin/new/AdminSidebar";
import AdminHeader from "../../components/admin/new/AdminHeader";
import SeeUsers from "../../components/admin/new/SeeUsers";
import SeePages from "../../components/admin/new/SeePages";
import CreatePageTypes from "../../components/admin/new/CreatePageTypes";
import SeeCamps from "../../components/admin/new/SeeCamps";
import "./Admin.module.css";

function Admin() {
    const [_isLoaded, setIsLoaded] = useState(false);
    const [state, setState] = useState("see users");

    useEffect(() => {
        init();
        setTitle("ادمین")
    }, []);


    async function init() {
        const role = getRole();
        if (role !== "admin") location.assign("/login")
        setIsLoaded(true)
    }

    return (
        // outer container
        <div className="bg-gray-700 text-white h-screen w-full">
            <div className="flex w-full h-full">
                <div className="flex-1 bg-gray-100 h-full overflow-y-scroll">
                    <AdminHeader />
                    {
                        state === "see users" 
                        ? <SeeUsers setState={setState} state={state} />
                        : state === "see pages" ? <SeePages setState={setState} /> 
                        : state === "see categories" ? <CreatePageTypes setState={setState} /> 
                        : <SeeCamps setState={setState} />
                    }
                </div>
                <AdminSidebar state={state} setState={setState} />
            </div>
        </div>
     );
}

export default Admin;