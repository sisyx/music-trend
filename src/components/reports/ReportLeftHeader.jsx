import { Add, Home, Refresh, Shop } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function ReportLeftHeader() {
    return ( 
        <div className='group text-xl hidden md:flex w-fit flex-col gap-2 bg-gray-100 text-white pb-24 p-2 relative after:absolute after:z-50 after:top-0 after:right-0 after:translate-x-full after:block after:bg-white after:w-5 after:h-5  after:content-[""] after:rounded-tl-full before:absolute before:z-50 before:top-0 before:right-0 before:translate-x-full before:block before:bg-gray-100 before:w-5 before:h-5  before:content-[""]'>
            <Tooltip title="رفتن به خانه" placement="right">
                <Link to='/' className='p-2 flex flex-row items-center justify-center bg-telegram rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Home />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>رفتن به خانه</span> */}
                </Link>
            </Tooltip>
            <Tooltip title="ایحاد کمپین جدید" placement="right">
                <Link to="/start" className='p-2 flex flex-row items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Add />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>ایجاد کمپین جدید</span> */}
                </Link>
            </Tooltip>
            <Tooltip title="لیست کمپین ها" placement="right">
                <Link to="/uPanel/camps" className='p-2 flex flex-row items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Shop />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>لیست کمپین ها</span> */}
                </Link>
            </Tooltip>
            <Tooltip title="ریفرش صفحه" placement="right">
                <div onClick={() => location.reload()} className='p-2 flex flex-row items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Refresh />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>ریفرش صفحه</span> */}
                </div>
            </Tooltip>
        </div>
     );
}

export default ReportLeftHeader;