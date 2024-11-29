import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function RightFilter({filter, icon, children, open = false}) {
    const [istoolbar, setistoolbar] = useState(open);

    return ( 
        <div className="group relative max-w-40 text-2xl border-gray-300 border rounded-2xl overflow-hidden min-w-60 bg-white text-black cursor-pointer">
            <span 
                className={`flex items-center justify-between p-2 gap-2 w-full border transition-all duration-75 ${istoolbar ? "bg-telegram text-white" : ""}`}
                onClick={() => setistoolbar(cur => !cur)}
            >
                <FaChevronDown fontSize="1rem" className={`transition-all duration-500 ${istoolbar ? "rotate-180" : "rotate-0"}`} />
                <div className="flex items-center justify-between gap-2 text-sm">
                    {icon}
                    <span>
                        {filter}
                    </span>
                </div>
            </span>
            <div className={` ${istoolbar ? "h-48 overflow-y-scroll" : "h-0 overflow-hidden"} flex flex-col transition-all duration-500 w-full  bg-white`}>
                {children}
            </div>
        </div>
     );
}

export default RightFilter;