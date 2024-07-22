// icons
import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsGenderTrans } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import RightFilter from "./RightFilter";
import { Button, styled } from "@mui/material";
function RightFilters() {
    return ( 
        <div className="flex flex-col w-fit bg-white vazirmatn">
            <RightFilter filter="زبان" icon={<HiMiniLanguage />}>
                <ColorButton variant="contained">همه</ColorButton>
                <Button>فارسی</Button>
                <Button>english</Button>
                <Button>french</Button>
                <Button>spannish</Button>
            </RightFilter>
            <RightFilter filter="شهر" icon={<MdOutlineLocationCity />}>
                <ColorButton variant="contained">همه</ColorButton>
                <Button>تهران</Button>
                <Button>شیراز</Button>
                <Button>اصفهان</Button>
                <Button>مشهد</Button>
            </RightFilter>
            <RightFilter filter="جنسیت" icon={<BsGenderTrans />}>
                <ColorButton variant="contained">همه</ColorButton>
                <Button>زن</Button>
                <Button>مرد</Button>
            </RightFilter>
            <RightFilter filter="نوع" icon={<MdCategory />}>
                <ColorButton variant="contained">همه</ColorButton>
                <Button>ورزشی</Button>
                <Button>فیلم و سریال</Button>
                <Button>آموزشی</Button>
                <Button>روزمره</Button>
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
  