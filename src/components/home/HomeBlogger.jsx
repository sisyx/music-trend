import { RiHeartAdd2Fill } from "react-icons/ri";
import { diffrenttblogadmire, diffrenttblogadmire2 } from "../../texts-source";
import { GiPartyPopper } from "react-icons/gi";

function HomeBlogger({ card = {}, setCards, index }) {

    function handleHover() {
        // setCards(cur => {
        //     return cur.map((xcard, xindex) => {
        //         if (xindex === index) {
        //             xcard.isblur = false
        //         } else {
        //             xcard.isblur = true
        //         }
        //         return xcard
        //     })
        // })
        return
    }

    function handleBlur() {
        // setCards(cur => {
        //     return cur.map((xcard, xindex) => {
        //         xcard.isblur = false
        //         return xcard
        //     })
        // })
        return
    }

    return ( 
        <div data-aos="fade-up" data-aos-duration={`${index * 500 + 1000}`} onMouseEnter={handleHover} onMouseLeave={handleBlur} className={`flex flex-col gap-2 bg-gray-200 md:p-5 p-2 rounded-2xl transition-all duration-200 cursor-pointer ${card.isblur ? " blur-sm" : " blur-0"}`}>
            {/* img */}
            <div>
                <img src={card.imageUrl} alt="" className="rounded-2xl aspect-square w-full" />
            </div>
            {/* detail */}
            <div>
                {/* page id */}
                <div className="text-center">
                    {card.pageid}
                </div>

                {/* icons */}
                <div className="flex w-full justify-between items-center">
                    <div className="bg-telegram-transparent80 text-white p-2 md:text-2xl rounded-full hover:text-telegram hover:bg-white cursor-pointer duration-150 transition-all">
                        <RiHeartAdd2Fill />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <span className="text-sm hidden md:text-base md:block">
                                {diffrenttblogadmire}
                            </span>
                            <span className="text-s, md:text-base">
                                {diffrenttblogadmire2}
                            </span>
                        </div>
                        <span className="text-telegram md:text-2xl ">
                            <GiPartyPopper />
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomeBlogger;