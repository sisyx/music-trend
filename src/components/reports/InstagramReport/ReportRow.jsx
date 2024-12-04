import { TableCell, TableRow } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { MdOutlineInsights } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { TbProgressCheck } from "react-icons/tb";

function ReportRow({name, plink, simp, sview, pimp, plikes, pageId, img, id}) {
    const {error, loading, data} = useFetch(`/api/Pages/GetPageByPageId?pageID=${id}`, {});

    return (
        <>
        <TableRow
            key={name}
            className={`group`}
            sx={{
                transition: "box-shadow 100ms",
                position: "relative",
                borderRadius: "0.5rem",
                backgroundColor: "transparent",
                // border: "2px transparent solid",
                // '&:last-child td, &:last-child th': { border: 0 },
                ":hover": {
                    backgroundColor: "#eee",
                    // border: "2px #2da5dc solid",
                    borderRadius: "1rem",
                    boxShadow: "1rem 1rem 1rem #333c"
                },
            }}
        >
            <TableCell align="right" sx={{borderRadius: "1rem 0 0 1rem", backgroundColor: "#fff"}}>
                <div className="flex items-left flex-col gap-2">
                    <a href={plink} target="_blank" className="block underline text-telegram hover:text-[#20f]">
                        {plink}
                    </a>
                    {
                        (!error && !loading) ?
                        <>
                            <a href={data ? `https://t.me/${data.telegramID.slice(1)}` : "/"} target="_blank" className="block underline text-telegram hover:text-[#20f]">
                                {data ? `https://t.me/${data.telegramID.slice(1)}` : "/"}
                            </a> 
                            <a href={data ? `https://wa.me/${data.whatsappNumber}` : ""} target="_blank" className="block underline text-telegram hover:text-[#20f]">
                                {data ? `https://wa.me/${data.whatsappNumber}` : ""}
                            </a>
                            <a href={data ? `tel:${data.whatsappNumber}` : ""} target="_blank" className="block underline text-telegram hover:text-[#20f]">
                                {data ? `tel:${data.whatsappNumber}` : ""}
                            </a>
                        </>
                        : ""
                    }
            </div>
            </TableCell>
            <TableCell align="right" sx={{backgroundColor: "#fff"}}>
                <span className="flex flex-col items-end">
                    <div className="flex flex-col gap-2 items-center">
                        <MdOutlineInsights color="#5e298e" />
                        {simp}
                    </div>
                </span>
            </TableCell>
            <TableCell align="right" sx={{backgroundColor: "#fff"}}>
                <span className="flex flex-col items-end">
                    <div className="flex flex-col gap-2 items-center">
                        <TbProgressCheck color="#f12911" />
                    {sview}
                    </div>
                </span>
            </TableCell>
            <TableCell align="right" sx={{backgroundColor: "#fff"}}>
                <span className="flex flex-col items-end">
                    <div className="flex flex-col gap-2 items-center">
                        <MdOutlineInsights color="#5e298e" />
                        {pimp}
                    </div>
                </span>
            </TableCell>
            <TableCell align="right" sx={{backgroundColor: "#fff"}}>
                <span className="flex flex-col items-end">
                    <div className="flex flex-col gap-2 items-center">
                        <FaHeartbeat color="#f05" />
                        {plikes}
                    </div>
                </span>
            </TableCell>
            <TableCell align='right' sx={{backgroundColor: "#fff"}} component="th" scope="row">
            {name}
            </TableCell>
            <TableCell sx={{backgroundColor: "#fff"}} align='right' component="th" scope="row">
            @{pageId}
            </TableCell>
            <TableCell component="th" scope="row" sx={{width: "60px", backgroundColor: "#fff", borderRadius: "0 1rem 1rem 0"}} >
                <img src={img || '/logo.png'} className='w-12 rounded-full aspect-square object-cover object-center' />
            </TableCell>
        </TableRow>
        <div className="w-full h-8"></div>
        </>
     );
}

export default ReportRow;