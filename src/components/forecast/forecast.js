import React from "react";
import CurrentWeather from "../current_weather/current-weather";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data, currentData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  return (
    <div className="future-weather">
        <h1 className='daily font-weight-600'>Future Data</h1>
        <div className='card-section'>
        <div className="future">
                <div className="main-future">
                    <div className="day font-weight-600">{forecastDays[6]} (Today)</div>
                    <img src={process.env.PUBLIC_URL + `/icons/${currentData.weather[0].icon}.png`} alt="vv"  className="img-future"/>
                    <div className="text">
                        <p className='desc'>{currentData.weather[0].description}</p>
                        <p className="min-max-temp"><span className="max-temp font-weight-600">{Math.round(currentData.main.temp_max)}°C</span> <span className="min-temp">{Math.floor(currentData.main.feels_like)}°C</span></p>
                    </div>
                </div>
                <div className="future-details">
                    <div className="future-container">
                        <div className="future-row">
                            <span className="future-label">Wind:</span>
                            <span className="future-value font-weight-600">{currentData.wind.speed} m/s</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Humidity:</span>
                            <span className="future-value font-weight-600">{currentData.main.humidity}</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Pressure:</span>
                            <span className="future-value font-weight-600">{currentData.main.pressure}</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Sea Level:</span>
                            <span className="future-value font-weight-600">{currentData.main.sea_level}m</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Clouds:</span>
                            <span className="future-value font-weight-600">{currentData.clouds.all}%</span>
                        </div>
                    </div>
                </div>
            </div>
        {data.list.splice(0, 7).map((item, idx) => (
            <div className="future" key={idx}>
                <div className="main-future">
                    <div className="day font-weight-600">{forecastDays[idx]}</div>
                    <img src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`} alt="vv" className="img-future"/>
                    <div className="text">
                        <p className='desc'>{item.weather[0].description}</p>
                        <p className="min-max-temp"><span className="max-temp font-weight-600">{Math.round(item.main.temp_max)}°C</span> <span className="min-temp">{Math.floor(item.main.feels_like)}°C</span></p>
                    </div>
                </div>
                <div className="future-details">
                    <div className="future-container">
                        <div className="future-row">
                            <span className="future-label">Wind:</span>
                            <span className="future-value font-weight-600">{item.wind.speed} m/s</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Humidity:</span>
                            <span className="future-value font-weight-600">{item.main.humidity}</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Pressure:</span>
                            <span className="future-value font-weight-600">{item.main.pressure}</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Sea Level:</span>
                            <span className="future-value font-weight-600">{item.main.sea_level}m</span>
                        </div>
                        <div className="future-row">
                            <span className="future-label">Clouds:</span>
                            <span className="future-value font-weight-600">{item.clouds.all}%</span>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    </div>
);}
  
  export default Forecast;


  