import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import { IoIosCall } from "react-icons/io";
import { imagebase } from "../constatnts";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return ( 
        // outer container
        <footer className="w-screen flex justify-center pt-48 overflow-hidden">
            <div className="w-full flex md:flex-row flex-col-reverse gap-y-28">
                {/* left */}
                <div className={styles.left} dir="rtl">
                    <div className={styles.left_content}>
                        <div className="w-full flex flex-col items-center">
                            <div className="flex flex-col sm:flex-row md:flex-col gap-12">
                                <div className="flex flex-col gap-4 md:gap-7">
                                    <span className={`${styles.title}`}>
                                        راههای ارتباطی
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-3">
                                            <a href="" className="flex items-center gap-3">
                                                <IoIosCall />
                                                <span className=" text-nowrap">
                                                    تلفن تماس:
                                                </span>
                                            </a>
                                            <a href="tel:+982122981547" className="text-sm">
                                                +9821 22981547
                                            </a>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="" className="flex items-center gap-3">
                                                <AiFillInstagram />
                                                <span className=" text-nowrap">
                                                    صفحه اینستاگرام:
                                                </span>
                                            </a>
                                            <a href="https://instagram.com/mokhatabgostar.ir" target="_blank" className="text-sm">
                                                mokhatabgostar.ir
                                            </a>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="" className="flex items-center gap-3">
                                                <IoIosCall />
                                                <span className=" text-nowrap">
                                                    تلگرام:
                                                </span>
                                            </a>
                                            <a href="tg://resolve?domain=mokhatabgostar" className="text-sm">
                                                @mokhatabgostar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-4 md:gap-7">
                                    <span className={`${styles.title}`}>
                                        دسترسی سریع
                                    </span>
                                    <div className="grid grid-cols-2 gap-2 md:flex flex-col md:gap-7 ">
                                        <a href="">ایجاد کمپین</a>
                                        <a href="">تماس با ما</a>
                                        <a href="">درباره ما</a>
                                        <a href="">ورود به خساب</a>
                                        <a href="">ایجاد حساب</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex flex-col gap-7">
                                <span className={`${styles.title}`}>
                                    حدمات ما
                                </span>
                                <div className="h-48 flex flex-col gap-7 ">
                                    <a href="">خدمات 1</a>
                                    <a href="">خدمات 2</a>
                                    <a href="">خدمات 3</a>
                                    <a href="">خدمات 3</a>
                                    <a href="">خدمات 4</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* left */}
                <div className="flex-1">
                    
                    <div>
                        {/* top */}
                        <div className="flex flex-col items-center">
                            <img src='/logo.png' alt="" className={styles.logo} />
                            <div className={`${styles.site_name} sm:text-2xl md:text-4xl`}>MOKHATAB GOSTAR</div>
                        </div>
                        <div dir="rtl" className="text-center">
                        کلیه حقوق این وب سایت متعلق به مخاطب گستر میباشد. <br/> ارایه دهنده: <span className="font-extrabold">WebPro Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;