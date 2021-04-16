import logo from './logo.svg';
import './App.css';
import Drink from './components/Drink/Drink.jsx';
import LoadDrinks from './components/Drink/LoadDrinks/LoadDrinks';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Drink drinkId = "13940"/>
        <Drink drinkId = "11007"/>
        <LoadDrinks ingredient = "Whiskey"/>
      </header>
    </div>
  );
}

export default App;
