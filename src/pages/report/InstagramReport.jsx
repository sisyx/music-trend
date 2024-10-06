import CardsSwiper from '../../components/CardsSwiper';
import Avatar from '@mui/material/Avatar';
import InstaReportChart from '../../components/reports/InstaReportChart';
import InstagramTableRow from '../../components/reports/InstagramTableRow';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCampWithId, getPublishers, getCookie, toShamsi } from '../../functions';
import { Add, Instagram } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Doughnut } from 'react-chartjs-2';
import styles from './InstagramReport.module.css'
import ReportHeader from '../../components/reports/ReportHeader';
import CampaignMainInfo from './CampaignMainInfo';
import ReportLeftHeader from '../../components/reports/ReportLeftHeader';

function InstagramReport() {
    const [params] = useSearchParams();
    const [publishers, setPublishers] = useState([]);
    const [campaign, setCampaign] = useState({});
    const [slides, setSlides] = useState([]);
    const [achivSums, setAchivSums] = useState();
    
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
        setAchivSums(_cur => sums);
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
                <ReportHeader username={username} />
                <div className='h-full flex flex-1 overflow-hidden'>
                    {/* left header */}
                    <ReportLeftHeader />
                    <main className='z-10 flex-1 overflow-y-scroll bg-gray-100'>
                        {/* top side */}
                        <CampaignMainInfo sums={achivSums} campaign={campaign} slides={slides} influs={publishers} />
                        {/* report table */}
                        <div className='hidden w-full overflow-x-scroll px-10 mt-24'>
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
                        
                        {/* <div className='justify-center py-24 hidden'>
                            <div className='w-full max-w-2xl'>
                                <Doughnut
                                    // className={styles.chart}
                                    data={data2}
                                    options= {options}
                                    />
                            </div>
                        </div> */}
                    </main>
                </div>
            </div>
        </div>
     );
}

export default InstagramReport;