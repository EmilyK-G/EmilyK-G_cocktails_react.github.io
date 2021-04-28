
import React, { useEffect , useState} from 'react';
import Cocktails from './Cocktails/Cocktails.jsx';
import './DrinksPage.css';

function DrinksPage(props){
    const [drinkCard, setDrinkCard] = useState([]);

    var id = props.id;
  
    useEffect( () =>{
        var drinksPromises = 
            id.map( obj =>  
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${obj.idDrink}`)
                .then(res => res.json())
                
            );
               
        Promise.all(drinksPromises).then(data => {setDrinkCard(data)})
        
    },[id])
    

    return (
        <div className="container drinks-container">
            {drinkCard.map((drink, i) =>(
                <div  className="container drink-container my-4 py-4 p-sm-4" key={`cocktail-${i}`}>
                    <Cocktails myDrink = {drink.drinks[0]} thisId = {drink.drinks[0].idDrink} />
                </div>
            ))}

        </div>
        
    );
    
}

export default DrinksPage