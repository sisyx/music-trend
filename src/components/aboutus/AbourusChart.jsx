import React, { useEffect, useState } from 'react'
import { Radar } from "react-chartjs-2"


  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(227, 30, 120, 0.2)',
        borderColor: 'rgba(227, 30, 120, 1)',
        borderWidth: 1
      },
    ]
  }

  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(227, 30, 120, 0.2)',
        borderColor: 'rgba(227, 30, 120, 1)',
        borderWidth: 1
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: 'rgba(94, 41, 142, 0.2)',
        borderColor: 'rgba(94, 41, 142, 1)',
        borderWidth: 1
      },
    ]
  }
  
  const data3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(227, 30, 120, 0.2)',
        borderColor: 'rgba(227, 30, 120, 1)',
        borderWidth: 1
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: 'rgba(94, 41, 142, 0.2)',
        borderColor: 'rgba(94, 41, 142, 1)',
        borderWidth: 1
      },
      {
        label: 'Dataset 3',
        data: [45, 70, 30, 60, 80, 20, 75],
        backgroundColor: 'rgba(45, 165, 220, 0.2)',
        borderColor: 'rgba(45, 165, 220, 1)',
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

export default function AboutusChart() {
  const [dt, setdt] = useState(data1);

  useEffect(() => {
    setTimeout(() => {
      setdt(data2)
      setTimeout(() => {
        setdt(data3);
      }, 3000)
    }, 3000)
  }, [])

  return (
    <div>
        <Radar
            data={dt}
            options= {options}
            />
    </div>
  )
}
