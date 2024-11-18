import { IconButton, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall, IoCamera } from "react-icons/io5";
import SeeShots from "./SeeShots";
import ReportPage from './ReportPage'
function ReportRow({name, plink, simp, sview, pimp, plikes, pageId, img, id}) {
    const {error, loading, data} = useFetch(`/api/Pages/GetPageByPageId?pageID=${id}`, {});
    const [isOpenshots, setIsOpenShots] = useState();
    const [showCharts, setShowCharts] = useState(false);
    const [chartsLoaded, setChartsLoaded] = useState(false);

    useEffect(() => {

    }, [chartsLoaded])

    function openshots() {
        setIsOpenShots(true)
    }

    function openCharts() {
        setShowCharts(true);
        setChartsLoaded(false);
    }

    function closeCharts() {
        setShowCharts(false);
        setChartsLoaded(false);
    }

    function onChartsLoad() {
        console.log("THEEEEEEEEEESE CHARTS LOOOOOOOOOOOOOADDED")
        setChartsLoaded(() => true);
    }

    return (
        <TableRow
            onMouseOver={openCharts}
            onMouseLeave={closeCharts}
            onClick={() => {
                showCharts ? () => {
                    setShowCharts(false);
                    setChartsLoaded(false);
                } : () => {return}
            }}
            key={name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: "relative" }}
            className={`${!!chartsLoaded ? "cursor-default" : " cursor-wait"}`}
        >
            <TableCell>
                <div className="w-full h-full flex items-center">
                    {/* <IconButton > */}
                        <IoCamera onClick={openshots} className="text-3xl" />
                    {/* </IconButton> */}
                </div>
            </TableCell>
            <TableCell align="right">
                <div className="flex items-center gap-2" dir="rtl">
                    <a href={plink} target="_blank" className="block">
                        <AiFillInstagram className="text-2xl hover:text-black text-primary" />
                    </a>
                    {
                        (!error && !loading) ?
                        <>
                            <a href={data ? `https://t.me/${data.telegramID.slice(1)}` : "/"} target="_blank" className="block">
                                <FaTelegramPlane className="text-2xl hover:text-black text-telegram" />
                            </a> 
                            <a href={data ? `https://wa.me/${data.whatsappNumber}` : ""} target="_blank" className="block">
                                <IoLogoWhatsapp className="text-2xl hover:text-black text-green-500" />
                            </a>
                            <a href={data ? `tel:${data.whatsappNumber}` : ""} target="_blank" className="block">
                                <IoCall className="text-2xl" />
                            </a>
                        </>
                        : ""
                    }
            </div>
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
                isOpenshots ? <SeeShots pId={id} campId={1} closeShots={() => setIsOpenShots(false)} /> : ""
            }
            {
                showCharts ? <ReportPage closeCharts={closeCharts} onChartsLoad={onChartsLoad} className="absolute top-0 -translate-y-full left-0 right-0 shadow-lg bg-white max-z" pageId={pageId} /> : ''
            }
        </TableRow>
     );
}

export default ReportRow;