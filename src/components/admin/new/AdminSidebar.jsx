import { FiHome } from "react-icons/fi";
import styles from "./AdminSidebar.module.css"
import { FaAngleLeft } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbCategoryFilled } from "react-icons/tb";

function AdminSidebar({ state, setState }) {
    return ( 
        <div className={`hidden md:block w-80 pt-8 ${styles.container}`}>
            {/* title and icon */}
            <div className="flex items-center justify-center">
                <div className="text-2xl">Mokhatab Gostar</div>
                <img src="/logo.png" alt="logo" className="w-12" />
            </div>
            {/* options */}
            <div className="flex flex-col mt-20" dir="rtl">
                <div className="pr-3">
                    اصلی
                </div>
                <div className={`flex flex-col ${styles.option}`}>
                    <div className={`flex items-center justify-between p-3 cursor-pointer hover:bg-white hover:text-black ${state === "see pages" ? "bg-white text-black" : ""}`} onClick={() => setState("see pages")}>
                        <div className="flex items-center gap-2 text-2xl" dir="rtl">
                            <PiInstagramLogoFill />
                            <span className="text-base">
                            مدیریت اینفلوینسرها
                            </span>
                        </div>
                        <FaAngleLeft />
                    </div>
                    <div className={`flex items-center justify-between p-3 cursor-pointer hover:bg-white hover:text-black ${state === "see users" ? "bg-white text-black" : ""}`} onClick={() => setState("see users")}>
                        <div className="flex items-center gap-2 text-2xl" dir="rtl">
                            <RiUserSettingsFill />
                            <span className="text-base">
                                مدیریت کاربران سایت
                            </span>
                        </div>
                        <FaAngleLeft />
                    </div>
                    <div className={`flex items-center justify-between p-3 cursor-pointer hover:bg-white hover:text-black ${state === "see categories" ? "bg-white text-black" : ""}`} onClick={() => setState("see categories")}>
                        <div className="flex items-center gap-2 text-2xl" dir="rtl">
                            <TbCategoryFilled />
                            <span className="text-base">
                                مدیریت دسته بندی ها
                            </span>
                        </div>
                        <FaAngleLeft />
                    </div>
                    <div className={`flex items-center justify-between p-3 cursor-pointer hover:bg-white hover:text-black ${state === "see camps" ? "bg-white text-black" : ""}`} onClick={() => setState("see camps")}>
                        <div className="flex items-center gap-2 text-2xl" dir="rtl">
                            <FiHome />
                            <span className="text-base">
                                مدیریت کمپین ها
                            </span>
                        </div>
                        <FaAngleLeft />
                    </div>
                    <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-white hover:text-black">
                        <div className="flex items-center gap-2 text-2xl" dir="rtl">
                            <FiHome />
                            <span className="text-base">
                                داشبورد
                            </span>
                        </div>
                        <FaAngleLeft />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AdminSidebar;