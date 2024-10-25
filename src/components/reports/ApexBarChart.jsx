import React, { useState } from "react";
import Chart from "react-apexcharts";

const monthNames = [
  "ژانویه",
  "فوربه",
  "مارس",
  "آپریل",
  "می",
  "ژوین",
  "ژولای",
  "آگوست",
  "سپتامبر",
  "اکتبر",
  "نوامبر",
  "دسامبر",
];

const ApexBarChart = ({data, title}) => {
  const [chartData] = useState({
    series: [
      {
        name: title,
        data: data?.map(item => item.x),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: ["#Fd2222"],
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data?.map(item => {
          const date = new Date(item.y);
          const day = date.getDate();
          const month = date.getMonth();
          return `${day} ${monthNames[month - 1]}`
        }),
      },
      title: {
        text: "لایک ها در طول زمان",
        align: "center",
      },
    },
  });

  return (
    <div className="mt-8 w-full border-t border-gray-300 pt-8 md:!mt-0 md:!w-1/2 md:!pt-0">
      <div className="bar-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexBarChart;
