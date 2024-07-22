// import styles from './Wave.module.css';

import { useEffect } from "react";

function Wave({height = "100px", topcolor = "#282A35", bottomcolor = "#D9EEE1", className, styles, rotate = false }) {
    return ( 
        <div style={{height: height}} className={className}>
            <svg style={{backgroundColor: bottomcolor, width:"100%", height: "100%", transform: `${rotate ? "rotatey(180deg)" : "" }`}} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill={topcolor}></path>
            </svg>
        </div>
     );
}

export default Wave;