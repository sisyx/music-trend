import { Add, Home, Refresh, Shop } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function ReportRightHeader() {
    return ( 
        <div className='group text-xl hidden md:flex w-fit flex-col gap-2 bg-white text-gray-100 pb-24 p-2 relative after:absolute after:z-50 after:top-0 after:left-0 after:-translate-x-full after:block after:bg-[#f1f2f7] after:w-5 after:h-5  after:content-[""] after:rounded-tr-full before:absolute before:z-50 before:top-0 before:left-0 before:-translate-x-full before:block before:bg-white before:w-5 before:h-5  before:content-[""]'>
            <Tooltip title="رفتن به خانه" placement="left">
                <Link to='/' className='p-2 flex flex-row items-center justify-center bg-telegram rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Home />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>رفتن به خانه</span> */}
                </Link>
            </Tooltip>
            <Tooltip title="ایحاد کمپین جدید" placement="left">
                <Link to="/start" className='p-2 flex flex-row items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Add />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>ایجاد کمپین جدید</span> */}
                </Link>
            </Tooltip>
            <Tooltip title="لیست کمپین ها" placement="left">
                <Link to="/uPanel/camps" className='p-2 flex flex-row items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Shop />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>لیست کمپین ها</span> */}
                </Link>
            </Tooltip>
            <Tooltip title="ریفرش صفحه" placement="left">
                <div onClick={() => location.reload()} className='p-2 flex flex-row items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-300'>
                    <Refresh />
                    {/* <span className='text-[0px] group-hover:text-sm transition-all duration-150'>ریفرش صفحه</span> */}
                </div>
            </Tooltip>
        </div>
     );
}

export default ReportRightHeader;