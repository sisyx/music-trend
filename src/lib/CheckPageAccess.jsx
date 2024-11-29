import { useNavigate } from "react-router-dom";
import { customAlert } from "../functions";
import { useEffect } from "react";
import { USER_LEVELS } from "../constatnts";
import { getRole } from "../utils/auth";

function CheckPageAccess() {

    const userRole = getRole();
    const navigate = useNavigate();

    useEffect(() => {
        const {hasAccess} = USER_LEVELS.find(level => level.value === userRole) || USER_LEVELS.at(0);
        if (!hasAccess) {
            customAlert("حساب کاربری شما در انتظار تایید میباشد. لطفا مجددا بعدا تلاش کنید.", "warn")
            setTimeout(() => {  
                navigate("/")
            })
        }
    }, []);
    return ( 
        <></>
     );
}

export default CheckPageAccess;