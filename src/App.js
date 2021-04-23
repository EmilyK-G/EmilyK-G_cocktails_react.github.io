import './App.css';
import LoadDrinks from './components/Drink/LoadDrinks/LoadDrinks.jsx';
import DrinkDetails from './components/Drink/DrinkDetails/DrinkDetails';
function App() {

  return (
    <div className="App">

      <LoadDrinks />
      <DrinkDetails/>

    </div>
  );
}

export default App;
