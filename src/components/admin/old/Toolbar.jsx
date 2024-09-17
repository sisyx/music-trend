import { Tooltip } from "@mui/material";
import styles from "./Toolbar.module.css";

function Toolbar({ type, title, icon, stateValue, setState, state, index}) {
    return ( 
        <div 
            className={`cursor-pointer ${styles.toolbar}`} 
            onClick={() => setState(stateValue)} 
            style={{
                animationDelay: `${index * 100}ms`
            }}
        >
            <Tooltip title={title} placement="left">
                <div className={`p-2 bg-gray-900 ${state === stateValue ? type === "instagram" ? "bg-primary" : "bg-telegram" : ""} hover:${type === "instagram" ? "bg-primary" : "bg-telegram"}`}>
                    {icon}
                </div>
            </Tooltip>
        </div>
     );
}

export default Toolbar;