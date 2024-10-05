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
import styles from './InstagramReport.module.css'

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
                        <span className='text-2xl md:text-4xl text-bold'>{sums.postLikes}</span>
                        <span className='text-sm md:text-base'>لایک پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
                    </div>
                },
                {
                    color: "#7b10ac",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-2xl md:text-4xl text-bold'>{sums.postViews}</span>
                        <span className='text-sm md:text-base'>ویو پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
                    </div>
                },
                {
                    color: "#9c1893",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-2xl md:text-4xl text-bold'>{sums.postImpertion}</span>
                        <span className='text-sm md:text-base'>ایمپرشن پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
            
                    </div>
                },
                {
                    color: "#bd207a",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-2xl md:text-4xl text-bold'>{sums.postComments}</span>
                        <span className='text-sm md:text-base'>کامنت پست</span>
                        <Instagram sx={{fontSize: "2rem"}} />
            
                    </div>
                },
                {
                    color: "#ce246d",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-2xl md:text-4xl text-bold'>{sums.storyViews}</span>
                        <span className='text-sm md:text-base'>ویو استوری</span>
                        <Instagram sx={{fontSize: "2rem"}} />
            
                    </div>
                },
                {
                    color: "#de2860",
                    text: 
                    <div className='flex flex-col gap-2 items-center' dir='rtl'>
                        <span className='text-2xl md:text-4xl text-bold'>{sums.storyImprertion}</span>
                        <span className='text-sm md:text-base'>ایمپرشن استوری</span>
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
                <div className='h-full flex'>
                    {/* left header */}
                    <div className='group text-xl hidden md:flex flex-col gap-2 h-full bg-white text-white p-2 relative after:absolute after:z-50 after:top-0 after:right-0 after:translate-x-full after:block after:bg-gray-100 after:w-5 after:h-5  after:content-[""] after:rounded-tl-full before:absolute before:z-50 before:top-0 before:right-0 before:translate-x-full before:block before:bg-white before:w-5 before:h-5  before:content-[""]'>
                        <Link to='/' className='p-2 flex group-hover:gap-4 items-center justify-center bg-telegram rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <HomeIcon />
                            <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>رفتن به خانه</span>
                        </Link>
                        <Link to="/start" className='p-2 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <Add />
                            <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>ایجاد کمپین جدید</span>
                        </Link>
                        <div className='p-2 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <ShopIcon />
                            <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>لیست کمپین ها</span>
                        </div>
                        <div onClick={() => location.reload()} className='p-2 flex group-hover:gap-4 items-center justify-center bg-white text-black rounded-xl cursor-pointer hover:bg-primary-start hover:text-white transition-all duration-200'>
                            <RefreshIcon />
                            <span className=' text-[0px] group-hover:text-sm transition-all duration-500 text-end flex-1'>ریفرش صفحه</span>
                        </div>
                    </div>
                    <main className='z-10 flex-1 overflow-y-scroll bg-gray-100'>
                        {/* top side */}
                        <div className="flex gap-16 md:gap-0 flex-col-reverse md:flex-row md:p-5">
                            <div className="flex-1">
                                <InstaReportChart />
                            </div>
                            <div className={`p-5 flex flex-col gap-4 rounded-3xl border md:shadow-xl md:shadow-gray-300 ${styles.text_info}`}>
                                {/* camp name */}
                                <div className={`flex gap-2 border-r-8 border-r-telegram hover:border-r-gray-500 p-2`} dir="rtl">
                                    <span>اسم کمپین: </span>
                                    <span>
                                        {campaign?.name}
                                    </span>
                                </div>
                                <div className={`flex gap-2 border-r-8 border-r-telegram hover:border-r-gray-500 p-2 mb-8`} dir="rtl">
                                    <span>تاریخ شروع: </span>
                                    <span>
                                        {toShamsi(campaign?.startDate)}
                                    </span>
                                </div>
                                {/* sums */}
                                <div className='flex flex-col gap-7 items-center justfy-center backdrop:blur-md p-10 px-14 rounded-3xl'>
                                    <CardsSwiper slides={slides} />
                                    <div className='text-xl'>
                                        دستاورد ها در یک نگاه
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className='w-full bg-white opacity-30 h-screen'></div> */}

                        {/* report table */}
                        <div className='w-full overflow-x-scroll px-10 mt-24'>
                            <table className=' min-w-[800px] md:min-w-full max-w-screen' dir='rtl'>
                                <tr className='border-b border-b-black'>
                                    <td></td>
                                    <td className='text-sm'>ID</td>
                                    <td className='text-sm'> اسم</td>
                                    <td className='text-sm'>تعداد فالور ها</td>
                                    <td className='text-sm'>ایمپرشن پست</td>
                                    <td className='text-sm'>لایک پست</td>
                                    <td className='text-sm'>بازدید پست</td>
                                    <td className='text-sm'>کامنتهای پست</td>
                                    <td className='text-sm'>ایمپرشن استوری</td>
                                    <td className='text-sm'>بازدید استوری</td>
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
                        
                        <div className='justify-center py-24 hidden'>
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