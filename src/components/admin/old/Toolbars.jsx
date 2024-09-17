import Toolbar from "./Toolbar";
import { BsHouseAddFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";


function Toolbars({type, setState, state}) {

    const tools = [
        {
            title: "اضافه کردن کمپین",
            icon: <BsHouseAddFill fontSize="2rem" />,
            stateValue: "adding campaign",
            hoverColor: type === "instagram" ? "#e31e78" : "#2da5dc"
        },
        {
            title: "اضافه کردن پابلیشر",
            icon: <IoIosAddCircle fontSize="2rem" />,
            stateValue: "adding publisher",
            hoverColor: type === "instagram" ? "#e31e78" : "#2da5dc"
        },
        {
            title: "آپدیت پابلیشر",
            icon: <FiEdit3 fontSize="2rem" />,
            stateValue: "editting publisher",
            hoverColor: type === "instagram" ? "#e31e78" : "#2da5dc"
        },
    ]

    return ( 
        <>
            {
                tools.map((tool, index) => 
                    <Toolbar title={tool.title} icon={tool.icon} type={type} setState={setState} stateValue={tool.stateValue} state={state} index={index} />
                )
            }
        </>
     );
}

export default Toolbars;