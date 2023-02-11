import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const LineChart = ({ forecastData }) => {

    const dayInAWeek = new Date().getDay();
    // console.log(dayInAWeek);
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    const fd = forecastData.list.splice(0, 7).map((item) => item.main.temp);


    console.log(fd)
    

    const data = {
        labels: forecastDays,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Future Temperature',
                data: fd,
                // you can set indiviual colors for each bar
                backgroundColor:"rgba(251, 211, 190,0.5)",
                borderColor: "black",
                pointborderColor: "red",
                tension: 0.3,
                pointHoverRadius: 10,
                customCanvasBackgroundColor:"red",
                fill:true,
            }
        ]
    }
    const options = {
        plugins: {
            scales:{
            y:{
                begiAtZero:false,
                grid: {
                    display: false
                 },
                min: Math.min(...fd)-0.5,
                max: Math.max(...fd)+0.5
            },
            x:{
                grid: {
                    display: false
                 }
            }
            
        }
    }}
    return (
        <div>
            <Line data={data} options={options} height={100}/>
        </div>
    );
}

export default LineChart;
