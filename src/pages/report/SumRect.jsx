import { FaHeartbeat } from "react-icons/fa";

function SumRect({ xkey = "نام",  value = "مقدار", icon = <FaHeartbeat />, color, index = 1}) {
    return ( 
        <div data-aos="fade-up" data-aos-duration={index * 500} className={`relative w-full aspect-video rounded-lg text-gray-700 p-2 bg-white shadow-lgcursor-pointer flex flex-col items-center justify-center`}>
            <span className="text-2xl md:text-4xl font-extrabold space-grotesk" style={{fontFamily: "Space Grotesk"}}>{value}</span>
            <span className="text-sm md:text-base text-gray-400">{xkey}</span>
            <span className="absolute bottom-0 translate-y-1/2 text-2xl bg-white p-2 rounded-lg border-b border-b-telegram" style={{color}}>
            {icon}
            </span>
        </div>
     );
}

export default SumRect;