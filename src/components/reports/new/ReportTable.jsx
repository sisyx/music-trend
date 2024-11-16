import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toKFormat } from '../../../utils/numbers';

function createData( img, pageId, name, plikes, pimp, sview, simp, plink) {
  return { img, pageId, name, plikes, pimp, sview, simp, plink };
}

export default function DenseTable({ report, setSums}) {
  const rowsCount = report.length;
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    console.log(report);
    console.log(rows)
    const newRows = report.map(page => createData( page.Page.ImgUrl, page.PageId || "none", page.Page.ShowName || "None" , page.Page.PostLikes || "-", page.Page.PostImpertion || "-", page.Page.StoryViews || "-", page.Page.StoryImpertion || "-", page.Page.PostLink || "https://instagram.com/" ));
    setRows(newRows);
    
    // set sums
    setSums(cur => cur.map(x => x.key !== "totalPubs" ? ({...x, value: toKFormat(sumOfItems(report, x.dataBaseKey))}) : ({...x, value: report.length}) ));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">ایمپرشن استوری</TableCell>
            <TableCell align="right">بازدید استوری</TableCell>
            <TableCell align="right">ایمپرشن پست</TableCell>
            <TableCell align="right">لایک پست</TableCell>
            <TableCell align='right'>نام پیج</TableCell>
            <TableCell align='right'>آیدی</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, rowsCount).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                <a href={row.plink}>مشاهده تبلیغ</a>
              </TableCell>
              <TableCell align="right">{row.simp}</TableCell>
              <TableCell align="right">{row.sview}</TableCell>
              <TableCell align="right">{row.pimp}</TableCell>
              <TableCell align="right">{row.plikes}</TableCell>
              <TableCell align='right' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='right' component="th" scope="row">
                @{row.pageId}
              </TableCell>
              <TableCell component="th" scope="row" sx={{width: "60px"}} >
                <img src={row.img || '/logo.png'} className='w-12 rounded-full aspect-square object-cover object-center' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function sumOfItems(array, itemname) {
  return array.reduce((acc, arrItem) => acc += arrItem.Page[itemname], 0)
}