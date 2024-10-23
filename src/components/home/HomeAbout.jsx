import { shortAboutus, threefeatures } from "../../texts-source";
import GlassyButton from "../GlassyButton";
import NeonLightBg from "../NeonLightBg";
import X3DButton from "../X3DButton";

function HomeAbout() {
    return ( 
        // outer container
        <div className="relative flex justify-center w-screen">
            <NeonLightBg />
            <div className="flex md:flex-row flex-wrap flex-col-reverse gap-x-10 items-center justify-evenly  w-full max-w-7xl py-32">
                    {/* buttons */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="w-full flex justify-center">
                        <div className="flex md:gap-8 flex-wrap p-2 gap-2 mb-4 overflow-hidden">
                            {
                                threefeatures.map((feature, index) =>
                                    <X3DButton index={index}>
                                        <div className="flex flex-col items-center" dir="ltr">
                                            <span className="text-3xl text-telegram font-extrabold">{feature.value}</span>
                                            <span className=" text-xs text-gray-600">{feature.text}</span>
                                        </div>
                                    </X3DButton>
                                )
                                }
                        </div>
                    </div>
                {/* LEFT */}
                <div className="flex-1" dir="rtl">
                    {/* text and detail */}
                    <div data-aos="fade-right" data-aos-duration="1000" className="leading-8 p-2 md:p-0 text-justify text-sm font-extralight flex flex-col gap-4">
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
                <div className="flex-1" data-aos="fade-left" data-aos-duration="1000">
                    <img src="/src/assets/images/homeabout.gif" className="w-full rounded-xl" alt="" />
                </div>
            </div>
        </div>
     );
}

export default HomeAbout;