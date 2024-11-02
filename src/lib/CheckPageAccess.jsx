import { useNavigate } from "react-router-dom";
import { customAlert, getRole } from "../functions";
import { useEffect } from "react";
import { userLevels } from "../constatnts";

function CheckPageAccess() {

    const userRole = getRole();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('has access? :')
        const {hasAccess} = userLevels.find(level => level.value === userRole);
        if (!hasAccess) {
            customAlert("حساب کاربری شما در انتظار تایید میباشد. لطفا مجددا بعدا تلاش کنید.", "warn")
            console.log("this user does not have access to this page");
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