import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, BarElement, LinearScale, Tooltip, Title, Legend);

function BarGraph({ data, place }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Top 10 professions of ${place}`,
        color: "teal",
        font: {
          family: "poppins",
          size: 18, // Reduced for better fit
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      legend: {
        display: true,
        position: "top",
        color: "teal",
        font: {
          family: "poppins",
          size: 14, // Reduced font size
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "poppins",
            size: 8, // Reduced for small screens
          },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          callback: (index) => {
            const label = data.labels[index];
            let words = label.split(" ");
            let lines = [];
            words.forEach((word) => {
              lines.push(word);
            });

            return lines;
          },
          padding: 5,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: Math.max(...data.datasets[0].data),
        ticks: {
          font: {
            family: "poppins",
            size: 10, // Smaller font for y-axis
          },
          callback: (value) => {
            if (place === "India") return `${value} LPA`;
            else return `$ ${value}`;
          },
        },
        grid: {
          color: "rgba(11, 11, 12, 0.2)",
        },
        title: {
          display: true,
          text: "Avg Package",
          font: {
            family: "poppins",
            size: 14, // Reduced size for the axis title
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl h-[60vh] sm:h-[500px] bg-white p-4 sm:p-8 rounded-xl shadow-lg hover:scale-105 duration-300 hover:shadow-2xl">
      <Bar options={options} data={data} className="w-full h-full" />
    </div>
  );
}

export default BarGraph;
