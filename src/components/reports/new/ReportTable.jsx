import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(pageId, name, plikes, pimp, sview, simp) {
  return { pageId, name, plikes, pimp, sview, simp };
}

const rows = [
  createData('cristiano' ,'Cristiano Ronaldo', 15010, 20532, 1128, 1632),
  createData("leomessi", 'Leo Messi', 7312, 11000, 1265, 1396),
];

export default function DenseTable({ rowsCount }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">لینک تبلیغ</TableCell>
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
                <a href='https://instagram.com/cristiano'>LINK</a>
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
                <img src='/logo.png' className='w-12 rounded-full aspect-square object-cover object-center' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
