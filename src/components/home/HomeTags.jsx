import { hometagslist, hometagstitle1, hometagstitle2 } from "../../texts-source";

function HomeTags() {
    return ( 
        // outer container
        <div className="w-full flex justify-center ">
            <div className="flex items-center gap-6 text-sm justify-end p-5 bg w-full max-w-7xl overflow-x-scroll">
                <div className="flex gap-2">
                    {
                        hometagslist.map(tag => 
                            <div dir="rtl" className="md:py-2 md:px-6 md:border md:border-black rounded-full cursor-pointer hover:border-telegram hover:text-telegram duration-100 transition-all">
                                <span>
                                    #
                                </span>
                                <span>
                                    {tag}
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className="flex items-center gap-1" dir="rtl">
                    <span className="md:block hidden">
                        {hometagstitle1}
                    </span>
                    <span>
                        {hometagstitle2}
                    </span>
                </div>
            </div>
        </div>
     );
}

export default HomeTags;