// icons
import { MdFilterListAlt } from "react-icons/md";
import RightFilter from "../RightFilter";
import { Button, Checkbox, styled } from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function RightFilters() {
    const [pagetypes, setPagetypes] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        init();
    }, [])

    async function init() {
        setPagetypes([
        "سایت",
        "اپلیکیشن"
        ])
    }

    const updateParam = (name, value) => {
        // Create a new URLSearchParams object from the current search params
        const newParams = new URLSearchParams(params);
        
        // Update the specific parameter
        newParams.set(name, value);
        
        // Set the new search params
        setParams(newParams);
    };

    function clearAllFilters() {
        // Create a new URLSearchParams object from the current search params
        const newParams = new URLSearchParams(params);
        newParams.delete("ptype");
        setParams(newParams);
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
            <RightFilter open={true} filter="پلتفرم" icon={<MdFilterListAlt />}>
                <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                    <Checkbox checked={!params.get("ptype") || params.get("ptype") == 0} onChange={e => updateParam("ptype", "0")} />
                    هر دو
                </label>
                {
                    pagetypes.map((ptype, index) => 
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
        </div>
     );
}

export default RightFilters;


const ColorButton = styled(Button)(() => ({
    color: "#fff",
    backgroundColor: "#2da5dc",
    '&:hover': {
      backgroundColor: "#5e298e",
    },
  }));
  

