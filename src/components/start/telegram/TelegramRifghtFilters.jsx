// icons
import { MdFilterListAlt } from "react-icons/md";
import RightFilter from "../RightFilter";
import { Button, Checkbox, styled } from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TbCurrencyIranianRial } from "react-icons/tb";

function RightFilters() {
    const [category, setCategory] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        init();
    }, [])

    async function init() {
        setCategory([
            "معماری و دکوراسیون",
            "خودرو",
            "املاک و ساختمان",
            "سلامت",
            "انگیزشی",
            "ورزشی",
            "روانشناسی و فلسفه",
            "برنامه نویسی"
        ]);
    }

    const updateParam = (name, value) => {
        // Create a new URLSearchParams object from the current search params
        const newParams = new URLSearchParams(params);
        
        // Update the specific parameter
        newParams.set(name, value);
        
        // Set the new search params
        setParams(newParams);
    };

    function clearParam(name) {
        console.log("I am Clearing Params")
        const newParams = new URLSearchParams(params);
        newParams.delete(name);
        setParams(newParams);
    }

    function clearAllFilters() {
        // Create a new URLSearchParams object from the current search params
        const newParams = new URLSearchParams(params);
        newParams.delete("ptype");
        setParams(newParams);
    }

    function handleChangeMin(event) {
        const input = event.currentTarget.value.trim();
        if (input.length) {
            updateParam("minp", input);
        } else {
            clearParam("minp");
        }
    }
    
    function handleChangeMax(event) {
        const input = event.currentTarget.value.trim();
        if (!!input.length) {
            updateParam("maxp", input);
        } else {
            clearParam("maxp");
        }
    }

    return ( 
        <div className="flex flex-col w-fit gap-2 bg-white vazirmatn shadow-lg p-2">
            <div className="flex items-center justify-between w-full pr-2" onClick={clearAllFilters}>
                <div className="bg-telegram p-3 rounded-full text-white border border-white cursor-pointer hover:text-telegram hover:border-telegram hover:bg-white">
                    <FaFilterCircleXmark />
                </div>
                <span>
                    لغو فیلترها
                </span>
            </div>
            <RightFilter open={true} filter="دسته بندی موضوعی" icon={<MdFilterListAlt />}>
                <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                    <Checkbox checked={!params.get("ptype") || params.get("ptype") == 0} onChange={e => clearParam("ptype")} />
                    همه
                </label>
                {
                    category.map((ptype, index) => 
                        <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                            <Checkbox 
                                checked={params.get("ptype") == index + 1} 
                                onChange={e => {
                                    if (e.target.value) {
                                        updateParam(`ptype`, index + 1)
                                    }
                                }} 
                            />
                            {ptype}
                        </label>
                    )
                }
            </RightFilter>
            <RightFilter open={false} filter="بازه قیمت" icon={<TbCurrencyIranianRial />}>
                <span className="p-2 text-sm" dir="rtl">قیمت تعرفه ها بین:</span>
                <div className="flex items-center gap-2 p-2" dir="rtl">
                    <input type="number" placeholder="از (تومان)" onChange={handleChangeMin} className="bg-gray-200 rounded-md text-black min-w-5 px-2 text-sm py-2" />
                    <input type="number" placeholder="تا (تومان)" onChange={handleChangeMax} className="bg-gray-200 rounded-md text-black min-w-5 px-2 text-sm py-2" />
                </div>
            </RightFilter>
        </div>
     );
}

export default RightFilters;

