import { useState } from "react";
import { diffrenttype1Title, diffrenttype2Title } from "../../texts-source";
import GlassyButton from "../GlassyButton";
import HomeBlogger from "./HomeBlogger";
import { Link } from "react-router-dom";

const xcards = [
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/5.jpg",
        pageid: "sakad.dnx"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/2.jpg",
        pageid: "metallica"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/3.jpg",
        pageid: "hanyeh"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/4.jpg",
        pageid: "girlatworld"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/2.jpg",
        pageid: "metallica"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/5.jpg",
        pageid: "sakad.dnx"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/4.jpg",
        pageid: "girlatworld"
    },
    {
        isblur: false,
        imageUrl: "/src/assets/images/card-photos/3.jpg",
        pageid: "hanyeh"
    },
]

function HomeDifferentBolgs() {

    const [cards, setCards] = useState(xcards)

    return ( 
        // outer container
        <div className="w-screen flex justify-center">
            <div className="w-full max-w-7xl md:p-5 p-1">
                {/* top */}
                <div className="w-full flex justify-between">
                    <div data-aos="zoom-out-right" data-aos-duration="1000">
                        <GlassyButton to="/start" className="hidden md:block">
                                مشاهده همه
                        </GlassyButton>
                        <Link to="/start" className="text-sm text-telegram md:hidden">
                        مشاهده همه</Link>
                    </div>
                    <div className="flex flex-col" dir="rtl">
                        <span data-aos="zoom-out-left" data-aos-duration="1000" className="text-telegram md:text-2xl font-extrabold">{diffrenttype1Title}</span>
                        <span data-aos="zoom-in-left" data-aos-duration="1000" className="text-gray-500 md:text-2xl font-extrabold">{diffrenttype2Title}</span>
                    </div>
                </div>
                {/* cards */}
                <div className="mt-5 grid md:grid-cols-4 grid-cols-2 justify-center items-center md:gap-5 gap-2">
                    {
                        cards.map((card, index) => <HomeBlogger index={index} setCards={setCards} card={card} />)
                    }
                </div>
                </div>
        </div>
     );
}

export default HomeDifferentBolgs;