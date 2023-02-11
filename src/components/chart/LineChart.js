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
                label: 'Temperature',
                data: fd,
                // you can set indiviual colors for each bar
                backgroundColor:"rgba(242, 153, 74,0.2)",
                borderColor: "rgba(242, 153, 74,0.7)",
                pointborderColor: "red",
                tension: 0.3,
                pointHoverRadius: 10,
                fill:true,
            }
        ]
    }
    const options = {
        maintainAspectRatio: false,
        interaction:{
            mode:'index',
            intersect:'false',
            axis:'x',
        },

        scales:{
        y:{

            begiAtZero:true,
            grid: {
                drawOnChartArea:false,
                drawBorder:false,
             },
            min: Math.min(...fd)-0.5,
            max: Math.max(...fd)+0.5
        },
        x:{
            grid: {
                drawBorder:false,
                borderDash:[6],
                border:false,
             },

        },

    },
        plugins: {
            tooltip:{
                enabled:true,
            },
            legend:false,
    }}
    return (
        <div>
            <Line data={data} options={options} height={300} />
        </div>
    );
}

export default LineChart;
