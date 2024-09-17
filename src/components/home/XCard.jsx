import { BsLightningCharge } from "react-icons/bs";
import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-router-dom";

function XCard() {
    return ( 
        <div className="relative p-8 shadow-md max-w-80 group  cursor-default vazirmatn">
            {/* line */}
            <div className="grouph-1 w-full h-1 absolute top-0 left-0 bg-gradient-to-r from-primary-start to-primary-end group-hover:from-primary-end group-hover:to-primary-start"></div>
            {/* Title */}
            <div className="font-black text-right text-primary-end text-2xl mb-4 group-hover:text-primary-start">عنوان کارت</div>
            {/* text */}
            <div dir="rtl" className="text-gray-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </div>
            {/* bottom */}
            <div className="mt-5 flex items-center justify-between">
                <Link to="/start">
                    <button type="button" className="flex items-center justify-evenly gap-2 text-black hover:text-primary-start hover:gap-4 transition-all duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        ایجاد کمپین
                        <PiArrowRight />
                    </button>
                </Link>
                <div className="rounded-full p-3 cursor-pointer transition-all duration-150 hover:bg-gray-300 w-fit">
                    <BsLightningCharge color="#e31e78" fontSize="2rem" />
                </div>
            </div>
        </div>
     );
}

export default XCard;