import React from 'react';

const Ldfjdsfjd = () => {
    return (
        <div>
            <h1 className='font-weight-600'>Daily</h1>
            <div className='card-section'>
            {data.list.splice(0, 7).map((item, idx) => (
                <div className="future" key={idx}>
                    <div className="main-future">
                        <div className="day font-weight-600">{forecastDays[idx]}</div>
                        <img src={`icons/${item.weather[0].icon}.png`} alt="vv" />
                        <div className="text">
                            <p className='desc font-weight-600'>{item.weather[0].description}</p>
                            <p className="min-temp font-weight-600">{Math.floor(item.main.temp_max)}°C - {Math.round(item.main.temp_min)}°C</p>
                        </div>
                    </div>
                    <div className="future-details">
                        <div className="future-container">
                            <div className="future-row">
                                <span className="future-label">Feels Like:</span>
                                <span className="future-value font-weight-600">{item.main.feels_like}°C</span>
                            </div>
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
    );
}

export default Ldfjdsfjd;
