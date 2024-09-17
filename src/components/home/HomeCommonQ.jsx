import { FaAngleDown } from "react-icons/fa6";

function HomeCommonQ({que, index, handleExpand}) {
    return ( 
        <div>
            {/* question */}
            <div className="flex items-center gap-4 cursor-pointer group/title" onClick={() => handleExpand(index)}>
                <div className="p-3 rounded-full bg-telegram-transparent80 text-white duration-100 transition-all group-hover/title:bg-white group-hover/title:text-telegram">
                    <FaAngleDown />
                </div>
                <span className="text-telegram  md:text-xl font-extrabold">{que.question}</span>
            </div>
            {/* answer */}
            <div className={` pr-16 text-sm text-gray-700 min-h-fit ${que.isExpanded ? " h-24" : "h-0"} overflow-hidden duration-500 transition-all`}>
                {que.answer}
            </div>
        </div>
     );
}

export default HomeCommonQ;