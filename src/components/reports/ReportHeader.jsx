import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function ReportHeader({username}) {
    return ( 
        <div className="flex justify-center items-center w-full min-h-14 overflow-hidden text-bold text-center bg-white relative after:absolute after:z-50 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-3/4 after:block after:bg-gray-100 after:w-4 after:h-4  after:content-[''] after:rotate-45">
            {/* left */}
            <Link to='/' className='flex-1 flex items-center gap-4'>
                <img src='/logo.png' alt='logo' className='w-12 aspect-square' />
                <span className="hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-primary to-telegram">
                    Mokhatab Gostar
                </span>
            </Link>
            {/* center */}
            <img src="/src/assets/images/report/header-instagram.webp" alt="insta" className='w-10 aspect-square' />
            {/* right */}
            <div className='flex-1 flex justify-end items-center gap-4'>
                <div className='flex justify-end items-center gap-4 hover:bg-gray-100 rounded-xl cursor-pointer px-4 py-1'>
                    <span>
                        {username}
                    </span>
                    <Avatar />
                </div>
            </div>
        </div>
     );
}

export default ReportHeader;