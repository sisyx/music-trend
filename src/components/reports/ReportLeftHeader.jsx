import { Add, Home, Refresh, Shop } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ReportLeftHeader() {
    return ( 
        <div className='group text-xl hidden md:flex flex-col gap-2 h-full bg-white text-white p-2 relative after:absolute after:z-50 after:top-0 after:right-0 after:translate-x-full after:block after:bg-gray-100 after:w-5 after:h-5  after:content-[""] after:rounded-tl-full before:absolute before:z-50 before:top-0 before:right-0 before:translate-x-full before:block before:bg-white before:w-5 before:h-5  before:content-[""]'>
            <Link to='/' className='p-2 flex group-hover:gap-4 items-center justify-center bg-telegram rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                <Home />
                <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>رفتن به خانه</span>
            </Link>
            <Link to="/start" className='p-2 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                <Add />
                <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>ایجاد کمپین جدید</span>
            </Link>
            <div className='p-2 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                <Shop />
                <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>لیست کمپین ها</span>
            </div>
            <div onClick={() => location.reload()} className='p-2 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                <Refresh />
                <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>ریفرش صفحه</span>
            </div>
        </div>
     );
}

export default ReportLeftHeader;