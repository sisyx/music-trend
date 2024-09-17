import { Link } from "react-router-dom";
import styles from "./GlassyButton.module.css"

function GlassyButton({to = "", onClick = () => {return}, className = "w-fit block",  children}) {
    
    return ( 
        <Link to={to} onClick={onClick} className={`py-2 px-5 text-white rounded-full ${styles.btn} ${styles.btn_4} ${className}`}>
            {/* <div className={styles.span}> */}
                {children}
            {/* </div> */}
        </Link>
     );
}

export default GlassyButton;