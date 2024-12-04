import { useNavigate } from "react-router-dom";
import { customAlert } from "../functions";
import { useEffect } from "react";
import { USER_LEVELS } from "../constatnts";
import { getRole } from "../utils/auth";
import { toast } from "react-toastify";

function CheckPageAccess() {
    const userRole = getRole();
    const navigate = useNavigate();

    useEffect(() => {
        const {hasAccess} = USER_LEVELS.find(level => level.value === userRole) || USER_LEVELS.at(0);
        if (!userRole) {
            navigate("/login");
            return;
        };
        if (!hasAccess) {
            customAlert("حساب کاربری شما در انتظار تایید میباشد. لطفا مجددا بعدا تلاش کنید.", "warn")
            setTimeout(() => {  
                navigate("/")
            })
            return;
        };

        return () => toast.dismiss();
    }, []);
    return (
        <></>
     );
}

export default CheckPageAccess;