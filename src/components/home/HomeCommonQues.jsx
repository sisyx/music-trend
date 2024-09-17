import { Dvr } from "@mui/icons-material";
import { useState } from "react";
import { commonQuestions } from "../../texts-source";
import { FaAngleDown } from "react-icons/fa6";
import HomeCommonQ from "./HomeCommonQ";
import VerticalSwiper from "../VerticalSwiper";
import HomeComments from "./HomeComments";

function HomeCommonQues() {

    const [ques, setQues] = useState(commonQuestions);

    function handleExpand(index) {
        setQues(cur => 
            cur.map((x, xindex) => 
                {
                    if (xindex === index) return {...x, isExpanded: true}
                    else 
                        return {...x, isExpanded: false}
                })
        )
    }

    return (
        // outer container
        <div className="bg-gray-100 w-screen flex justify-center">
            <div className="w-full max-w-7xl py-20 flex flex-col-reverse md:flex-row items-center">
                <div className="flex-1 h-full">
                    <HomeComments />
                </div>
                <div className="flex-1 flex flex-col gap-8 p-3 md:p-0" dir="rtl">
                    {
                        ques.map((que, index) => 
                            <HomeCommonQ index={index} que={que} handleExpand={handleExpand} />
                        )
                    }
                </div>
            </div>

        </div>
     );
}

export default HomeCommonQues;