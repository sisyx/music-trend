import { AddAPhoto } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { addPostShot } from "../../../functions";
import { BiUpload } from "react-icons/bi";

function UploadShots({campId, pubId}) {
    const fileinputref = useRef();
    const fileinputref2 = useRef();
    const [file, setfile] = useState(undefined);
    const [file2, setfile2] = useState(undefined);

    function updateFile(xfile, filenumber = 1) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const filecontent = document.querySelector(`.file-show${filenumber === 2 ? "2" : ""}`);
            filecontent.src = event.target.result;
        }

        reader.readAsDataURL(xfile);
        addPostShot(campId, pubId , xfile);
    }

    return ( 
        <div className="flex items-center gap-4 bg-gray-200 p-4">
            <div className="flex flex-col items-center gap-1">
                <BiUpload />
                <span>شات ها</span>
            </div>
        {
            file ? 
                <>
                    <img className="file-show" style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "5px",
                        objectFit: "cover",
                        objectPosition: "center"
                    }} />
                    {
                        file2 ? 
                            <>
                                <img className="file-show2" style={{
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "5px",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }} />
                            </>
                        : 
                            <>
                                <label htmlFor="publisher-post-shot">
                                    <IconButton onClick={() => fileinputref2.current.click()} sx={{
                                        border: "1px #333 solid",
                                        paddingInline: "10px",
                                        borderRadius: "5px",
                                    }}>
                                        <AddAPhoto sx={{
                                            fontSize: "1rem",
                                            color: "#333"
                                        }} />
                                    </IconButton>
                                </label>
                                <input type="file" name="publisher-post-shot" accept="image/*" style={{display: "none"}} ref={fileinputref2} onChange={e => {
                                    setfile2(e.target.files[0]);
                                    updateFile(e.target.files[0], 2);
                                }} />
                            </>
                        }
                </>
            : 
                <>
                    <label htmlFor="publisher-post-shot">
                        <IconButton onClick={() => fileinputref.current.click()} sx={{
                            border: "1px #333 solid",
                            paddingInline: "10px",
                            borderRadius: "5px",
                        }}>
                            <AddAPhoto sx={{
                                fontSize: "1rem",
                                color: "#333"
                            }} />
                        </IconButton>
                    </label>
                    <input type="file" name="publisher-post-shot" accept="image/*" style={{display: "none"}} ref={fileinputref} onChange={e => {
                        setfile(e.target.files[0]);
                        updateFile(e.target.files[0]);
                    }} />
                </>
            }
        </div>
     );
}

export default UploadShots;