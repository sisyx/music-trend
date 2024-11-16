import { TbBrandCampaignmonitor } from "react-icons/tb";
import UserSideNavBtn from "./UserSideNavBtn";
import { RxAvatar } from "react-icons/rx";
import { RiHome2Line } from "react-icons/ri";
import { MdLogout, MdOutlineAddBox } from "react-icons/md";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";

const buttons = [
    {
        state: "/uPanel/profile",
        text: "پروفایل",
        icon: <RxAvatar />,
    },
    {
        state: "/uPanel/camps",
        text: "کمپین های شما",
        icon: <TbBrandCampaignmonitor />,
    },
    {
        state: "/start",
        text: "ایجاد کمپین",
        icon: <MdOutlineAddBox />,
    },
    {
        state: "/",
        text: "رفتن به صفحه اصلی",
        icon: <RiHome2Line />
    },
    {
        state: "/logout",
        text: "خروج از حساب کاربری",
        icon: <MdLogout />,
        color: "#FFF",
        bg: "#dd0000cc"
    },
]

function UserSideNav() {

    const [isVisible, setIsVisible] = useState(false);

    return ( 
        <>
            {
                !isVisible ? 
                <IconButton onClick={() => setIsVisible(cur => !cur)} className="block md:hidden" sx={{position: "fixed", top: "0", right: "0", borderRadius: "0", color: "#222"}}>
                    <GiHamburgerMenu />
                </IconButton>
                 : ""
            }
            <div className={`md:w-80 w-60 fixed md:static ${isVisible ? "right-0 md:right-auto translate-x-0" : "-right-full md:right-auto md:translate-x-0 translate-x-full"} duration-300 transition-all h-full bg-telegram flex flex-col`}>
                <IconButton onClick={() => setIsVisible(cur => !cur)} className="block md:hidden" sx={{position: "fixed", top: "0", right: "0", borderRadius: "0", color: "#fff"}}>
                    <GiHamburgerMenu />
                </IconButton>
                <div className="flex flex-col items-center p-4">
                    <img src="/logo.png" className="md:w-48 w-24 object-cover object-center" />
                    <span className="text-gray-100 md:text-2xl font-bold">
                        پنل کاربری مخاطب گستر
                    </span>
                </div>
                <div className="flex flex-col gap-0 md:pr-8 pr-2">
                    {
                        buttons.map(btn =>
                            <UserSideNavBtn btn={btn} />
                        )
                    }
                </div>
                <span className="flex-1"></span>
                <div className="mt-12 p-4">
                    <div className="text-white text-sm md:text-base text-justify" dir="rtl">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد 
                    </div>
                </div>
            </div>
        </>
     );
}

export default UserSideNav;