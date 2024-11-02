import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function UserSideNavBtn({btn}) {
    const [isActive, setIsActive] = useState(false);
    const navlink = useRef();
    const {state, icon, text, bg, color} = btn;

    function activateThis() {
        if (navlink.current.classList.contains("active")) setIsActive(true);
        else setIsActive(false);
    }

    useEffect(() => {
        activateThis();
    }, [])

    return ( 
        <NavLink ref={navlink} to={state} className={`group flex items-center gap-4 py-2 md:pr-8 bg-white text-sm md:text-base ${isActive ? "bg-opacity-100 text-gray-900" : "bg-opacity-0 hover:bg-opacity-20 text-white"} duration-100 transition-all w-full p-2 rounded-r-full`} style={(!!bg && !!color) ? {backgroundColor: bg, color: color,} : {}} dir="rtl">
            <span className="md:text-2xl group-hover:scale-110 duration-75 transition-transform">
                {icon}
            </span>
            {text}
        </NavLink>
     );
}

export default UserSideNavBtn;