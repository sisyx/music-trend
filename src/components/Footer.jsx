import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import { IoIosCall } from "react-icons/io";
import { imagebase } from "../constatnts";

function Footer() {
    return ( 
        // outer container
        <footer className="bg-gray-100 w-screen flex justify-center pt-20 overflow-hidden">
            <div className="w-full flex md:flex-row flex-col-reverse gap-y-28">
                {/* left */}
                <div className={styles.left} dir="rtl">
                    <div className={styles.left_content}>
                        <div className="">
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-col gap-7">
                                    <span className={`${styles.title}`}>
                                        راههای ارتباطی
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-3">
                                            <a href="" className="flex items-center gap-3">
                                                <IoIosCall />
                                                <span>
                                                    تلفن تماس:
                                                </span>
                                            </a>
                                            <a href="tel:09125861254" className="text-sm">
                                                09125861254
                                            </a>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="" className="flex items-center gap-3">
                                                <IoIosCall />
                                                <span>
                                                    تلفن تماس:
                                                </span>
                                            </a>
                                            <a href="tel:09125861254" className="text-sm">
                                                09125861254
                                            </a>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="" className="flex items-center gap-3">
                                                <IoIosCall />
                                                <span>
                                                    تلفن تماس:
                                                </span>
                                            </a>
                                            <a href="tel:09125861254" className="text-sm">
                                                09125861254
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <span className={`${styles.title}`}>
                                        دسترسی سریع
                                    </span>
                                    <div className="h-48 flex flex-col gap-7 ">
                                        <a href="">ایجاد کمپین</a>
                                        <a href="">تماس با ما</a>
                                        <a href="">درباره ما</a>
                                        <a href="">ورود به خساب</a>
                                        <a href="">ایجاد حساب</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                        <a href="">خدمات 4</a>
                                        <a href="">خدمات 4</a>
                                        <a href="">خدمات 4</a>
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