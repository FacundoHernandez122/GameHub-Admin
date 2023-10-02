import React from 'react';
import "./BarGraph.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler } from "chart.js";


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title, 
  Tooltip, 
  Legend, 
  Filler,
)

function BarGraph() {

  {/*const name = gamesData.map(game => game.name);
const metacritic = gamesData.map(game => game.metacritic);*/}
   
 const name = ["God of War", "Resident Evil 7", "DOOM", "Halo Wars", "NBA 2K24", "Fallout 4", "Halo Wars", "Grand Theft Auto V"]
 const metacritic =[80, 70, 60, 70, 75, 65, 80, 96]
  
  const data = {
    labels: name,
    datasets : [{
      labels: "Metacritic ",
      data: metacritic,
      tension: 0.5,
      fill: true,
      backgroundColor: ["#14213D", "#e5e5e5"],
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
       min: 20,
       max: 100,
       ticks: {
        stepSize: 2,
        callback: (value) => value + "k"
       },
       grid: {
        borderDash: [10]
       },
       
    },
  },
  
  };

  return (
    <>
    <div className='bar_graphic shadow-lg p-2 mb-3 bg-body-tertiary'>
      <h3 style={{ textAlign: 'center' }} >Ratings</h3>
      <Bar data={data} options={options}></Bar>
    </div>
    </>
  )
}

export default BarGraph
