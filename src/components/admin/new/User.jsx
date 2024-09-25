import { Avatar, Button } from "@mui/material";
import GlassyButton from "../../GlassyButton";
import { root } from "../../../constatnts";
import { customAlert, getCookie } from "../../../functions";
import { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import UserSettings from "./UserSettings";

function User({user}) {

    const [role, setRole] = useState(user.roles);
    const [isInSettings, setIsInSettings] = useState(false);

    useEffect(() => {
        setRole(user.roles)
    }, [user])

    async function updateUser() {
        const newUserData = {
            ...user,
            roles: role === "professional" ? "admin" : "professional"
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
            `<div>
                کاربر
                <code>${user.username}</code>
                به 
                ${role === "user" ? "کاربر حرفه ای" : "ادمین سایت"}
                ارتقاع یافت
            </div>`)
            setRole(cur =>
                cur === "user" ? "professional" : "admin"
            )
            return res
        } catch (error) {
            customAlert("ارتقاع ناموفق بود!")
            console.error(error)
        }
    }

    return ( 
        <div className={`flex items-center justify-end gap-6 p-3 px-5 rounded-full ${role === "admin" ? "hover:bg-black text-white bg-gray-700" : " bg-gray-100 hover:bg-gray-200" } cursor-pointer`}>
                {/* left */}
                <div className="flex-1 flex gap-2">
                    {/* <GlassyButton onClick={() => setIsInSettings(true)}>مشاهده کاربر</GlassyButton> */}
                    {
                        role === "user" 
                        ? <GlassyButton onClick={updateUser}>ارتقا به کاربر حرفه ای</GlassyButton>
                        : role === "professional"
                            ? <GlassyButton onClick={updateUser}>ارتقاع به ادمین سایت</GlassyButton>
                        : ""
                    }
                </div>
                {/* right */}
                <div className="flex flex-1 justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span>
                            {role === "admin" ? "ادمین سایت" : role === "professional" ? "کاربر حرفه ای" : "کاربر معمولی"}
                        </span>
                        {/* <Avatar /> */}
                    </div>
                    <div className="flex items-center gap-2">
                        <span>
                            {user.username}
                        </span>
                        {
                            role === "admin"
                            ? <FaUserSecret fontSize="2rem" />
                            : <Avatar />
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