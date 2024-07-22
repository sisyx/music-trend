import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import styles from './Chart.module.css'
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2"
import AnimatedBackground2 from '../AnimatedBackground2'


const data = {
    labels: ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"],
    datasets: [{
        label: '# of Votes',
        data: [
            2, 5, 7, 9, 5, 3, 7, 15, 20, 21, 20, 23, 20, 24, 22, 19, 18, 23, 25, 26
        ],
        borderWidth: 4,
        borderCapStyle: "round",
        borderColor: "#5e298e",
        backgroundColor: "#5e298e",
        hoverBackgroundColor: "#e31e78",
        hoverBorderColor: "#e31e78",
    }]
}

const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
        label: 'Dataset 1',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
        },
        {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        },
        {
        label: 'Dataset 3',
        data: [45, 70, 30, 60, 80, 20, 75],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
        }
    ]
}      

const options = {
    scales: {
        y: {
            beginAtZero: true
        },
    },
    responsive: true
}

export default function Chart() {
  return (
    <div className={`${styles.container}`}>
        <h1 className={styles.title}>
        Gelişim oranı
        </h1>
        <div className={styles.charts_container}>
            <div className={styles.no_pie_charts}>
                {/* <div className={styles.chart_box}>
                    <Line
                        className={styles.chart}
                        data={data}
                        options={options}
                        />
                </div> */}
                <div className={styles.chart_box}>
                    <Radar
                        className={styles.chart}
                        data={data2}
                        options= {options}
                        />
                </div>
            </div>
        </div>
        <AnimatedBackground2 />
    </div>
  )
}
