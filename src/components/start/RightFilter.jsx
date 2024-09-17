import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function RightFilter({filter, icon, children}) {
    const [istoolbar, setistoolbar] = useState(false);

    return ( 
        <div className="group relative text-2xl border-black border rounded-2xl overflow-hidden min-w-60 bg-white text-black cursor-pointer">
            <span 
                className="flex items-center justify-between p-2 gap-2 w-full border"
                onClick={() => setistoolbar(cur => !cur)}
            >
                <FaChevronDown fontSize="1rem" />
                <div className="flex items-center justify-between gap-2 text-sm">
                    {icon}
                    <span>
                        {filter}
                    </span>
                </div>
            </span>
            <div className={`${istoolbar ? "h-32 overflow-y-scroll" : "h-0 overflow-hidden"} flex flex-col transition-all duration-500 w-full  bg-white`}>
                {children}
            </div>
        </div>
     );
}

export default RightFilter;