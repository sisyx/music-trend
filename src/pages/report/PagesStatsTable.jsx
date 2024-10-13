import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, cursor: "pointer", transition: "all 75ms", ":hover": {background: "#fcfcfc"} }}>
        <TableCell onClick={() => setOpen(!open)} align="right">
            <a href={row.link} className='hover:text-telegram'>
                <span className='flex items-center justify-end gap-2'>
                اینستاگرام
                <FaExternalLinkAlt />
                </span>
            </a>
        </TableCell>
        <TableCell onClick={() => setOpen(!open)} align="right">{row.followers}</TableCell>
        <TableCell onClick={() => setOpen(!open)} align="right">{row.likes}</TableCell>
        <TableCell onClick={() => setOpen(!open)} component="th" scope="row" align='right'>
          {row.name}
        </TableCell>
        <TableCell onClick={() => setOpen(!open)} align="right">{row.pageId}</TableCell>
        <TableCell align='right'>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" className='flex justify-end'>
                جزییات
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align='right'>کامنت پست</TableCell>
                    <TableCell align='right'>ایمپرشن پست</TableCell>
                    <TableCell align="right">بازدید پست</TableCell>
                    <TableCell align="right">بازدید استوری</TableCell>
                    <TableCell align="right">ایمپرشن استوری</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" align='right'>
                        {historyRow.postComments}
                      </TableCell>
                      <TableCell align='right'>{historyRow.postImp}</TableCell>
                      <TableCell align="right">{historyRow.postViews}</TableCell>
                      <TableCell align="right">{historyRow.storyViews}</TableCell>
                      <TableCell align="right">{historyRow.storyImp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function PagesStatsTable({ data }) {
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const tmpAcc = [];
        if (data.length) {
            for (let i = 0; i < data.length; i++) {
            const currentPage = data[i];
            console.log(currentPage)
            const newData = {
                name: currentPage.page.showName ? currentPage.page.showName : "-",
                calories: currentPage.pageId ? currentPage.pageId : "-",
                pageId: currentPage.pageId ? currentPage.pageId : "-",
                // fat: "0",
                likes: currentPage.page.postLikes,
                // carbs: "0",
                comments: currentPage.page.postComments,
                // protein: "0",
                followers: currentPage?.page?.followesrs ? currentPage.page.followesrs : "-",
                link: currentPage.page.postLink,
                // price: "0",
                history: [
                  {
                    postImp: currentPage.page.postImpertion ? currentPage.page.postImpertion : "-",
                    postComments: currentPage.page.postComments ? currentPage.page.postComments : "-",
                    storyImp: currentPage.page.storyImpertion ? currentPage.page.storyImpertion : "-",
                    storyViews: currentPage.page.storyViews ? currentPage.page.storyViews : "-",
                    postViews: currentPage.page.postViews ? currentPage.page.postViews : "-",
                    // date: '2020-01-05',
                    // customerId: '11091700',
                    // amount: 3,
                  },
                ],
              };
              tmpAcc.push(newData);
            }
            setRows(tmpAcc)
        }
    }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="right">لینک تبلیغ</TableCell>
            <TableCell align="right">تعداد فالور</TableCell>
            <TableCell align="right">لایکهای پست</TableCell>
            <TableCell align='right'>نام پیج</TableCell>
            <TableCell align="right">آیدی پیج</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
