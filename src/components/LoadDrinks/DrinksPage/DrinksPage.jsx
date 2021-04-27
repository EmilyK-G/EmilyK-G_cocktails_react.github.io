
import React, { useEffect , useState} from 'react';
import Cocktails from './Cocktails/Cocktails.jsx';
import './DrinksPage.css';

function DrinksPage(props){
    const [drinkCard, setDrinkCard] = useState([]);

    var id = props.id;
    //Getting each drink's details
    
    useEffect( () =>{
        var drinksPromises = 
            id.map( obj =>  
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${obj.idDrink}`)
                .then(res => res.json())
                
            );
               
        Promise.all(drinksPromises).then(data => {setDrinkCard(data)})
        
    },[id])
    
//Make a function that returns a <div> with the previous constant inside a map function.
    
    return (
        <div>
            {drinkCard.map((drink, i) =>(
                <Cocktails myDrink = {drink.drinks[0]} thisId = {drink.drinks[0].idDrink} key={`cocktail-${i}`}/>
            ))}

        </div>
        
    );
    
}

export default DrinksPage