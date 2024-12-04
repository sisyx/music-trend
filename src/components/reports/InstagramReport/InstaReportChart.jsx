import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import styles from './InstaReportChart.module.css'
import { Bar, Doughnut, Line } from "react-chartjs-2"
import AnimatedBackground2 from '../AnimatedBackground2';


const data = {
    labels: ["روز 1", "روز 2", "روز 3", "روز 4", "روز 5", "روز 6", "روز 7", "روز 8", "روز 9", "1روز 0", "1روز 1", "1روز 2", "1روز 3", "1روز 4", "1روز 5", "1روز 6", "1روز 7", "1روز 8", "1روز 9", "2روز 0"],
    // labels: ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"],
    datasets: [{
        label: '# of Votes',
        data: [
            5, 5, 7, 8, 3, 15, 14, 13, 12, 11, 9, 28, 21, 23, 27, 32, 35, 37, 45, 55,
        ],
        borderWidth: 1,
        borderCapStyle: "round",
        borderColor: "#e31e78",
        hoverBackgroundColor: "#e31e78",
        backgroundColor: "#fff"
    }]
}

const data2 = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    datasets: [{
        label: '# of Votes',
        data: [
            5, 5, 7, 8, 3, 15, 15, 15, 17, 18, 19, 20, 21, 23, 27, 32, 35, 37, 45, 55, 
        ],
        borderWidth: 0,
        borderCapStyle: "round",
        hoverBackgroundColor: "#000",
    }]
} 

const options = {
    scales: {
        y: {
            beginAtZero: true
        },
    },
    responsive: true
}

export default function InstaReportChart() {
  return (
    <div className={styles.container}>
        <div className={styles.charts_container}>
            <div className={styles.no_pie_charts}>
                <div className={styles.chart_box}>
                    <Line
                        className={styles.chart}
                        data={data}
                        options={{...options}}
                        />
                </div>
            </div>
            <h1 className={styles.title}>
                    پیشرفت پیجهای این کمپین در بیست روز اخیر
            </h1>
        </div>
    </div>
  )
}
