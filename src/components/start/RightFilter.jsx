import { useState } from "react";

function RightFilter({filter, icon, children}) {
    const [istoolbar, setistoolbar] = useState(false);

    return ( 
        <div className="group relative p-4 text-2xl bg-white text-telegram hover:bg-telegram hover:text-white cursor-pointer"
            onMouseLeave={() => setistoolbar(false)}
        >
            <span 
                onClick={() => setistoolbar(cur => !cur)}
            >
                {icon}
            </span>
            <div className={`${istoolbar ? "flex flex-col" : "hidden"} absolute border top-0 -right-0 min-w-48  bg-white translate-x-full`}>
                {children}
            </div>
            <div className={`text-xs scale-y-0 ${istoolbar ? "" : "group-hover:scale-y-100"} absolute top-2/4 -left-1 -translate-x-full -translate-y-2/4 bg-black p-4 duration-500 transition-all text-center`}>
                <span>
                    {filter}
                </span>
            </div>
        </div>
     );
}

export default RightFilter;