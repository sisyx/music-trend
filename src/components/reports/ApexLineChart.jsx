import React, { useState } from "react";
import Chart from "react-apexcharts";
import { toKFormat } from "../../utils/numbers";

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

const ApexLineChart = ({data, title}) => {
  const [chartData] = useState({
    series: [
      {
        name: title,
        data: data?.map(item => item.x),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      markers: {
        size: 0,
      },
      colors: ["#2da5dc"],
      toolbar: {
        left: "7px",
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {return toKFormat(val)}
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "کامنت ها در طول زمان",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: data?.map(item => {
          const date = new Date(item.y);
          const day = date.getDate();
          const month = date.getMonth();
          const year = date.getFullYear();
          return `${day} ${monthNames[month - 1]}`
        }),
      },
    },
  });

  return (
    <div className="w-full md:!w-1/2">
      <div className="line-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexLineChart;
