import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { VscAccount } from "react-icons/vsc";
import { FaGooglePay } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";

export default function HomeTimeline() {
    let now = new Date();
    const [minute, setMinute] = React.useState(now.getMinutes());
    const [hour, sethour] = React.useState(now.getHours());

    React.useEffect(() => {
        const interval = setInterval(() => {
            now = new Date();
            setMinute(now.getMinutes());
            sethour(now.getHours());
        })
    })


  return (
    <div className='bg-white pt-12 pb-12 flex flex-col items-center gap-5'>
        <div className='text-4xl'>
            فقط 4 دقیقه تا ثبت شفارش شما مانده
        </div>
        <Timeline position="alternate">
        <TimelineItem sx={{
                    cursor: "pointer",
                    "&:hover" : {color: "#e31e78"}
                }}>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            {hour}:{minute}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            <div className='border rounded-full'>
                <VscAccount fontSize="2rem" />
                </div>
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                ورود به حساب کاربری
            </Typography>
            <Typography>
                اگر حساب کاربری دارید وارد شوید و اگر ندارید در کمتر از یک دقیقه وارد حساب جدید خود شوید
            </Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem 
            sx={{
                    cursor: "pointer",
                    "&:hover" : {color: "#e31e78"}
                }}>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            {minute ===  59 ? hour + 1 : hour}:{minute === 59 ? "00" : minute + 1}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                ثبت سفارش
            </Typography>
            <Typography>شما پابلیشرهای مورد علاقه ی خود را همراه با تعرفه ها انتخاب میکنید</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            sx={{
                cursor: "pointer",
                "&:hover" : {color: "#e31e78"}
            }}>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                >
                {minute ===  58 ? hour + 1 : hour}:{minute === 58 ? "00" : minute === 59 ? "01" : minute + 2}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <div className='border rounded-full'>
                <FaGooglePay fontSize="2rem" />
            </div>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                پرداخت
            </Typography>
            <Typography>با پرداخت کمترین هزینه سفارش شما ثبت میشود</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            sx={{
                cursor: "pointer",
                "&:hover" : {color: "#e31e78"}
            }}>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                >
                {minute ===  57 ? hour + 1 : hour}:{minute === 57 ? "00" : minute === 58 ? "01" : minute === 59 ? "02" : minute + 3}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
                <MdDoneOutline fontSize="2rem" />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                تمام
            </Typography>
            <Typography>سفارش شما ثبت شده و اکنون همه چیز را به ما بسپارید</Typography>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
    </div>
  );
}
