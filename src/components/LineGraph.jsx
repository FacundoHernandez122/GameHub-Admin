import React from 'react';
import "./LineGraph.css";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title, 
  Tooltip, 
  Legend, 
  Filler,
)

function LineGraph() {
  const mounth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",]
  const number = [4 , 6, 5, 6, 5, 7, 8]
  const data = {
    labels: mounth,
    datasets : [{
      labels: mounth,
      data: number,
      tension: 0.5,
      fill: true,
      borderColor: "#FCA311",
      backgroundColor: "#fca2115a",
      pointRadius: 5,
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
    }]
  };
  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
         
      }
    },  y: {
       min: 2,
       max: 10,
       ticks: {
        stepSize: 2,
        callback: (value) => value + "k"
       },
       grid: {
        borderDash: [10]
       }
    }
  }
  };

  return (
    <>
    <div className='line_graphic shadow-lg p-2 mb-3 bg-body-tertiary' style={{ textAlign: 'center' }} >
      <h3>Offers</h3>
      <Line data={data} options={options}></Line>
    </div>
    </>
  )
}

export default LineGraph
