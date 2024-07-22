import { useEffect, useState } from "react";
import StartCard from "./StartCard";

// icons
import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsGenderTrans } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import CircleGradient from "../loadings/CircleGradient";
import { useSearchParams } from "react-router-dom";
import { Button, Pagination } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toKFormat, toPercentFormat } from "../../funcs";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoCaretBack } from "react-icons/io5";

function StartCards({ influencers }) {
    const [selectedInf, seSelectedInf] = useState({});
    const [indetails, setindetails] = useState(false);
    const [params, setparams] = useSearchParams();
    const page = params.get("page");
    const [from, setFrom] = useState(0);
    
    useEffect(() => {
        setFrom(() => page * 6)
    }, []);

    function selectInf(inf) {
        seSelectedInf(() => inf);
        setindetails(() => true);
    }


    return ( 
        <div>
            {
                influencers?.length 
                ? <div className={`${indetails ? 'absolute translate-y-full scale-50' : ''} transition-500`}>
                    <div className={`grid grid-cols-3 gap-3 p-3 w-full transition-500`}>
                        {influencers.slice(from, from + 6).map((influencer, index) => <StartCard index={index} selectInf={selectInf} setindetails={setindetails} influencer={influencer} />)}
                    </div>
                    <div className="flex justify-center pt-6 pb-6 w-full ">
                        <Pagination count={10} color="secondary" />
                    </div>
                </div> 
                : <div className="w-full h-full min-h-96 flex items-center justify-center pt-9">
                    <CircleGradient />
                </div>
            }
            <div className={`w-full text-gray-900 p-5 transition-500 ${indetails ? 'relative' : 'absolute translate-y-full scale-50'}`}>
                <div className="text-right font-bold text-2xl">
                    <span>اطلاعات ناشر</span>
                </div>
                <br />
                <hr />
                <div className="text-black flex justify-end items-end p-4">
                    <div className="flex gap-5">
                        {/* details */}
                        <div className="flex gap-5 items-end justify-evenly w-full">
                            <div className="flex flex-col">
                                <span className="font-bold">نرخ مشارکت</span>
                                {
                                    selectedInf
                                    ? <span>{toPercentFormat(selectedInf?.participateRate)}</span> 
                                    : ""
                                }
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">فالورها</span>
                                {
                                    selectedInf ? 
                                    <span>{toKFormat(selectedInf?.followers)}</span>
                                    : ""
                                }
                            </div>
                        </div>
                        {/* image */}
                        <div className="w-36 rounded-full overflow-hidden border-primary border-2">
                            <img src={selectedInf?.imgUrl} alt="influencer image" />
                        </div>
                    </div>
                </div>
                <hr />
                {/* minor details */}
                <div className="flex justify-end gap-2 pt-4 text-xs">
                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-telegram transition-all duration-1000 cursor-pointer">
                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                        <HiMiniLanguage />
                        <span>{selectedInf?.language}</span>
                    </div>
                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-telegram transition-all duration-1000 cursor-pointer">
                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                        <MdOutlineLocationCity />
                        <span>{selectedInf?.city}</span>
                    </div>
                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-telegram transition-all duration-1000 cursor-pointer">
                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                        <BsGenderTrans />
                        <span>{selectedInf?.gender}</span>
                    </div>
                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-telegram transition-all duration-1000 cursor-pointer">
                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                        <MdCategory />
                        <span>{selectedInf?.category}</span>
                    </div>
                </div>
                <br />
                <hr />
                {/* prices */}
                <div className="flex flex-col gap-3 items-end p-5">
                        {
                            selectedInf?.services?.map(price => 
                            <div className="flex flex-row-reverse items-center justify-between gap-2 w-full max-w-96">
                                <div className="flex items-center gap-2">
                                <div>
                                    {price.name}
                                </div>
                                    <div className="relative overflow-hidden group flex items-center gap-4 border rounded-xl w-fit p-2 text-white  bg-gradient-to-r  from-primary-start hover:to-primary-start hover:from-primary-end  to-primary-end transition-all duration-1000 cursor-pointer">
                                        <span className="absolute block top-0 bottom-0 left-full m-auto bg-brightbefore w-full  transition-500 group-hover:w-full group-hover:bg-transparent group-hover:-left-full"></span>
                                        <AddShoppingCartIcon />
                                        {/* <span>محصولات زیبایی</span> */}
                                    </div>
                                {/* title */}
                                </div>
                                {/* price */}
                                <div className="flex items-end gap-2">
                                    <span>
                                        تومان
                                    </span>
                                    <span>
                                        {price.price}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button onClick={() => setindetails(false)} className="group absolute top-4 left-4 p-5 bg-telegram rounded-full text-red hover:bg-primary z-20">
                    <IoCaretBack className="group-hover:text-white text-white " />
                </button>
            </div>
        </div>
     );
}

export default StartCards;