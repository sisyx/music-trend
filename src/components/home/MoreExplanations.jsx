import { useState } from "react";
import { moreExpTexts, moreExpTitle1, moreExpTitle2 } from "../../texts-source";
import GlassyButton from "../GlassyButton";

function MoreExplanations() {

    const [isExpanded, setIsExpanded] = useState(false);

    return ( 
        // outer container
        <div className="w-screen flex justify-center">
            <div className="bg-white rounded-2xl w-full max-w-7xl p-3 md:p-12">
                {/* title */}
                <div className="flex items-center gap-4 w-full" dir="rtl">
                    <div className="flex flex-col gap-0">
                        <span data-aos="zoom-out-up" data-aos-duration="1000" className="text-2xl font-extrabold text-telegram">
                            {moreExpTitle1}
                        </span>
                        <span data-aos="zoom-out-up" data-aos-duration="1000">
                            {moreExpTitle2}
                        </span>
                    </div>
                    {/* line */}
                    <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-gray-300"></div>
                </div>
                {/* main */}
                <div className={`flex flex-col gap-20 pt-12 overflow-hidden transition-all duration-700 ${isExpanded ? "" : "h-48"}`}>
                    {
                        moreExpTexts.map(item => 
                            <div dir="rtl" className="flex flex-col gap-3"data-aos="zoom-out-down" data-aos-duration="1000">
                                {
                                    item.title ? 
                                    <div className=" md:text-2xl text-base font-extrabold">
                                        {item.title}
                                    </div> : ""
                                }
                                <div className="text-justify text-sm text-gray-900">
                                    {item.text}
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* <div> */}
                    <div style={{
                        boxShadow: "0 0 15px #2da5dccc",
                        width: "fit-content",
                        borderRadius: "50px",
                        padding: "0",
                        background: "#2da5dc",
                        height: "fot-content"
                    }}
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                    >
                        <GlassyButton onClick={() => setIsExpanded(cur => !cur)}>
                            {
                                isExpanded 
                                ? "مشاهده کمتر"
                                : "مشاهده بیشتر"
                            }
                        </GlassyButton>
                    </div>
                {/* </div> */}
            </div>
        </div>
     );
}

export default MoreExplanations;