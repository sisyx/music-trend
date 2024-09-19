import { useEffect, useState } from "react";
import StartCard from "./StartCard";

// icons
import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsArrowDown, BsGenderTrans } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import CircleGradient from "../loadings/CircleGradient";
import { useSearchParams } from "react-router-dom";
import { Button, Pagination } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toKFormat, toPercentFormat } from "../../funcs";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoCaretBack } from "react-icons/io5";
import InfluencerInfo from "./InfluencerInfo";
import { ArrowDownward } from "@mui/icons-material";
import { FaChevronDown } from "react-icons/fa";

function StartCards({ influencers, setInfs }) {
    const [selectedInf, seSelectedInf] = useState({});
    const [indetails, setindetails] = useState(false);
    const [params, setparams] = useSearchParams();
    const page = params.get("page");
    const [influsCount, setInflusCount] = useState(0);
    
    useEffect(() => {
        setInflusCount(6)
    }, []);

    function selectInf(inf) {
        seSelectedInf(() => inf);
        setindetails(() => true);
    }

    function handleShotMoreClick() {
        setInflusCount(cur => cur + 6)
    }


    return ( 
        <div>
            {
                influencers?.length 
                ? <div className={`transition-500`}>
                    <div className={`grid grid-cols-3 gap-3 p-3 w-full transition-500`}>
                        {influencers.slice(0, influsCount).map((influencer, index) => <StartCard index={index} selectInf={selectInf} setindetails={setindetails} influencer={influencer} />)}
                    </div>
                    {
                        influsCount < influencers.length &&
                        <div className="flex items-center gap-2 justify-center w-full py-2 cursor-pointer text-black " onClick={handleShotMoreClick}>
                            {/* <Pagination count={10} color="secondary" /> */}
                            <span>
                                مشاهده بیشتر
                            </span>
                            <FaChevronDown />
                        </div>
                    }
                </div> 
                : <div className="w-full h-full min-h-96 flex items-center justify-center pt-9">
                    <CircleGradient />
                </div>
            }
                <div className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent z-50 duration-500 transition-all ${indetails ? "scale-y-1" : 'scale-y-0'}`} onClick={e => {
                    e.stopPropagation();
                    setindetails(false);
                }}>
                    {
                        indetails 
                        ? <InfluencerInfo setInfs={setInfs} setindetails={setindetails} selectedInf={selectedInf} />
                        : ""
                    }
                </div>
        </div>
     );
}

export default StartCards;