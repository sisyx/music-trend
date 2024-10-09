import styles from "./AboutUsMain.module.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { imagebase } from "../../constatnts";
import X3DButton from "../X3DButton";
import { shortAboutus, threefeatures } from "../../texts-source";

function AboutUsMain() {
    return (
        //  outer container
        <div className="py-28 w-screen flex flex-col items-center justify-center min-h-screen ">
            {/* title */}
            <div className={`flex w-full justify-between max-w-7xl p-12 pb-0 ${styles.title}`} dir="rtl">
                <div className="text-3xl font-extrabold">درباره ما</div>
                <div className="flex items-center">
                    <Link to='/' className="text-telegram cursor-pointer" >
                        صفحه اصلی
                    </Link>
                    <MdKeyboardArrowLeft />
                    <span>
                        درباره ما
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-evenly flex-col md:flex-row p-2  w-full max-w-7xl py-20">
                {/* LEFT */}
                <div className="flex-1" dir="rtl">
                    {/* text and detail */}
                    <div className=" leading-8 text-justify text-sm font-extralight flex flex-col gap-4">
                        <div>
                            <div className="text-telegram">
                                درباره ما
                            </div>
                            <div className="text-3xl font-extrabold text-gray-800">
                                درباره مخاطب گستر
                            </div>
                        </div>
                        <div>
                        {shortAboutus}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                    <img src={`${imagebase}/aboutus1.jpg`} alt="" className="w-full" />
                </div>
            </div>
            {/* buttons */}
            <div className="flex gap-8 flex-wrap mb-0 w-full max-w-7xl">
                {
                    threefeatures.map(feature =>
                        <X3DButton>
                            <div className="flex flex-col items-center" dir="ltr">
                                <span className="text-3xl text-telegram font-extrabold">{feature.value}</span>
                                <span className=" text-xs text-gray-600">{feature.text}</span>
                            </div>
                        </X3DButton>
                        )
                }
            </div>
        </div>
     );
}

export default AboutUsMain;