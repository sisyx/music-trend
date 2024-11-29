import { Avatar } from "@mui/material";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ReportHeader({username}) {
    const headerRef = useRef();

    useEffect(() => {
        const headerHeight = headerRef.current?.clientHeight;
        document.body.style.paddingTop = `${headerHeight}px`;

        return () => document.body.style.paddingTop = "0px"
    }, []);

    return ( 
        <div ref={headerRef} className="absolute top-0 flex justify-center items-center w-full min-h-14 overflow-hidden text-bold text-center bg-white after:absolute after:z-50 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-3/4 after:block after:bg-white after:w-4 after:h-4  after:content-[''] after:rotate-45">
            {/* left */}
            {/* center */}
            <div className='flex-1 flex items-center gap-4 '>
                <div className='flex justify-end items-center gap-4 hover:bg-gray-100 rounded-xl cursor-pointer px-4 py-1'>
                    <Avatar />
                    <span>
                        {username}
                    </span>
                </div>
            </div>
            <img src="/src/assets/images/report/header-instagram.webp" alt="insta" className='w-10 aspect-square' />
            {/* right */}
            <Link to='/' className='flex-1 flex justify-end items-center gap-4'>
                <span className="hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-primary to-telegram">
                    Mokhatab Gostar
                </span>
                <img src='/logo.png' alt='logo' className='w-12 aspect-square' />
            </Link>
        </div>
     );
}

export default ReportHeader;