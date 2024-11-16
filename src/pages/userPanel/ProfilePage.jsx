import { RiMailOpenFill, RiRecordMailFill, RiUserStarFill } from "react-icons/ri";
import { imagebase, USER_LEVELS } from "../../constatnts";
import { getCookie } from "../../lib/cacheAndStorage";
import UPnaelLayout from "../../layouts/UPnaelLayout";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config/config";

function ProfilePage() {
    const [userDetail, setUserDetail] = useState({error: false, loading: true, data: {}});

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const userId = getCookie("id");
        const token = getCookie("token");
        if (!token || !userId) {
            return
        }
        try {
            const req = await fetch(`${BASE_URL}/user/getById`, {
                method: "POST",
                body: JSON.stringify({
                    id: userId
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            
            if (!req.ok) throw new Error(req.statusText);

            const res = await req.json();
            
            const level = USER_LEVELS.find(xlevel => xlevel.value == res.objectResult.roles).persianName;
            res.objectResult.level = level
            setUserDetail({
                error: false,
                loading: false,
                data: res.objectResult,
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    return ( 
        <UPnaelLayout>
             {/* <div data-aos="fade-down" className="overflow-y-scroll h-screen"> */}
                <div data-aos="fade-down" className="w-full h-full flex flex-col items-center overflow-y-scroll pb-48">
                    {/* user profile */}
                    <div className="py-8 border-b border-gray-300 w-[80%] flex justify-center">
                        <img src={`${imagebase}/userProfile.jpg`} alt="Your Profile" className="w-32 rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-y-8 w-[80%] py-8">
                        <div className="text-right flex flex-col gap-4" dir="rtl">
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-32" height="1.25rem" />
                                : <span className="text-xl font-bold">نام کابری</span>
                            }
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-24" height="1.25rem" />
                                : <span className="text-gray-500" dir="ltr">@{userDetail.data?.username}</span>
                            }
                        </div>
                        <div className="text-right flex flex-col gap-4" dir="rtl">
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-36" height="1.25rem" />
                                : <span className="text-xl font-bold">نام و نام خانوادگی</span>
                            }
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-24" height="1.25rem" />
                                : <span className="text-gray-500">{userDetail.data?.showName || '"بدون نام"'}</span>
                            }
                        </div>
                        <div className="text-right flex flex-col gap-4" dir="rtl">
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-36" height="1.25rem" />
                                : <span className="text-xl font-bold flex items-center gap-3">
                                    ایمیل
                                    <RiMailOpenFill />
                                </span>
                            }
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-24" height="1.25rem" />
                                : <span className="text-gray-500">{userDetail.data?.email || '"بدون ایمیل"'}</span>
                            }
                        </div>
                        <div className="text-right flex flex-col gap-4" dir="rtl">
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-40" height="1.25rem" />
                                : <span className="text-xl font-bold flex items-center gap-3">
                                    شماره همراه
                                    <RiRecordMailFill />
                                </span>
                            }
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-24" height="1.25rem" />
                                : <span className="text-gray-500">{userDetail.data?.phoneNumber || '"بدون شماره همراه"'}</span>
                            }
                        </div>
                        <div className="text-right flex flex-col gap-4" dir="rtl">
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-40" height="1.25rem" />
                                : <span className="text-xl font-bold flex items-center gap-3">
                                    سطح کاربری
                                    <RiUserStarFill />
                                </span>
                            }
                            {
                                userDetail.loading ? <Skeleton count={1} className="w-24" height="1.25rem" />
                                : <span className="text-gray-500">{userDetail.data?.level}</span>
                            }
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </UPnaelLayout>
     );
}

export default ProfilePage;