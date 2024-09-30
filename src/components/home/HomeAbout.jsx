import { imagebase } from "../../constatnts";
import { shortAboutus, threefeatures } from "../../texts-source";
import GlassyButton from "../GlassyButton";
import NeonLightBg from "../NeonLightBg";
import X3DButton from "../X3DButton";

function HomeAbout() {
    return ( 
        // outer container
        <div className="bg-gray-100 flex justify-center w-screen">
            <NeonLightBg />
            <div className="flex md:flex-row flex-col-reverse gap-10 items-center justify-evenly  w-full max-w-7xl py-32">
                {/* LEFT */}
                <div className="flex-1" dir="rtl">
                    
                    {/* buttons */}
                    <div className="flex md:gap-8 flex-wrap p-2 gap-2 mb-12 overflow-hidden">
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

                    {/* text and detail */}
                    <div className=" leading-8 p-2 md:p-0 text-justify text-sm font-extralight flex flex-col gap-4">
                        <div>
                            <div className="text-telegram">
                                درباره ما
                            </div>
                            <div className="md:text-3xl font-extrabold text-gray-800">
                                درباره مخاطب گستر
                            </div>
                        </div>
                        <div className="w-full">
                        {shortAboutus}
                        </div>
                        <div>
                            <GlassyButton to="/aboutus">
                            مشاهده بیشتر
                            </GlassyButton>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                    {/* <img src={`${imagebase}/aboutus1.jpg`} alt="" className="w-full" /> */}
                    <img src="/src/assets/images/homeabout.gif" className="w-full rounded-xl" alt="" />
                </div>
            </div>
        </div>
     );
}

export default HomeAbout;