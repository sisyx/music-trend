import { Button, IconButton, TextField } from "@mui/material"
import { useState } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { englishAlphabetLC, root } from "../../../constatnts"
import { CiEdit } from "react-icons/ci"
import { customAlert, getCookie } from "../../../functions"


export default function Category({name, reload = () => {return}, deleteThisCat = () => {return}}) {
    const [editName, setEditName] = useState({
        old: name,
        new: undefined,
        isEditing: false,
        hasEdited: false,
    })

    async function updateTypeName(xname) {
        if (!xname) {
            console.error(`name ${xname} is not valid`);
            return
        }
        const token = getCookie("token");
        if (!token) {
            console.error(`token ${token} is not valid`);
            return;
        }
        try {
            const req = await fetch(`${root}/api/PageTypeCategory/UpdatePageTypeCategories?oldCategoryName=${name}&newCategoryName=${editName.new}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (!req.ok) {
                throw new Error(req.statusText);
            }

            const res = await req.json();
            console.log(res);
            customAlert(res.message);
            reload();
        } catch (error) {
            console.error(error);
            reload()
        }
    }

    return (
        <div className="flex gap-4 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full p-3" dir={englishAlphabetLC.includes(name[0]) ? "ltr" : "rtl" }>
            <IconButton onClick={() => {
                deleteThisCat(name)
            }} sx={{color: "#a00", transition: "all 200ms", ":hover": {scale: 1.1}}}>
                <RiDeleteBinLine />
            </IconButton>
            <IconButton onClick={() => setEditName(cur => ({...cur, isEditing: true, old: name}))}>
                <CiEdit />
            </IconButton>
            {
                editName.isEditing
                ?
                <div className="flex items-center">
                    <TextField variant="filled" label="اسم جدید" sx={{width: "120px", padding: "0"}} value={editName.hasEdited ? editName.new : (editName.new || editName.old)} onChange={event => setEditName(cur => ({...cur, new: event.target.value, hasEdited: true}))} />
                    <Button sx={{height: "100%"}} onClick={() => updateTypeName(editName.new)}>ثبت</Button>
                </div>
                : <>{editName.old}</>
            }
        </div>
    )
}