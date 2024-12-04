import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { toKFormat } from '../../../utils/numbers';
import ReportRow from './ReportRow';

function createData( id, img, pageId, name, plikes, pimp, sview, simp, plink) {
  return { id ,img, pageId, name, plikes, pimp, sview, simp, plink };
}

export default function DenseTable({ report, setSums}) {
  const rowsCount = report.length;
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const newRows = report.map(page => createData( page.Page.Id, page.Page.ImgUrl, page.PageId || "none", page.Page.ShowName || "None" , page.Page.PostLikes || "-", page.Page.PostImpertion || "-", page.Page.StoryViews || "-", page.Page.StoryImpertion || "-", page.Page.PostLink || "https://instagram.com/" ));
    setRows(newRows);
    
    // set sums
    setSums(cur => cur.map(x => x.key !== "totalPubs" ? ({...x, value: toKFormat(sumOfItems(report, x.dataBaseKey))}) : ({...x, value: report.length}) ));
  }, []);

  return (
    <TableContainer sx={{overflow: "visible"}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">لینک ها</TableCell>
            <TableCell align="right">ایمپرشن استوری</TableCell>
            <TableCell align="right">بازدید استوری</TableCell>
            <TableCell align="right">ایمپرشن پست</TableCell>
            <TableCell align="right">لایک پست</TableCell>
            <TableCell align='right'>نام پیج</TableCell>
            <TableCell align='right'>آیدی</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <span className='w-full h-7'></span>
        <TableBody>
          {rows.slice(0, rowsCount).map((row) => <ReportRow name={row.name} plink={row.plink} simp={row.simp} sview={row.sview} pimp={row.pimp} plikes={row.plikes} pageId={row.pageId} img={row.img} id={row.id} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function sumOfItems(array, itemname) {
  return array.reduce((acc, arrItem) => acc += arrItem.Page[itemname], 0)
}