import CardsSwiper from '../../components/CardsSwiper';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import { FaFileZipper } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import InstaReportChart from '../../components/reports/InstaReportChart';
import InstagramTableRow from '../../components/reports/InstagramTableRow';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCampWithId, getPublishers, copy, getCookie } from '../../functions';
import { Instagram } from '@mui/icons-material';

function InstagramReport() {

    const [params] = useSearchParams();
    const [publishers, setPublishers] = useState([]);
    const [campaign, setCampaign] = useState({});
    const [slides, setSlides] = useState([]);
    
    const username = getCookie("username");

    useEffect(() => {
        init()
    }, [])

    async function init() {
        const id = params.get("id");
        const tmpCamp = await getCampWithId(id);
        const tmpPubs = await getPublishers(tmpCamp?.pages);
        setPublishers(() => tmpPubs);
        const sums = {
            postLikes: 0,
            postComments: 0,
            postViews: 0,
            postImpertion: 0,
            storyViews: 0,
            storyImprertion: 0,
        };
        tmpPubs.forEach(tpub => {
            sums.postLikes += tpub.postLikes;
            sums.postViews += tpub.postViews;
            sums.postComments += tpub.postComments;
            sums.postImpertion += tpub.postImpertion;
            sums.storyViews += tpub.storyViews;
            sums.storyImprertion += tpub.storyImpertion;
        });
        setSlides(() => {
            return [
                {
                    color: "#ff006e",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-4xl text-bold'>{sums.postLikes}</span>
                        <span>لایک پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
                    </div>
                },
                {
                    color: "#7b10ac",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-4xl text-bold'>{sums.postViews}</span>
                        <span>ویو پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
                    </div>
                },
                {
                    color: "#9c1893",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-4xl text-bold'>{sums.postImpertion}</span>
                        <span>ایمپرشن پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
            
                    </div>
                },
                {
                    color: "#bd207a",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-4xl text-bold'>{sums.postComments}</span>
                        <span>کامنت پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
            
                    </div>
                },
                {
                    color: "#ce246d",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-4xl text-bold'>{sums.storyViews}</span>
                        <span>ویو استوری</span>
                        <Instagram sx={{fontSize: "2rem"}} />
            
                    </div>
                },
                {
                    color: "#de2860",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-4xl text-bold'>{sums.storyImprertion}</span>
                        <span>ایمپرشن استوری</span>
                        <Instagram />
                    </div>
                },
            ]
        })
        setCampaign(() => tmpCamp);
    }

    return (
        // outer container 
        <div>
            {/* container */}
            <div className='h-screen flex flex-col overflow-hidden'>
                {/* header */}
                <div className="flex justify-center items-center w-full px-5 py-2 text-bold text-center bg-white relative after:absolute after:z-50 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-3/4 after:block after:bg-gray-100 after:w-4 after:h-4  after:content-[''] after:rotate-45">
                    {/* left */}
                    <div className='flex-1 flex items-center gap-4'>
                        <img src='/logo.png' alt='logo' className='w-12 aspect-square' />
                        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-primary to-telegram">
                            Mokhatab Gostar
                        </span>
                    </div>
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

                <div className='flex-1 flex'>
                    {/* left header */}
                    <div className='flex flex-col w-50xp h-full bg-white p-4 relative after:absolute after:z-50 after:top-0 after:right-0 after:translate-x-full after:block after:bg-gray-100 after:w-5 after:h-5  after:content-[""] after:rounded-tl-full before:absolute before:z-50 before:top-0 before:right-0 before:translate-x-full before:block before:bg-white before:w-5 before:h-5  before:content-[""]'>
                        <div>Span</div>
                        <div>Span</div>
                        <div>Span</div>
                        <div>Span</div>
                        <div>Span</div>
                        <div>Span</div>
                        <div>Span</div>
                    </div>
                    <main className='z-10 h-full flex-1 overflow-scroll bg-gray-100'>
                        {/* top side */}
                        <div className="flex p-5 h-full overflow-scroll">
                            <div className="flex-1">
                                <InstaReportChart />
                            </div> 
                            <div className="p-5 flex flex-col gap-4">
                                {/* camp name */}
                                <div className="flex gap-2 border p-2" dir="rtl">
                                    <span>اسم کمپین: </span>
                                    <span>
                                        {campaign?.name}
                                    </span>
                                </div>
                                <div className="flex gap-2 border p-2 mb-8" dir="rtl">
                                    <span>تاریخ شروع: </span>
                                    <span>
                                        {campaign?.startDate}
                                    </span>
                                </div>

                                {/* Download Report */}
                                {/* <div className='flex flex-col gap-7 p-5 items-center w-full bg-gray-300 rounded-xl'>
                                    <div className="flex items-center justify-between gap-2 w-full">
                                        <Tooltip title="فایل PDF">
                                            <IconButton sx={{color: "#e31e78", "&:hover": {
                                                backgroundColor: "#e31e78",
                                                color: "white"
                                            }}}>
                                                <FaFilePdf />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="فایل ZIP">
                                            <IconButton sx={{color: "#5e298e", "&:hover": {
                                                backgroundColor: "#5e298e",
                                                color: "white"
                                            }}}>
                                                <FaFileZipper />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="فایل EXCEL">
                                            <IconButton sx={{color: "#ce246d", "&:hover": {
                                                backgroundColor: "#ce246d",
                                                color: "white"
                                            }}}>
                                                <FaFileExcel />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="اشتراک گذاری">
                                            <IconButton 
                                            onClick={() => copy(location.href)}
                                                sx={{color: "#ff00ff", "&:hover": {
                                                    backgroundColor: "#ff00ff",
                                                    color: "white"
                                                }}}
                                            >
                                                <FaShareAlt />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <div className='text-primary'>
                                        دانلود فایل های گزارش
                                    </div>
                                </div> */}
                                
                                    
                                    {/* sums */}
                                    <div className='flex flex-col gap-7 text-white items-center justfy-center bg-gradient-to-t from-primary-start to-white backdrop:blur-md p-10 px-14 rounded-3xl'>
                                        <CardsSwiper slides={slides} />
                                        <div className='text-xl'>
                                            دستاورد ها در یک نگاه
                                        </div>
                                    </div>
                                </div>     
                            </div>
                        {/* report table */}
                        <div className='w-full overflow-x-scroll px-10'>
                            <table className='min-w-full' dir='rtl'>
                                <tr className='border-b border-b-black'>
                                    <td></td>
                                    <td> نام کاربری</td>
                                    <td> اسم</td>
                                    <td>تعداد فالور ها</td>
                                    <td>ایمپرشن پست</td>
                                    <td>لایک پست</td>
                                    <td>بازدید پست</td>
                                    <td>کامنتهای پست</td>
                                    <td>ایمپرشن استوری</td>
                                    <td>بازدید استوری</td>
                                    <td></td>
                                </tr>
                                {
                                    publishers.length 
                                    ? publishers.map((publisher, index) => 
                                        <>
                                            <InstagramTableRow publisher={publisher} index={index} />
                                        </>
                                    )
                                    : ""
                                }
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
     );
}

export default InstagramReport;