import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current_weather/current-weather';

function App() {

  function handleOnSearchChange(searchData){
    console.log(searchData);
  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
