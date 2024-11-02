import { RiMailOpenFill, RiRecordMailFill, RiUserStarFill } from "react-icons/ri";
import { imagebase } from "../../constatnts";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

function Profile() {

    const [userDetail, _setUserDetail] = useState({error: false, loading: true, data: {}});

    return ( 
        // outer container
        <div>
            <div className="w-full flex flex-col items-center">
                {/* user profile */}
                <div className="py-8 border-b border-gray-300 w-[80%] flex justify-center">
                    <img src={`${imagebase}/userProfile.jpg`} alt="Your Profile" className="w-32 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-y-8 w-[80%] py-8">
                    <div className="text-right flex flex-col gap-4" dir="rtl">
                        {
                            userDetail.loading ? <Skeleton className="w-24" count={2} />
                            : <>
                                <span className="text-xl font-bold">نام کابری</span>
                                <span className="text-gray-500">@hello_man_2</span>
                            </>
                        }
                    </div>
                    <div className="text-right flex flex-col gap-4" dir="rtl">
                        <span className="text-xl font-bold">نام و نام خانوادگی</span>
                        <span className="text-gray-500">Sajad Bahadori</span>
                    </div>
                    <div className="text-right flex flex-col gap-4" dir="rtl">
                        <span className="text-xl font-bold flex items-center gap-3">
                            ایمیل
                            <RiMailOpenFill />
                        </span>
                        <span className="text-gray-500">sajadgone@proton.me</span>
                    </div>
                    <div className="text-right flex flex-col gap-4" dir="rtl">
                        <span className="text-xl font-bold flex items-center gap-3">
                            شماره همراه
                            <RiRecordMailFill />
                        </span>
                        <span className="text-gray-500">09032635596</span>
                    </div>
                    <div className="text-right flex flex-col gap-4" dir="rtl">
                        <span className="text-xl font-bold flex items-center gap-3">
                            سطح کاربری
                            <RiUserStarFill />
                        </span>
                        <span className="text-gray-500">کاربر حرفه ای</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Profile;