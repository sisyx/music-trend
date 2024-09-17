import { imagebase } from "../../constatnts";
import { userComment } from "../../texts-source";
import VerticalSwiper from "../VerticalSwiper";
import styles from './HomeComments.module.css';
import { FaStar } from "react-icons/fa";

function HomeComments() {

    const comments = userComment.map(comment => 
        <div className="h-fit bg-white w-full text-black rounded-2xl p-8 flex flex-col justify-between gap-2">
            {/* top */}
            <div dir="rtl" className="flex">
                <div className="flex items-center justify-between w-full gap-4 text-sm font-extralight">
                    <div className="flex items-center gap-4 text-sm font-extralight">
                        {/* profile picure */}
                        <div>
                            <img src={`${imagebase}/card-photos/4.jpg`} alt="" className="w-14 rounded-full" />
                        </div>
                        {/* name */}
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">
                                {comment.username}
                            </span>
                            <span className="text-gray-500 text-sm">
                                کاربر فعال
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {/* text */}
                        <div className="flex gap-1">
                            <span>
                                امتیاز
                            </span>
                            <b className="text-primary  font-bold">5</b>
                            <span>از</span>
                            5
                        </div>
                        {/* stars */}
                        <div className="flex">
                            <FaStar color="#ea8006" />
                            <FaStar color="#ec920b" />
                            <FaStar color="#eda00f" />
                            <FaStar color="#efb014" />
                            <FaStar color="#f1c41a" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-sm text-gray-700" dir="rtl">
            {comment.comment}
            </div>
        </div>
    )

    return ( 
        <div style={{height: "616px"}}>
            <VerticalSwiper slides={[...comments, ...comments, ...comments, ...comments, ...comments, ...comments, ...comments, ...comments, ...comments]} />
        </div>
     );
}

export default HomeComments;