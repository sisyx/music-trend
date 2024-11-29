import { CiViewList } from "react-icons/ci";
import { HiViewGrid } from "react-icons/hi";
import { MdViewModule } from "react-icons/md";

export const BASE_URL = "https://mokhatabgostar.ir";

export const viewModes = [
    {
        name: "large",
        value: "large",
        icon: <HiViewGrid />,
    },
    {
        name: "medium",
        value: "medium",
        icon: <MdViewModule />,
    },
    {
        name: "small",
        value: "small",
        icon: <CiViewList />,
    },
]