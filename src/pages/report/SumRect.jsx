function SumRect({ xkey = "نام",  value = "مقدار"}) {
    return ( 
        <div className="w-full aspect-video rounded-md p-2 bg-gray-100 border border-transparent hover:border-telegram cursor-pointer relative flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl text-telegram font-extrabold space-grotesk" style={{fontFamily: "Space Grotesk"}}>{value}</span>
            <span className="text-sm md:text-base ">{xkey}</span>
        </div>
     );
}

export default SumRect;