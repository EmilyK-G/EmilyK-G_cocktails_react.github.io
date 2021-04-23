
import React, {useState} from 'react';
import { render } from 'react-dom';
import DrinksPage from './DrinksPage';


function LoadDrinks() {

    const [drinkFront, setDrinkFront] = useState({drinkFace: 'front'});
    const [initialFetch, setInitialFetch] = useState([]);
    const clickHandler = ()=>{
        if (drinkFront.drinkFace === 'front') {
        setDrinkFront({drinkFace: 'back'})
        } 
        if (drinkFront.drinkFace === 'back') {
            setDrinkFront({drinkFace: 'front'})
            } 
    }
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
               drinkFront={drinkFront}
               toggleDrinkFront={clickHandler}
               id = {initialFetch}/>
        </>
    )
} 

export default LoadDrinks;