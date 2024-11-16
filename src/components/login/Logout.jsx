import { useEffect } from "react";
import { logout } from '../../utils/auth'

function Logout() {

    useEffect(() => {
        logout();
        location.assign("/")
    }, [])

    return (
        <h1>
            در حال خروج از حساب
        </h1>
     );
}

export default Logout;