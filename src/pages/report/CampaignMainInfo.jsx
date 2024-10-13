import CardsSwiper from "../../components/CardsSwiper";
import { getProfile, toShamsi, uploadFile } from "../../functions";
import SumRect from "./SumRect";
import PagesStatsTable from "./PagesStatsTable";
import InstaReportChart from "../../components/reports/InstaReportChart";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import SideInfoColapsedItem from "./SideInfoColapsedItem";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Loading from "../../components/loadings/Loading";
import CircleGradient from "../../components/loadings/CircleGradient";

function CampaignMainInfo({campaign, slides, sums = {}, influs = []}) {

    const [detailColapesd, setDetaolColapsed] = useState(true);
    const [file, setfile] = useState({emptyResult: false, isLoading: true, error: false, result: null});
    const fileInputRef = useRef();

    useEffect(() => {
        init();
    }, [campaign.id])

    async function init() {
        if (!campaign?.id) return
        const campImageSrc = await getProfile(campaign.id);
        console.log(campImageSrc);
        const filecontent = document.querySelector(".camp-profile-img");
        filecontent.src = campImageSrc;
        if (campImageSrc == "/logo.png") {
            setfile(cur => ({...cur, emptyResult: true, isLoading: false, error: false, result: campImageSrc }))
        } else {
            setfile(cur => ({...cur, emptyResult: false, isLoading: false, error: false, result: campImageSrc }))
        }
    }

    function changeCampProfile(xfile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const filecontent = document.querySelector(".camp-profile-img");
            filecontent.src = event.target.result;
        }

        reader.readAsDataURL(xfile);
        const newProfilePath = `campaign_profiles/campaign_number_${campaign.id}`
        uploadFile(newProfilePath, xfile)
    }

    return ( 
        <div className="flex gap-16 md:gap-0 flex-col md:flex-row md:p-5 md:pr-0">
            <div className={`flex flex-col gap-0 rounded-3xl md:shadow-xl md:shadow-gray-500 bg-white overflow-hidden`}>
                {/* Camp Image / Site Logo */}
                <div className={`relative group w-full flex items-center justify-end md:justify-center mb-2 ${file.emptyResult ? "cursor-pointer" : ""}`}>
                    <img src="" className={`camp-profile-img aspect-video md:max-w-[350px] object-contain object-center rounded-3xl`}/>
                    {
                        file.isLoading ? 
                        <div className="aspect-video w-full flex items-center justify-center">
                          <CircleGradient />
                        </div>
                        : file.emptyResult ?
                        <>
                            <label onClick={() => fileInputRef.current.click()} htmlFor="profile-input" className="absolute text-2xl opacity-0 group-hover:opacity-100 transition-all duration-150 bg-gray-100 bg-opacity-55 w-full h-full flex items-center justify-center cursor-pointer">
                                <AddAPhotoIcon />
                                <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={e => {
                                    setfile(e.target.files[0])
                                    changeCampProfile(e.target.files[0])
                                }} />
                            </label>
                        </> : ""
                    }
                </div>
                {/* camp name */}
                <div className={`relative flex md:flex-row flex-col gap-2 bg-white text-gray-600 p-2 md:py-8`} dir="rtl">
                    <span className="md:absolute top-0 right-2 text-sm">اسم کمپین: </span>
                    <span className="md:text-2xl font-extrabold">
                        {campaign?.name}
                    </span>
                </div>
                <div className={`relative flex md:flex-row flex-col gap-2 bg-gray-100 text-gray-600 p-2 md:py-8`} dir="rtl">
                    <span className="md:absolute top-0 right-2 text-sm">تاریخ شروع: </span>
                    <span className="md:text-2xl font-extrabold">
                        {toShamsi(campaign?.startDate)}
                    </span>
                </div>
                <div onClick={() => setDetaolColapsed(cur => !cur)} className="group flex items-center justify-center py-2 transition-all duration-150 cursor-pointer hover:text-xl before:content=[''] before:block before:absolute relative before:top-0 before:left-0 before:right-0 before:bg-gray-100 before:h-0 hover:before:h-full before:transition-all before:duration-300">
                    <FaAngleDown className={`${detailColapesd ? "rotate-0 " : "-rotate-180"} transition-all duration-300`} />
                </div>
                <SideInfoColapsedItem detailColapesd={detailColapesd} value={sums.postLikes} xkey="لایک پست"  />
                <SideInfoColapsedItem detailColapesd={detailColapesd} value={sums.postViews} xkey="ویو پست"  />
                <SideInfoColapsedItem detailColapesd={detailColapesd} value={sums.storyViews} xkey="ویو استوری"  />
                <SideInfoColapsedItem detailColapesd={detailColapesd} value={sums.storyImprertion} xkey="استوری ایمپرشن"  />
                {/* sums */}
                <div className='flex flex-col gap-7 items-center justfy-center backdrop:blur-md p-10 px-14 rounded-3xl'>
                    <CardsSwiper slides={slides} />
                    <div className='text-xl'>
                        دستاورد ها در یک نگاه
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center m-4 mt-0 h-fit bg-white rounded-xl overflow-hidden">
                <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 pt-24 gap-4 p-8 w-full bg-white relative"> 
                    <span className=" absolute top-8 right-4 text-3xl font-bold">دستاورد ها</span>
                    <SumRect xkey="لایک پست" value={sums?.postLikes} />
                    <SumRect xkey="بازدید پست" value={sums?.postViews} />
                    <SumRect xkey="کامنت پست" value={sums?.postComments} />
                    <SumRect xkey="ایمپرشن پست" value={sums?.postImpertion} />
                    <SumRect xkey="بازدید استوری" value={sums?.storyViews} />
                    <SumRect xkey="ایمپرشن استوری" value={sums?.storyImprertion} />
                </div>
                <PagesStatsTable data={influs} />
                <div className="h-8"></div>
                <InstaReportChart />
            </div>
        </div>
     );
}

export default CampaignMainInfo;