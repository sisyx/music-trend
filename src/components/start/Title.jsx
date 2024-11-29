import { useEffect } from "react";

function Title({value = "taarifValue", currnetPrice = "", name = "اسم تعرفه", onClick = () => {return}}) {
    return ( 
        <div onClick={() => onClick(value)} className={`border border-opacity-0 border-telegram bg-telegram p-2 px-6 cursor-pointer ${currnetPrice === value ? "bg-opacity-30 border-opacity-100 hover:bg-opacity-70" : "bg-opacity-0 hover:bg-opacity-20"}`}>
            {value}
        </div>
     );
}

export default Title;