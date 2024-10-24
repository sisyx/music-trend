// icons
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdFilterListAlt } from "react-icons/md";
import RightFilter from "./RightFilter";
import { Button, Checkbox, styled } from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getPageCategories, getPageTypes, toPersianUnits } from "../../functions";
import { useSearchParams } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";
import MinMaxSlider from "./MinMaxSlider";
import { genders } from "../../constatnts";
import { PiGenderIntersexBold } from "react-icons/pi";
function RightFilters() {
    const [pagetypes, setPagetypes] = useState([]);
    const [pageCats, setPageCats] = useState([]);
    const [params, setParams] = useSearchParams();
    const [maxPrice, setMaxPrice] = useState(100)
    const [minPrice, setMinPrice] = useState(100)

    useEffect(() => {
        init();
    }, [])

    useEffect(() => {
        updateParam("maxp", maxPrice)
    }, [maxPrice])


    useEffect(() => {
        updateParam("minp", minPrice)
    }, [minPrice])

    async function init() {
        const xtypes = await getPageTypes();
        setPagetypes(xtypes);
        const xcats = await getPageCategories();
        setPageCats(xcats);
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
        newParams.delete("pcat");
        newParams.delete("ptype");
        newParams.delete("maxp");
        newParams.delete("minp");
        newParams.delete("pgender")
        setParams(newParams);
    }

    return ( 
        <div className="flex flex-col w-fit gap-2 bg-white vazirmatn">
            <div className="flex items-center justify-between w-full pr-2" onClick={clearAllFilters}>
                <div className="bg-telegram p-3 rounded-full text-white border border-white cursor-pointer hover:text-telegram hover:border-telegram hover:bg-white">
                    <FaFilterCircleXmark />
                </div>
                <span>
                    لغو همه فیلترها
                </span>
            </div>
            <RightFilter filter="نوع پیج" icon={<MdFilterListAlt />}>
                <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                    <Checkbox checked={!params.get("ptype") || params.get("ptype") == 0} onChange={e => updateParam("ptype", "0")} />
                    همه
                </label>
                {
                    pagetypes.map((ptype, index) => 
                        <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                            <Checkbox 
                                checked={params.get("ptype") == index + 1} 
                                onChange={e => {
                                    console.log(e.target.value)
                                    if (e.target.value) {
                                        updateParam(`ptype`, index + 1)
                                    }
                                }} 
                            />
                            {ptype.name}
                        </label>
                    )
                }
            </RightFilter>
            <RightFilter filter="دسته بندی" icon={<TbCategoryFilled />}>
                <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                    <Checkbox checked={!params.get("pcat") || params.get("pcat") == 0} onChange={e => updateParam("pcat", 0)} />
                    همه
                </label>
                {
                    pageCats.map((pcat, index) => 
                        <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                            <Checkbox 
                                checked={params.get("pcat") == index + 1} 
                                onChange={e => {
                                    console.log(e.target.value)
                                    if (e.target.value) {
                                        updateParam(`pcat`, index + 1)
                                    }
                                }} 
                            />
                            {pcat.categoryName}
                        </label>
                    )
                }
            </RightFilter>
            {/* <RightFilter filter="قیمت" icon={<HiCurrencyDollar />}>
                <div className="flex flex-col px-4 pt-4 w-full overflow-x-hidden">
                    <div dir="rtl" className="flex flex-col text-sm max-w-64">
                        <div className="flex flex-wrap gap-2 justify-start">
                            <span>از</span>
                            <span>{toPersianUnits(minPrice)}</span>
                            <span>تومان</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-start">
                            <span>تا</span>
                            <span>{toPersianUnits(maxPrice)}</span>
                            <span>تومان</span>
                        </div>
                    </div>
                    <MinMaxSlider setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
                </div>
            </RightFilter> */}
            <RightFilter filter="جنسیت" icon={<PiGenderIntersexBold />}>
                <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                    <Checkbox checked={!params.get("pgender") || params.get("pgender") == 0} onChange={_e => updateParam("pgender", 0)} />
                    همه
                </label>
                {
                    genders.map((pgender, index) => 
                        <label dir="rtl" className="text-sm cursor-pointer hover:bg-gray-100">
                            <Checkbox 
                                checked={params.get("pgender") == index + 1}
                                onChange={e => {
                                    if (e.target.value) {
                                        updateParam(`pgender`, index + 1)
                                    }
                                }} 
                            />
                            {pgender.text}
                        </label>
                    )
                }
            </RightFilter>
            {/* <RightFilter filter="جنسیت" icon={<BsGenderTrans />}>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    همه</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    زن</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    مرد</div>
            </RightFilter>
            <RightFilter filter="نوع" icon={<MdCategory />}>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    همه</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    ورزشی</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    فیلم و سریال</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    آموزشی</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    روزمره</div>
            </RightFilter> */}
            {/* <RightFilter icon={MdOutlineLocationCity} /> */}
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
  

