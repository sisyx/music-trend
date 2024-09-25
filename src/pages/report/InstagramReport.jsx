import CardsSwiper from '../../components/CardsSwiper';
import Avatar from '@mui/material/Avatar';
// import { FaFileZipper } from "react-icons/fa6";
// import { FaFileExcel } from "react-icons/fa";
// import { FaFilePdf } from "react-icons/fa";
// import { FaShareAlt } from "react-icons/fa";
import InstaReportChart from '../../components/reports/InstaReportChart';
import InstagramTableRow from '../../components/reports/InstagramTableRow';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCampWithId, getPublishers, copy, getCookie, toShamsi } from '../../functions';
import { Add, Instagram } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Doughnut } from 'react-chartjs-2';

function InstagramReport() {

    const [params] = useSearchParams();
    const [publishers, setPublishers] = useState([]);
    const [campaign, setCampaign] = useState({});
    const [slides, setSlides] = useState([]);
    
    const username = getCookie("username");

    const data2 = {
        labels: ["A", "B", "C", "D", "E", "F", "G", "Z"],
        datasets: [{
            label: '# of Votes',
            data: [
                 24, 22, 19, 18, 23, 25, 26,
            ],
            borderWidth: 0,
            borderCapStyle: "round",
            hoverBackgroundColor: "#000",
        }]
    } 


    const options = {
        scales: {
            y: {
                beginAtZero: true
            },
        },
        responsive: true
    }


    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        console.log(publishers);
    }, [publishers]);

    async function init() {
        const id = params.get("id");
        const tmpCamp = await getCampWithId(id);
        const tmpPubs = await getPublishers(id);
        console.log(tmpCamp)
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
            <div className='h-screen flex flex-col'>
                {/* header */}
                <div className="flex justify-center items-center w-full min-h-14 overflow-hidden text-bold text-center bg-white relative after:absolute after:z-50 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-3/4 after:block after:bg-gray-100 after:w-4 after:h-4  after:content-[''] after:rotate-45">
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

                <div className='h-full flex'>
                    {/* left header */}
                    <div className='group text-xl flex flex-col gap-2 h-full bg-white text-white p-4 relative after:absolute after:z-50 after:top-0 after:right-0 after:translate-x-full after:block after:bg-gray-100 after:w-5 after:h-5  after:content-[""] after:rounded-tl-full before:absolute before:z-50 before:top-0 before:right-0 before:translate-x-full before:block before:bg-white before:w-5 before:h-5  before:content-[""]'>
                        <Link to='/' className='p-3 flex group-hover:gap-4 items-center justify-center bg-telegram rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <HomeIcon />
                            <span className=' text-[0px] group-hover:text-base transition-all duration-500 text-end flex-1'>رفتن به خانه</span>
                        </Link>
                        <Link to="/start" className='p-3 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <Add />
                            <span className=' text-[0px] group-hover:text-base transition-all duration-500 text-end flex-1'>ایجاد کمپین جدید</span>
                        </Link>
                        <div className='p-3 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <ShopIcon />
                            <span className=' text-[0px] group-hover:text-base transition-all duration-500 text-end flex-1'>لیست کمپین ها</span>
                        </div>
                        <div onClick={() => location.reload()} className='p-3 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <RefreshIcon />
                            <span className=' text-[0px] group-hover:text-base transition-all duration-500 text-end flex-1'>ریفرش صفحه</span>
                        </div>
                    </div>
                    <main className='z-10 flex-1 overflow-y-scroll bg-gray-100'>
                        {/* top side */}
                        <div className="flex p-5">
                            <div className="flex-1">
                                <InstaReportChart />
                            </div> 

                            
                            {/* <div className='w-full flex items-cente justify-center'>
                                <div className=' w-full max-w-7xl'>
                                    <Doughnut
                                        // className={styles.chart}
                                        data={data2}
                                        options= {options}
                                        />
                                </div>
                            </div> */}
                            <div className="p-5 flex flex-col gap-4">
                                {/* camp name */}
                                <div className="flex gap-2 border border-gray-300 p-2" dir="rtl">
                                    <span>اسم کمپین: </span>
                                    <span>
                                        {campaign?.name}
                                    </span>
                                </div>
                                <div className="flex gap-2 border border-gray-300 p-2 mb-8" dir="rtl">
                                    <span>تاریخ شروع: </span>
                                    <span>
                                        {toShamsi(campaign?.startDate)}
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
                                    <div className='flex flex-col gap-7 border items-center justfy-center backdrop:blur-md p-10 px-14 rounded-3xl'>
                                        <CardsSwiper slides={slides} />
                                        <div className='text-xl'>
                                            دستاورد ها در یک نگاه
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        {/* <div className='w-full bg-white opacity-30 h-screen'></div> */}

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
                                    : "تا بحال گزارشی ثبت نشده"
                                }
                            </table>
                        </div>
                        
                        <div className='flex justify-center py-80'>
                            <div className='w-full max-w-2xl'>
                                <Doughnut
                                    // className={styles.chart}
                                    data={data2}
                                    options= {options}
                                    />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
     );
}

export default InstagramReport;