import React from "react";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data, currentData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  return (
    <div>
        <h1 className='daily font-weight-600'>Future Data</h1>
        <div className='card-section'>
        <div className="future">
                <div className="main-future">
                    <div className="day font-weight-600">{forecastDays[6]} (Today)</div>
                    <img src={`icons/${currentData.weather[0].icon}.png`} alt="vv" />
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
                    <img src={`icons/${item.weather[0].icon}.png`} alt="vv" />
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


  //   return (
  //     <>
  //       <label className="title">Daily</label>
  //       <Accordion allowZeroExpanded>
  //         {data.list.splice(0, 7).map((item, idx) => (
  //           <AccordionItem key={idx}>
  //             <AccordionItemHeading>
  //               <AccordionItemButton>
  //                 <div className="daily-item">
  //                   <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
  //                   <label className="day">{forecastDays[idx]}</label>
  //                   <label className="description">{item.weather[0].description}</label>
  //                   <label className="min-max">{Math.floor(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
  //                 </div>
  //               </AccordionItemButton>
  //             </AccordionItemHeading>
  //             <AccordionItemPanel>
  //               <div className="daily-details-grid">
  //                 <div className="daily-details-grid-item">
  //                   <label>Pressure:</label>
  //                   <label>{item.main.pressure}</label>
  //                 </div>
  //                 <div className="daily-details-grid-item">
  //                   <label>Humidity:</label>
  //                   <label>{item.main.humidity}</label>
  //                 </div>
  //                 <div className="daily-details-grid-item">
  //                   <label>Clouds:</label>
  //                   <label>{item.clouds.all}%</label>
  //                 </div>
  //                 <div className="daily-details-grid-item">
  //                   <label>Wind speed:</label>
  //                   <label>{item.wind.speed} m/s</label>
  //                 </div>
  //                 <div className="daily-details-grid-item">
  //                   <label>Sea level:</label>
  //                   <label>{item.main.sea_level}m</label>
  //                 </div>
  //                 <div className="daily-details-grid-item">
  //                   <label>Feels like:</label>
  //                   <label>{item.main.feels_like}°C</label>
  //                 </div>
  //               </div>
  //             </AccordionItemPanel>
  //           </AccordionItem>
  //         ))}
  //       </Accordion>
  //     </>
  //   );
  // }