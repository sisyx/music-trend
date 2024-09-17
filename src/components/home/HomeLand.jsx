import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";

function HomeLand() {
    return ( 
        <div className="bg-gray-100 pt-60 pb-60 min-h-screen flex justify-center vazirmatn">
            {/* inner container */}
            <div className="flex flex-col-reverse md:flex-row px-0 md:px-5 items-center max-w-7xl">
                {/* Left */}
                <div className="w-1/2 flex items-center justify-center">
                    <video autoPlay="true" loop="true" src="/src/assets/videos/landing.mp4"></video>
                </div>

                {/* Right */}
                <div className="md:w-1/2 md:px-0 px-2 w-full flex flex-col items-start gap-2 group">
                    {/* black title */}
                    <div className="text-right font-bold w-full text-gray-600 text-xl md:text-4xl ">
                        مخاطب گستر، بهترین پلتفرم
                    </div>
                    {/* blue title */}
                    <div className="font-black text-right w-full text-telegram text-xl md:text-4xl">
                        تبلیفاتی با 15 سال سابقه
                    </div>
                    {/* text */}
                    <div dir="rtl" className="relative text-justify pl-2 cursor-pointer text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، 
                    </div>

                    {/* beatifulities */}
                    <div className="flex items-center justify-between w-full">
                        {/* button */}
                        <Link to="/aboutus">
                            <button type="button" className="flex items-center justify-evenly gap-2 text-black hover:text-telegram hover:gap-4 transition-all duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                بیشتر بدانید
                                <PiArrowRight />
                            </button>
                        </Link>

                        <div className="text-gray-700 font-extrabold text-sm">
                            <div className="flex items-center gap-2">
                                <div dir="rtl" className="flex items-end gap-2">
                                    <span className="md:text-2xl ">
                                        +35,000
                                    </span>
                                    <span>مشتری وفاراد</span>
                                </div>
                                <span className="text-telegram">
                                    <FaUserTie fontSize="1.5rem" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomeLand;