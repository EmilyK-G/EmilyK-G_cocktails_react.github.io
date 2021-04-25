
import React, {useState} from 'react';
import DrinksPage from './DrinksPage';



function LoadDrinks() {

    
    const [initialFetch, setInitialFetch] = useState([]);
    
    //Fetching the cocktails' data from the ingredient clicked
    function pageReload(e){
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.value}`)
        .then(res=>res.json())
        .then(data=>{
            setInitialFetch(data.drinks)
        })
    }
    
    
    
    var ingredients = ["Gin", "Vodka", "Rum", "Whiskey", "Tequila", "Brandy"];
    
    return (
        <>
            <select onChange={pageReload}>
                {ingredients.map((ingredient, i)=>{return (<option key={i}>{ingredient}</option>)})}
            </select>
            <DrinksPage 
               id = {initialFetch}/>
        </>
    )
} 

export default LoadDrinks;