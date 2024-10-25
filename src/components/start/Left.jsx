import { Button } from "@mui/material";
import LeftCosts from "./LeftCosts";

function Left({ setShowCampaignSelect, costs, setCosts = () => {return} }) {

    function deleteCost(costId) {
        setCosts(cur => cur.filter(cost => cost.id !== costId));
    }

    return ( 
        <div className="md:w-72 w-full shadow-md p-2">
            <div className="flex justify-between gap-5 w-full">
            <div className="flex-1 text-center text-gray-900 rounded-md border w-fit p-2 cursor-default transition-all duration-500 relative group overflow-hidden">
                    <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                    <span className="text-sm md:text-base">
                        2542
                    </span>
                </div>
                <div className="flex-1 text-center text-gray-900 rounded-md border w-fit p-2 cursor-default transition-all duration-500 relative group overflow-hidden">
                    <span className="absolute block h-full top-0 bottom-0 right-0 w-2 bg-telegram duration-300 transition-all group-hover:w-full group-hover:bg-transparent"></span>
                    <span className="text-sm md:text-base">
                        تعداد ناشران
                    </span>
                </div>
            </div>
            <hr className="my-4" />
            <div className="h-full flex flex-col gap-2 items-center">
                <LeftCosts deleteCost={deleteCost} costs={costs} />
                {
                    costs.length ? 
                    <Button onClick={() => setShowCampaignSelect(true)} sx={{width: "100%"}} variant="contained">خرید و تایید نهایی محصولات</Button> : ""
                }
            </div>
        </div>
     );
}

export default Left;