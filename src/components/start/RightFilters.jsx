// icons
import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsGenderTrans } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import RightFilter from "./RightFilter";
import { Button, Checkbox, styled } from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
function RightFilters() {
    return ( 
        <div className="flex flex-col w-fit gap-2 bg-white vazirmatn">
            <div className="flex items-center justify-between w-full pr-2">
                <div className="bg-telegram p-3 rounded-full text-white border border-white cursor-pointer hover:text-telegram hover:border-telegram hover:bg-white">
                    <FaFilterCircleXmark />
                </div>
                <span>
                    لغو همه فیلترها
                </span>
            </div>
            <RightFilter filter="زبان" icon={<HiMiniLanguage />}>
                
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    همه</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    فارسی</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    english</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    french</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    spannish</div>
            </RightFilter>
            <RightFilter filter="شهر" icon={<MdOutlineLocationCity />}>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    همه</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    تهران</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    شیراز</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    اصفهان</div>
                <div dir="rtl" className="text-sm">
                    <Checkbox checked={false} onChange={e => e.target.value = true} />
                    مشهد</div>
            </RightFilter>
            <RightFilter filter="جنسیت" icon={<BsGenderTrans />}>
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
            </RightFilter>
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
  