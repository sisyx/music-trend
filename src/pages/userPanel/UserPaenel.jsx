import { useEffect, useState } from "react";
import { getRole } from "../../utils/auth";
import { USER_LEVELS } from "../../constatnts";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/userPanel/Profile";
import UserSideNav from "../../components/userPanel/UserSideNav";
import UserNav from "../../components/userPanel/UserNav";

function UserPaenel() {
    const [_isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        init();
    }, []);

    function init() {
        const role = getRole();
        if (!USER_LEVELS.find(level => level.value === role)) {
            navigate("/login");
        }
        setIsLoaded(true);
    }

    return ( 
        <div className="h-screen w-full flex">
            {/* <div className="flex-1 flex flex-col">
                <UserNav />
                {
                    state === "profile" ? <Profile /> : ""
                }
            </div> */}
            <div className="flex-1">

            </div>
            <UserSideNav />
        </div>
     );
}

export default UserPaenel;