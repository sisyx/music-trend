import { AiFillLike } from "react-icons/ai";

function SideInfoColapsedItem({ detailColapesd = true, value = "0", xkey = "X" }) {
    return ( 
        <div className={`relative flex md:flex-row flex-col bg-white text-gray-600 ${detailColapesd ? "text-[0px] py-0 p-0 gap-0" : "scale-100 p-2 md:py-8 gap-2"} duration-300 transition-all overflow-hidden`} dir="rtl">
            <span className={`md:absolute top-0 right-2 ${detailColapesd ? "text-[0px]" : " text-sm"} duration-100 transition-all`}>{xkey}</span>
            <span className={` flex items-center ${detailColapesd ? "text-[0px] gap-0" : "gap-1 md:text-2xl font-extrabold"} duration-300 transition-all`}>
                <AiFillLike className="text-telegram" />
                <span>
                    {value}
                </span>
            </span>
        </div>
     );
}

export default SideInfoColapsedItem;