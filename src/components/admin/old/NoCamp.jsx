import { Button } from "@mui/material";
import { useState } from "react";
import NoCampForm from "./NoCampForm";

function NoCamp({ dispatch }) {

    const [isHide, setIsHide] = useState(true);

    return ( 
        // outer container
        <div className="w-full h-screen bg-gray-700 text-white">
            {/* container */}
            <div className={`w-full h-full transition-all duration-500 ${isHide ? "" : "scale-0"}`}>

                {/* inner container */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                    <img src="/src/assets/images/oh-no-camp.png" alt="" className="max-w-96" />
                    <h1 className="text-2xl">هنوز کمپینی ایجاد نشده</h1>
                    <Button variant="contained" onClick={() => setIsHide(false)}>
                        ایجاد کمپین
                    </Button>
                </div>
            </div>

            <NoCampForm isHide={isHide} dispatch={dispatch} />
        </div>
     );
}

export default NoCamp;