import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { toKFormat } from "../../utils/numbers";
import { BsLightningCharge } from "react-icons/bs";
import { FaChartBar, FaRegComment, FaRegHeart, FaUsers } from "react-icons/fa6";
import ApexBarChart from "./ApexBarChart";
import ApexLineChart from "./ApexLineChart";
import { LuLink2 } from "react-icons/lu";
import { TiEye } from "react-icons/ti";
import { Tooltip } from "@mui/material";
import { FaUserFriends } from "react-icons/fa";
import { PiGridFourFill } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { BASE_URL } from "../../config/config";

function ReportPage({pageId, yourPostLink, postDetails}) {

    const [pageDetail, setPageDetail] = useState({data: {}, error: false, loading: true});

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const ispageIdValid = typeof(pageId) === "string" && pageId.length > 4;
        if (!ispageIdValid) {
            setPageDetail({error: true, loading: false, data: {}});
            return {}
        }
        try {
            const req = await fetch(`${BASE_URL}/api/InstagramApi/getInstaUser?username=${pageId}`);
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            // await delay();
            const calculations = getAvgs(res.posts, res.followers);
            const yourpostInedx = findyourPostIndex(yourPostLink, res.posts.map(post => post.permalink));
            setPageDetail({error: false, loading: false, data: {...res, avgs: calculations.avgs, totals: calculations.totals, yourpostInedx }});
            // setPageDetail({error: false, loading: false, data: {}});
            return res;
            // return {};
        } catch (error) {
            console.error(error);
            setPageDetail({error: true, loading: false, data: {}});
            return {}
        }
    }

    function delay(delay = 3) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, delay * 1000);
        });
    }

    function findyourPostIndex(link, links) {
        if (!link.length || !links.length || !link) return 0
        const munick = extractSubstring(link)
        const unicks = [];
        for (let i = 0; i < links.length; i++) {
            const xlink = links[i];
            const xlinkUnic = extractSubstring(xlink);
            if (xlinkUnic) {
                unicks.push(xlinkUnic);
            }
        }
        return unicks.indexOf(munick);


        function extractSubstring(url) {
            if (!url) return ""
            // Find the index of "/p/"
            const pIndex = url.indexOf("/p/");
          
            // If "/p/" was found, find the index of the next "/" after it
            if (pIndex !== -1) {
              const nextSlashIndex = url.indexOf("/", pIndex + 3); // +3 to skip "/p/"
          
              // If the next "/" was found, extract the substring
              if (nextSlashIndex !== -1) {
                return url.substring(pIndex + 3, nextSlashIndex);
              }
            }
          
            // If "/p/" or the next "/" wasn't found, return an empty string
            return "";
        }
    }

    function getAvgs(media_list, followers_count) {
        const filteredData = media_list.map(media => ({likes: media.likes_count, comments: media.comments_count, }));
        const totals = {
            likes: 0,
            comments: 0,
            posts: 0,
        };
        const avgs = {
            like: 0,
            comment: 0,
            engagement: 0
        }
        const mediaCount = filteredData.length;
        for (let i = 0; i < filteredData.length; i++) {
            const thisPost = filteredData[i];
            totals.likes += thisPost.likes;
            totals.comments += thisPost.comments;
            totals.posts += 1;
        }

        avgs.like = totals.likes/mediaCount;
        avgs.comment = totals.comments/mediaCount;
        avgs.engagement = formatNumber((avgs.like + avgs.comment)/(followers_count*mediaCount)*100);

        function formatNumber(number) {
            const [integerPart, decimalPart] = number.toString().split('.');
            const formattedDecimalPart = decimalPart.slice(0, 2);
            return `${integerPart}.${formattedDecimalPart}`;
          }

        return {avgs, totals}
    }

    return (
        // outer container
        <div className="w-full">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center">
                <div className="w-full sm:w-96 flex flex-col items-center gap-20 ">
                    <div className="flex flex-col gap-4 items-center">
                        {/* img */}
                        <div className="rounded-full aspect-square flex items-center justify-center">
                            {
                                pageDetail.loading 
                                ? <Skeleton circle={true} borderRadius={20} width={128} height={128} />
                                : <img src={pageDetail.data?.ProfilePictureUrl || "/logo.png"} alt="Page Profile" className="w-32 rounded-full" />
                            }
                        </div>
                        <div className="flex flex-col items-center leading-6">
                            <span className="pt_serif_regular font-bold text-2xl">
                                {
                                    pageDetail.loading 
                                    ? <span className="w-24 inline-block">
                                        <Skeleton />
                                    </span>
                                    : `@${pageDetail.data?.username || "username"}`
                                }
                            </span>
                                {
                                    pageDetail.loading
                                    ? <span className="w-48">
                                        <Skeleton /> 
                                    </span>
                                    : <span className="text-sm text-gray-500 underline underline-offset-1 font-itelic">
                                     اطلاعات تماس در درسترس نمیباشد
                                     </span>
                                }
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between border-y border-gray-300">
                        <div className="group flex-1 py-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200">
                            <FaUsers className="group-hover:scale-0 transition-all duration-200" />
                            {
                                pageDetail.loading 
                                ? <Skeleton width={45} />
                                : <span className="text-xl group-hover:scale-125 group-hover:text-red-500 transition-all duration-300 pt_serif_regular font-bold">{toKFormat(pageDetail.data?.followers || 617321456)}</span>
                            }
                            <span className="text-gray-500 group-hover:scale-0 transition-all duration-200">فالور</span>
                        </div>
                        <div className="group flex-1 py-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200">
                            <FaUserFriends className="group-hover:scale-0 transition-all duration-200" />
                            {
                                pageDetail.loading 
                                ? <Skeleton width={45} />
                                : <span className="text-xl group-hover:scale-125 group-hover:text-telegram transition-all duration-300 pt_serif_regular font-bold">{toKFormat(pageDetail.data?.followings || 0)}</span>
                            }
                            <span className="text-gray-500 group-hover:scale-0 transition-all duration-200">فالوینگ</span>
                        </div>
                        <div className="group flex-1 py-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200">
                            <PiGridFourFill className="group-hover:scale-0 transition-all duration-200" />
                            {
                                pageDetail.loading 
                                ? <Skeleton width={45} />
                                : <span className="text-xl group-hover:scale-125 group-hover:text-yellow-500 transition-all duration-300 pt_serif_regular font-bold">{pageDetail.data?.media_count || 0}</span>
                            }
                            <span className="text-gray-500 group-hover:scale-0 transition-all duration-200">پست ها</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 md:max-w-3xl">
                    {/* boxes */}
                    <div className="flex flex-wrap w-full gap-4 p-4 md:p-0 mb-8">
                        {/* box */}
                        <div className="flex-1 p-4 flex flex-col items-center justify-center gap-2 border shadow-lg">
                            <BsLightningCharge className="text-2xl text-yellow-500" />
                            {
                                pageDetail.loading
                                ? <Skeleton width={45} height={20} />
                                : <span className="text-xl font-bold pt_serif_regular">{(pageDetail.data?.avgs ? pageDetail.data?.avgs.engagement : 0)}</span>
                            }
                            <span className="text-gray-500 text-sm text-center">درصد همکاری</span>
                        </div>
                        {/* box */}
                        <div className="flex-1 p-4 flex flex-col items-center justify-center gap-2 border border-[gray-400] shadow-lg">
                            <FaRegHeart className="text-[#f00] text-2xl"/>
                            {
                                pageDetail.loading
                                ? <Skeleton width={45} height={20} />
                                : <span className="text-xl font-bold pt_serif_regular">{pageDetail.data?.avgs ? toKFormat(pageDetail.data?.avgs.like) : 0}</span>
                            }
                            <span className="text-gray-500 text-sm text-center">متوسط لایک</span>
                        </div>
                        {/* box */}
                        <div className="flex-1 p-4 flex flex-col items-center justify-center gap-2 border shadow-lg">
                            <FaRegComment className="text-telegram text-2xl"  />
                            {
                                pageDetail.loading
                                ? <Skeleton width={45} height={20} />
                                : <span className="text-xl font-bold pt_serif_regular">{Math.ceil(pageDetail.data?.avgs ? pageDetail.data?.avgs.comment : 0)}</span>
                            }
                            <span className="text-gray-500 text-sm text-center">متوسط کامنت</span>
                        </div>
                    </div>
                    {/* Charts */}
                    <div className="flex items-center flex-wrap justify-between">
                        {
                            pageDetail.data?.posts
                            ? <ApexBarChart data={pageDetail.data.posts.map(post => ({x: String(post.likes_count), y: post.timestamp})).slice(0, 15)} title="لایک" />
                            : ""
                        }
                        {
                            pageDetail.data?.posts
                            ? <ApexLineChart data={pageDetail.data.posts.map(post => ({x: String(post.comments_count), y: post.timestamp})).slice(0, 15)} title="کامنت" />
                            : ""
                        }
                    </div>
                    {/* Your Post */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 md:p-0 gap-4 font-bold">
                        {
                            (!pageDetail.loading && !pageDetail.error)
                            ? pageDetail.data?.posts && pageDetail.data?.posts.slice(pageDetail.data?.yourpostInedx, pageDetail.data?.yourpostInedx + 3)
                            .map((post, index) => 
                                <div className={`relative group flex flex-col flex-1 p-2 rounded-md overflow-hidden ${ index === 0 ? "bg-black text-white" : "bg-gray-100"} pb-4`}>
                                    <div className="relative rounded-xl overflow-hidden">
                                        <img src={post?.thumbnail_url || post?.media_url} className="w-full aspect-square object-cover object-center" alt="" />
                                        {
                                            index === 0 &&
                                            <div className="absolute left-0 right-0 -bottom-4  group-hover:bottom-0 backdrop-blur-0 group-hover:backdrop-blur-sm group-hover:scale-100 h-full flex items-center justify-center bg-gray-200 bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-35 transition-all duration-200">
                                                <div className="flex text-black">
                                                    <div className="flex flex-col items-start gap-3">
                                                        <Tooltip placement="right" title="بازدید پست">
                                                            <span className="flex items-center gap-1 text-xl">
                                                                <TiEye />
                                                                {postDetails?.PostViews}
                                                            </span>
                                                        </Tooltip>
                                                        <Tooltip placement="right" title="ایمپرشن پست">
                                                            <span className="flex items-center gap-1 text-xl">
                                                                <FaChartBar />
                                                                {postDetails?.PostImpertion}
                                                            </span>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {/* stats */}
                                    <div className="flex items-center justify-evenly absolute bottom-0 left-0 w-full bg-black text-white">
                                        <div className="flex flex-col flex-1 text-[#ff2222] items-center leading-3 py-2">
                                            {toKFormat(post?.likes_count)}
                                            <FcLike />
                                        </div>
                                        <div className="flex flex-col flex-1 items-center leading-3 py-2">
                                            <span className={`${index===0 ? "text-white" : "text-telegram"}`}>
                                                {toKFormat(post?.comments_count)}
                                            </span>
                                            <FaRegComment className={`${index===0 ? "text-white" : "text-telegram"}`} />
                                        </div>
                                        <a target="_blank" href={post?.permalink} className="flex flex-col flex-1 items-center leading-3 py-2">
                                            see post
                                            <LuLink2 />
                                        </a>
                                    </div>
                                </div>    
                            )
                             : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportPage;