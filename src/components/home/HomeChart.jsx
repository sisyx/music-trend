import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import styles from './HomeChart.module.css'
import { Bar, Doughnut, Line } from "react-chartjs-2"
import AnimatedBackground2 from '../AnimatedBackground2';


const data = {
    labels: ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"],
    datasets: [{
        label: '# of Votes',
        data: [
            2, 5, 7, 9, 5, 3, 7, 15, 20, 21, 20, 23, 20, 24, 22, 19, 18, 23, 25, 26
        ],
        borderWidth: 1,
        borderCapStyle: "round",
        borderColor: "#e31e78",
        hoverBackgroundColor: "#e31e78",
        backgroundColor: "#fff"
    }]
}

const data2 = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U"],
    datasets: [{
        label: '# of Votes',
        data: [
            2, 5, 7, 9, 5, 3, 7, 15, 20, 21, 20, 23, 20, 24, 22, 19, 18, 23, 25, 26
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

export default function HomeChart() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            تحلیل نقاط ضعف و قوت و ارایه راه حل های کاربردی 
        </h1>
        <div className={styles.charts_container}>
            <div className={styles.no_pie_charts}>

                <div className={styles.chart_box}>
                    <Line
                        className={styles.chart}
                        data={data}
                        options={{...options, animation: {
                            tension: {
                                duration: 1000,
                                easing: 'linear',
                                from: 0.5,
                                to: -0.5,
                                loop: true
                              }
                        }}}
                        />
                </div>
                <div className={styles.chart_box}>
                    <Bar
                        className={styles.chart}
                        data={data}
                        options={options}
                        />
                </div>
            </div>
            <div className={styles.pie_charts}>
                <div className={styles.chart_box}>
                    <Doughnut
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
