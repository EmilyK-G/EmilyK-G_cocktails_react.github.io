import logo from './logo.svg';
import './App.css';
import Drink from './components/Drink/Drink.jsx';
import LoadDrinks2 from './components/Drink/LoadDrinks/LoadDrinks2';
function App() {
  
  return (
    <div className="App">
      
        <LoadDrinks2 ingredient = "Whiskey" />
      
    </div>
  );
}

export default App;
