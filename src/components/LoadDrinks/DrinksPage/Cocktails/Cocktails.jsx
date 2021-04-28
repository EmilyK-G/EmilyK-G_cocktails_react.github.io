import React, {useState} from 'react';
import './Cocktails.css';

function IngredientsList(props) {

    let listItems = [];
    for(let i=1; i<=15; i+=1){
        const ingredient = props.myDrink[`strIngredient` + i];
        const measure = props.myDrink[`strMeasure` + i];
        if (typeof ingredient === 'string' && typeof measure === 'string'){
            listItems.push( <li className="card-list-decoration" key={ingredient}>{ingredient} ({measure})</li>)
        } else if (typeof ingredient === 'string' && typeof measure !== 'string'){
            listItems.push( <li className="card-list-decoration" key={ingredient}>{ingredient}</li>)
        }
    }
   
    return (<ul>{listItems}</ul>)
};

const Cocktails = (props) => {
    const [drinkFront, setDrinkFront] = useState(true);
    
    if (drinkFront === false){
    
        return (
            <div data-id={props.thisId} onClick={()=>{setDrinkFront(!drinkFront)}}>
                <h4 className="drink-name">{props.myDrink.strDrink}</h4>
                <h5>Ingredients</h5>
                <IngredientsList myDrink={props.myDrink}/>
                <h5>Instructions:</h5>
                <p>{props.myDrink.strInstructions}</p>
                
            </div>
        )
    } else if (drinkFront === true){
        return(
            <div className="front-container" data-id={props.thisId} onClick={()=>{setDrinkFront(!drinkFront)}}>
                <h3 className="drink-name">{props.myDrink.strDrink}</h3>
                <img className="drink-img" data-id={props.thisId} src={props.myDrink.strDrinkThumb} alt ={props.myDrink.strDrink}/>
            </div>
        )} else {
            return (<h1>Oops!</h1>)
        }
    }

    export default Cocktails