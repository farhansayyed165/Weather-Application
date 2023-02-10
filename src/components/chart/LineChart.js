import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js'; 
const LineChart = ({ forecastData }) => {
    const fd = forecastData.list.splice(0, 7).map((item, idx) =>item.main.temp_max)
    console.log(fd)
    return (
        <div>
            <div>{fd}</div>
        </div>
    );
}

export default LineChart;
