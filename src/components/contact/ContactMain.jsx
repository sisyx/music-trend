import styles from "./ContactMain.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { TextField } from "@mui/material";
import GlassyButton from "../GlassyButton";
import { LuArrowLeft, LuArrowUpLeft } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
function ContactMain() {
    return (
        //  outer container
        <div className="py-24 w-screen flex flex-col gap-7 items-center justify-center min-h-screen ">
            {/* title */}
            <div className={`flex w-full justify-between max-w-7xl p-12 ${styles.title}`} dir="rtl">
                <div className="text-3xl font-extrabold">تماس با ما</div>
                <div className="flex items-center">
                    <Link to='/' className="text-telegram cursor-pointer" >
                        صفحه اصلی
                    </Link>
                    <MdKeyboardArrowLeft />
                    <span>
                        تماس با ما
                    </span>
                </div>
            </div>
            <div className="flex w-full max-w-7xl">
                <div className=" flex flex-col-reverse items-center md:flex-row w-full max-w-7xl">
                    {/* left */}
                    <div className={`h-full flex items-center justify-center ${styles.left}`}>
                        <div className={`w-full ${styles.left_main}`}>
                            <div dir="rtl" className="text-gray-800">
                                لطفا نظرات و پیشنهادات خود را با ما در میان بگذارید
                            </div>
                            <div className="flex gap-1">
                                <div dir="rtl" className={styles.left_email_div}>
                                    <label htmlFor="email" style={{display: "none"}}>ایمیل</label>
                                    <input className={styles.email_input} type="email" name="email" placeholder="ایمیل"  />
                                </div>
                                <div dir="rtl" className={styles.left_email_div}>
                                    <label htmlFor="name" style={{display: "none"}}>نام</label>
                                    <input className={styles.email_input} type="text" name="name" placeholder="نام شما"  />
                                </div>
                            </div>
                            <div className={`${styles.left_email_div} ${styles.left_email_div_textarea}}`} dir="rtl">
                                <textarea name="comment" placeholder="نظر خود را بنویسید"  className={`${styles.email_input} ${styles.textarea}`}></textarea>
                            </div>
                        <div dir="rtl">
                            <GlassyButton to="/">
                                <div className="flex items-center justify-center gap-2">
                                    ارسال نظر
                                    <LuArrowUpLeft />
                                </div>
                            </GlassyButton>
                        </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className={`h-full ${styles.right}`}>
                        <div className={styles.right_main}>
                            <div className={styles.right_box} dir="rtl">
                                <div className={styles.right_box_icon}>
                                    <span className={styles.right_box_icon_bg}></span>
                                    <FaLocationDot />
                                </div>
                                <div className={styles.right_box_texts}>
                                    <div className="text-telegram">
                                        آدرس
                                    </div>
                                    <div className="text-gray-700 text-sm">
                                        مشهد، خیابان آزادی
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right_box} dir="rtl">
                                <div className={styles.right_box_icon}>
                                    <span className={styles.right_box_icon_bg}></span>
                                    <IoMdMail />
                                </div>
                                <div className={styles.right_box_texts}>
                                    <div className="text-telegram">
                                        آدرس ایمیل
                                    </div>
                                    <div className="text-gray-700 text-sm">تیم ما اینجاست تا به سوالات شما جواب دهد</div>
                                    <div className=" text-telegram">
                                        <a href="mailto:sajadgone@proton.me">sajadgone@proton.me</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right_box} dir="rtl">
                                <div className={styles.right_box_icon}>
                                    <span className={styles.right_box_icon_bg}></span>
                                    <BiPhoneCall />
                                </div>
                                <div className={styles.right_box_texts}>
                                    <div className="text-telegram">
                                        تلفن تماس
                                    </div>
                                    <div className="text-gray-700 text-sm">
                                    شنبه تا پنجشنبه ساعت ۸ تا ۲۰
                                    </div>
                                    <div className=" text-telegram">
                                        <a href="tel:+989032635596">09032635596</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right_box} dir="rtl">
                                <div className={styles.right_box_icon}>
                                    <span className={styles.right_box_icon_bg}></span>
                                    <FaLocationDot />
                                </div>
                                <div className={styles.right_box_texts}>
                                    <div className="text-telegram">
                                    شبکه های اجتماعی
                                    </div>
                                    <div className="text-gray-700 text-sm">
                                    مخاطب گستر را در شبکه های اجتماعی دنبال کنید
                                    </div>
                                    <div className=" text-telegram flex gap-1">
                                        <a href="http://instagram.com/sajad.dnx">اینستاگرام،</a>
                                        <a href="http://t.me/lyxo6xoxo5">تلگرام،</a>
                                        <a href="http://t.me/lyxo6xoxo5">یوتیوب</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ContactMain;