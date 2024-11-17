import { IconButton, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall, IoCamera } from "react-icons/io5";
import SeeShots from "./SeeShots";

function ReportRow({name, plink, simp, sview, pimp, plikes, pageId, img, id}) {
    const {error, loading, data} = useFetch(`/api/Pages/GetPageByPageId?pageID=${id}`, {});
    const [isOpenshots, setIsOpenShots] = useState();

    function openshots() {
        setIsOpenShots(true)
    }

    return (
        <TableRow
            key={name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>
                <div className="w-full h-full flex items-center">
                    <IconButton onClick={openshots}>
                        <IoCamera className="text-3xl" />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell align="right" sx={{display: "flex", alignItems: "center", gap: "1rem"}}>
            <a href={plink} target="_blank">
                <AiFillInstagram className="text-2xl text-primary" />
            </a>
            {
                (!error && !loading) ?
                <>
                    <a href={data ? `https://t.me/${data.telegramID.slice(1)}` : "/"} target="_blank">
                        <FaTelegramPlane className="text-2xl text-telegram" />
                    </a> 
                    <a href={data ? `https://wa.me/${data.whatsappNumber}` : ""} target="_blank">
                        <IoLogoWhatsapp className="text-2xl text-green-500" />
                    </a>
                    <a href={data ? `tel:${data.whatsappNumber}` : ""} target="_blank">
                        <IoCall />
                    </a>
                </>
                : ""
            }
            </TableCell>
            <TableCell align="right">{simp}</TableCell>
            <TableCell align="right">{sview}</TableCell>
            <TableCell align="right">{pimp}</TableCell>
            <TableCell align="right">{plikes}</TableCell>
            <TableCell align='right' component="th" scope="row">
            {name}
            </TableCell>
            <TableCell align='right' component="th" scope="row">
            @{pageId}
            </TableCell>
            <TableCell component="th" scope="row" sx={{width: "60px"}} >
                <img src={img || '/logo.png'} className='w-12 rounded-full aspect-square object-cover object-center' />
            </TableCell>
            {
                isOpenshots ? <SeeShots pId={id} campId={1} closeshots={() => setIsOpenShots(false)} /> : ""
            }
        </TableRow>
     );
}

export default ReportRow;