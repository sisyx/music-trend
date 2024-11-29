import { useEffect } from "react";

function UserSettings({ user }) {
    return ( 
        <div className="flex flex-col gap-4 items-center bg-white shadow-xl p-4 rounded-xl">
            <img src={user.imageUrl || "/logo.png"} alt="" className="max-w-96" />
            {user.username}
            <div className="bg-gray-100 w-full p-4 rounded-lg flex flex-col items-center">
                <span>کمپین ها</span>
            </div>
        </div>
     );
}

export default UserSettings;