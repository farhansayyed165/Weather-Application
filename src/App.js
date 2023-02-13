import './App.css';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';
import CurrentWeather from './components/current_weather/current-weather';
import LineChart from './components/chart/LineChart';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setforcastWeather] = useState(null);

  function handleOnSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforcastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }



  // console.log(currentWeather);
  // console.log(forecastWeather);


  return (
    <div>

      <div className="main-container">
        <h2 className='title'>Search for a city</h2>
        <Search onSearchChange={handleOnSearchChange} />
        <div className="current-container">
        {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <div className='chart'>
      {forecastWeather && <LineChart  forecastData={forecastWeather} /> }
        <hr className='solid'></hr>
      </div>}
        </div>
        {forecastWeather && <Forecast data={forecastWeather} currentData={currentWeather} />}
      </div>

    </div>
  );
}

export default App;