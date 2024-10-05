import { Avatar, Button } from "@mui/material";
import GlassyButton from "../../GlassyButton";
import { root, userLevels } from "../../../constatnts";
import { customAlert, getCookie } from "../../../functions";
import { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import UserSettings from "./UserSettings";

function User({user, setUsers}) {

    const [role, setRole] = useState(user.roles);
    const [isInSettings, setIsInSettings] = useState(false);
    const nextUserLevel = userLevels.find(xrole => xrole.prev === role);

    useEffect(() => {
        setRole(user.roles)
    }, [user])

    async function updateUser() {
        console.log(nextUserLevel);
        const newUserData = {
            ...user,
            roles: nextUserLevel.value
        }

        const token = getCookie("token");

        try {
            const req = await fetch(`${root}/user/update`, {
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
            console.log(res)
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
            return res
        } catch (error) {
            customAlert("ارتقاع ناموفق بود!")
            console.error(error)
        }
    }

    return ( 
        <div className={`flex items-center justify-end gap-6 p-3 px-5 rounded-full ${role === userLevels[3].value ? "hover:bg-black text-white bg-gray-700" : role === userLevels[2].value ? "bg-gray-100 hover:bg-gray-200 border-black border" : " bg-gray-100 hover:bg-gray-200" } cursor-pointer`}>
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
                            {userLevels.find(xrole => xrole.value === role).persianName}
                        </span>
                        {/* <Avatar /> */}
                    </div>
                    <div className="flex items-center gap-2">
                        <span>
                            {user.username}
                        </span>
                        <div className="hidden md:block">
                            {
                                role === userLevels[3].value
                                ? <FaUserSecret fontSize="2rem" />
                                : <Avatar />
                            }
                        </div>
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