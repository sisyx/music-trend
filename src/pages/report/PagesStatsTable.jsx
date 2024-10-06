import * as React from 'react';
import PropTypes from 'prop-types';
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

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.pageId}</TableCell>
        <TableCell align="right">{row.followers}</TableCell>
        <TableCell align="right">{row.likes}</TableCell>
        <TableCell align="right">
            <a href={row.link} className='hover:text-telegram'>
                <span className='flex items-center justify-end gap-2'>
                اینستاگرام
                <FaExternalLinkAlt />
                </span>
            </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" className='flex justify-center'>
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
                      <TableCell align="right">{historyRow.amount}</TableCell>
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

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function PagesStatsTable({ data }) {
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        console.log(data);
        if (data.length) {
            console.log("Before Setting Rows");
            console.log(data);
            const page1 = data[0]
            console.log(page1)
            const newData = {
                name: page1.page.pageId,
                calories: page1.page.pageId,
                pageId: page1.page.pageId,
                fat: "0",
                likes: page1.postLikes,
                carbs: "0",
                comments: page1.postComments,
                protein: "0",
                followers: page1?.page?.followers ? page1.page.followers : "-",
                link: page1.postLink,
                price: "0",
                history: [
                  {
                    postImp: page1.postImpertion,
                    postComments: page1.postComments,
                    storyImp: page1.storyImpertion,
                    storyViews: page1.storyViews,
                    postViews: page1.postViews,
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                  },
                ],
              };
            setRows([newData])
        }
    }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>نام پیج</TableCell>
            <TableCell align="right">آیدی پیج</TableCell>
            <TableCell align="right">تعداد فالور</TableCell>
            <TableCell align="right">لایکهای پست</TableCell>
            <TableCell align="right">لینک تبلیغ</TableCell>
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
