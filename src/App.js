import './App.css';
import Search from './components/search/search';

function App() {

  function handleOnSearchChange(searchData){
    console.log(searchData);
  }


  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
