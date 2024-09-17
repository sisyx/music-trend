import CardsSwiper from '../../components/CardsSwiper';
import { IconButton, Tooltip } from '@mui/material';
import { FaFileZipper } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import InstaReportChart from '../../components/reports/InstaReportChart';
import InstagramTableRow from '../../components/reports/InstagramTableRow';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { copy, getCampWithId, getPublishers } from '../../functions';
import { Instagram, Telegram } from '@mui/icons-material';
import TelegramTableRow from '../../components/reports/TelegramTableRow';
import TelReportChart from '../../components/reports/TelReportChart';

function TelegramReport() {

    const [params, setParams] = useSearchParams();
    const [publishers, setPublishers] = useState([]);
    const [campaign, setCampaign] = useState({});
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        init()
    }, [])

    async function init() {
        const id = params.get("id");
        const tmpPubs = await getPublishers(id, "telegram");
        const tmpCamp = await getCampWithId(id, "telegram");
        console.log(tmpPubs)
        // console.log(tmpPubs);
        // console.log(tmpCamp)
        setPublishers(() => tmpPubs);
        const sums = {
            postViews: 0,
            publisherCount: 0,
        };
        tmpPubs.forEach(tpub => {
            sums.postViews += tpub.postViews;
            sums.publisherCount += 1;
        });
        setSlides(() => {
            return [
                {
                    color: "#2da5dc",
                    text: 
                        <div className='flex flex-col gap-2 items-center hover:gap-3 transition-all duration-100' dir='rtl'>
                            <span className='text-4xl text-bold'>{sums.postViews}</span>
                            <span>ویو پست</span>
                            <Telegram sx={{fontSize: "3rem"}} />
                        </div>,
                },
                {
                    color: "#22a5dc",
                    text: 
                        <div className='flex flex-col gap-2 items-center hover:gap-3 transition-all duration-100' dir='rtl'>
                            <span className='text-4xl text-bold'>{sums.publisherCount}</span>
                            <span>تعداد پابلیشر</span>
                            <Telegram sx={{fontSize: "3rem"}} />
                        </div>,
                },
            ]
        })
        setCampaign(() => tmpCamp);
    }

    return (
        // outer container 
        <div>
            {/* container */}
            <div>
                {/* header */}
                <div className="w-full py-5 text-white text-bold text-center bg-gradient-to-r from-telegram to-red-200">
                    مخاطب گستر
                </div>

                {/* top side */}
                <div className="flex p-5">
                    <div className="flex-1">
                        <TelReportChart />
                    </div> 
                    <div className="p-5 flex flex-col gap-12">
                        {/* camp name */}
                        <div className="flex gap-2 border p-2" dir="rtl">
                            <span>اسم کمپین: </span>
                            <span>
                                {campaign?.name}
                            </span>
                        </div>

                        {/* Download Report */}
                        <div className='flex flex-col gap-7 p-5 items-center w-full bg-telegram rounded-xl'>
                            <div className="flex items-center justify-between gap-2 w-full">
                                <Tooltip title="فایل PDF">
                                    <IconButton sx={{color: "#f00", "&:hover": {
                                        backgroundColor: "#f00",
                                        color: "white"
                                    }}}>
                                        <FaFilePdf />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="فایل ZIP">
                                    <IconButton sx={{color: "#000", "&:hover": {
                                        backgroundColor: "#000",
                                        color: "white"
                                    }}}>
                                        <FaFileZipper />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="فایل EXCEL">
                                    <IconButton sx={{color: "#1f7044", "&:hover": {
                                        backgroundColor: "#1f7044",
                                        color: "white"
                                    }}}>
                                        <FaFileExcel />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="اشتراک گذاری">
                                    <IconButton 
                                        onClick={() => copy(location.href)}
                                        sx={{color: "#fff", "&:hover": {
                                            backgroundColor: "#fff",
                                            color: "#2da5dc"
                                        }}}
                                    >
                                        <FaShareAlt />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className='text-white'>
                                دانلود فایل های گزارش
                            </div>
                        </div>
                        
                        {/* sums */}
                        <div className='flex flex-col gap-7 text-white items-center justfy-center bg-gradient-to-t from-telegram to-white backdrop:blur-md p-10 px-14 rounded-3xl'>
                            <CardsSwiper slides={slides} />
                            <div className='text-xl'>
                                دستاورد ها در یک نگاه
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
            
            {/* report table */}
            <div className='w-screen min-h-96 overflow-x-scroll px-10'>
                <table className='min-w-full' dir='rtl'>
                    <thead>
                        <tr className='border-b border-b-black'>
                            <td></td>
                            <td> نام کاربری</td>
                            <td> اسم کانال</td>
                            <td>تعداد فالور ها</td>
                            <td>بازدید پست</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            publishers.length 
                            ? publishers.map((publisher, index) => 
                                <>
                                    <TelegramTableRow publisher={publisher} index={index} />
                                </>
                            )
                            : ""
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default TelegramReport;