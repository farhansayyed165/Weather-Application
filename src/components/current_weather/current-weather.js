import React from 'react';
import './current-weather.css'

const CurrentWeather = ({data}) => {
  console.log(data.weather[0].icon)
    return (
        <div className='weather'>
            <p className="city font-weight-600">{data.city}</p>
        <div className="current-weather">
        <img src={process.env.PUBLIC_URL + `/icons/${data.weather[0].icon}.png`} alt="weather icon" className='weather-icon' />
          <div className="desc-box">
            <p className="temp">21°C</p>
            <p className="desc font-weight-300">{data.weather[0].description}</p>
          </div>
          <div className="details">
            <div className="d">
              <div className="parameter-row">
                <span className="parameter-label font-weight-300">Feels Like</span>
                <span className="parameter-value font-weight-600">{data.main.feels_like}°C</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label font-weight-300">Wind</span>
                <span className="parameter-value font-weight-600">{data.wind.speed} m/s</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label font-weight-300">Humidity</span>
                <span className="parameter-value font-weight-600">{data.main.humidity}%</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label font-weight-300">Pressure</span>
                <span className="parameter-value font-weight-600">{data.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
    }

export default CurrentWeather;
