import { Avatar, Checkbox, Tooltip } from "@mui/material";
import GlassyButton from "../../GlassyButton";
import { USER_LEVELS } from "../../../constatnts";
import { customAlert } from "../../../functions";
import { getCookie } from "../../../lib/cacheAndStorage";
import { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import UserSettings from "./UserSettings";
import { BASE_URL } from "../../../config/config";

function User({user, setUsers}) {

    const [role, setRole] = useState(user.roles);
    const [isInSettings, setIsInSettings] = useState(false);
    const nextUserLevel = USER_LEVELS.find(xrole => xrole.prev === role);
    const prevUserLevel = USER_LEVELS.find(xrole => xrole.next === role);
    const [isAccepted, setIsAccepted] = useState(role !== USER_LEVELS.at(0).value);
    const savedUsername = getCookie("username");
    
    useEffect(() => {
        setRole(user.roles);
        setIsAccepted(user.roles !== USER_LEVELS.at(0).value);
    }, [user]);

    async function updateUser() {
        const newUserData = {
            ...user,
            roles: nextUserLevel.value
        }

        const token = getCookie("token");

        try {
            const req = await fetch(`${BASE_URL}/user/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newUserData),
            })

            if (!req.ok) {
                throw new Error("failed to update user")
            }

            const res = await req.json();
            customAlert(
            `کاربر
                ${user.username}
                به 
                ${nextUserLevel.persianName}
                ارتقاع یافت`)
            setUsers(cur => cur.map(xuser => xuser.id === user.id ? {...user, roles: nextUserLevel.value } : xuser));
            setRole(() =>
                nextUserLevel.value
            );
            setIsAccepted(true);
            return res
        } catch (error) {
            customAlert("ارتقاع ناموفق بود!")
            console.error(error)
        }
    }

    async function downgrageUser() {
        const newUserData = {
            ...user,
            roles: prevUserLevel.value
        }

        const token = getCookie("token");

        try {
            const req = await fetch(`${BASE_URL}/user/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newUserData),
            })

            if (!req.ok) {
                throw new Error("failed to update user")
            }

            const res = await req.json();
            setUsers(cur => cur.map(xuser => xuser.id === user.id ? {...user, roles: prevUserLevel.value } : xuser));
            setRole(() =>
                prevUserLevel.value
            );
            setIsAccepted(false);
            return res
        } catch (error) {
            customAlert("عملیات نام ناموفق بود!")
            console.error(error)
        }
    }

    return ( 
        <div className={`flex items-center justify-end gap-6 p-3 px-5 rounded-full ${role === USER_LEVELS[3].value ? "hover:bg-black text-white bg-gray-700" : role === USER_LEVELS[2].value ? "bg-gray-100 hover:bg-gray-200 border-black border" : " bg-gray-100 hover:bg-gray-200" } cursor-pointer`}>
                {/* left */}
                <div className="md:flex-1 flex gap-2">
                    {/* <GlassyButton onClick={() => setIsInSettings(true)}>مشاهده کاربر</GlassyButton> */}
                    {
                        nextUserLevel?.persianName
                        ? 
                            <>
                            <div className="hidden md:block">
                                <GlassyButton onClick={updateUser}>ارتقاع به {nextUserLevel.persianName}</GlassyButton>
                            </div>
                            <div className="md:hidden underline">
                                ارتقاع به {nextUserLevel.persianName}
                            </div>
                            </>
                        : ""
                    }
                </div>
                {/* right */}
                <div className="flex flex-1 justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span>
                            {USER_LEVELS.find(xrole => xrole.value === role).persianName}
                        </span>
                        {/* <Avatar /> */}
                    </div>
                    <div className="flex items-center gap-2">
                        <span>
                            {user.username}
                        </span>
                        <div className="hidden md:block">
                            {
                                role === USER_LEVELS[3].value
                                ? <FaUserSecret fontSize="2rem" />
                                : <Avatar />
                            }
                        </div>
                        {
                            user.username !== savedUsername ?
                            <Tooltip title={isAccepted ? "اتمام عضویت کاربر" : "پذیرش درخواست عضویت"}>
                                <Checkbox onClick={() => isAccepted ? downgrageUser() : updateUser()} checked={isAccepted} />
                            </Tooltip> : ""
                        }
                    </div>
                </div>
                {
                    isInSettings &&
                    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent text-black cursor-default" onClick={e => {
                        e.stopPropagation();
                        setIsInSettings(false)
                    }}>
                        <UserSettings user={user} />
                    </div>
                }
            </div>
     );
}

export default User;