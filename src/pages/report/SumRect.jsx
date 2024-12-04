import { FaHeartbeat } from "react-icons/fa";

function SumRect({ xkey = "نام",  value = "مقدار", icon = <FaHeartbeat />, color, index = 1}) {
    return ( 
        <div className="group relative w-full aspect-video rounded-lg text-gray-700 p-2 bg-white shadow-lg cursor-pointer flex flex-col items-center justify-center border-2 border-opacity-0 border-telegram hover:border-opacity-100 transition-all duration-200">
            <span className="text-2xl md:text-4xl font-extrabold space-grotesk" style={{fontFamily: "Space Grotesk"}}>{value}</span>
            <span className="text-sm md:text-base text-gray-400">{xkey}</span>
            <span className="absolute bottom-0 translate-y-1/2 text-2xl bg-white p-2 rounded-lg border-b-2 border-b-telegram border-opacity-0 group-hover:border-opacity-100 group-hover:scale-105 duration-200 transition-all" style={{color}}>
            {icon}
            </span>
        </div>
     );
}

export default SumRect;