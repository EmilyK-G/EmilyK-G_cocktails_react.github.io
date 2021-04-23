import { render } from '@testing-library/react';
import React, { useEffect , useState} from 'react';



function DrinksPage(props){
    const [drinkCard, setDrinkCard] = useState([]);

    var id = props.id;
    
    //Getting each drink's details
    const handleDrinksClick = (e) => { 
        props.toggleDrinkFront();
    }
    useEffect( () =>{
        var drinksPromises = 
            id.map( obj =>  
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${obj.idDrink}`)
                .then(res => res.json())
            );
               
        Promise.all(drinksPromises).then(data => {setDrinkCard(data)})
        
    },[id])
    
    
    var cocktails = 
    drinkCard.map((drink, i) => {
        var myDrink = drink.drinks[0];
        if (props.drinkFront.drinkFace === 'back'){
        
            return (
                <div key={i} data-id={id} onClick={handleDrinksClick}>
                <h4 data-id={id}>{myDrink.strDrink}</h4>
                <ul data-id={id}>{myDrink.strIngredient1} ({myDrink.strMeasure1})</ul>
                </div>
            )
        } if (props.drinkFront.drinkFace === 'front'){
            return(
                <div key={i} data-id={id} onClick={handleDrinksClick}>
                    <h3 data-id={id}>{myDrink.strDrink}</h3>
                    <img data-id={id} src={myDrink.strDrinkThumb} alt ={myDrink.strDrink}/>
                </div>
            )} 
        
    });
    
    return <>{cocktails}</>
        
}
export default DrinksPage