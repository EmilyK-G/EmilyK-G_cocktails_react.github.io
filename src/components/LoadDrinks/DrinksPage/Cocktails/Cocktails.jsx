import React, {useState} from 'react';
import './Cocktails.css';

function IngredientsList(props) {
    
    let listItems = [];
    for(let i=1; i<=15; i+=1){
        const ingredient = props.myDrink[`strIngredient` + i];
        const measure = props.myDrink[`strMeasure` + i];
        if (typeof ingredient === 'string'){
            listItems.push( <li key={ingredient}>{ingredient} ({measure})</li>)
        }
    }
   
    return (<ul>{listItems}</ul>)
};
//{props.myDrink.strIngredient1} ({props.myDrink.strMeasure1})
const Cocktails = (props) => {
    const [drinkFront, setDrinkFront] = useState(true);
    
    if (drinkFront === false){
    
        return (
            <div data-id={props.thisId} onClick={()=>{setDrinkFront(!drinkFront)}}>
                <h4 data-id={props.thisId}>{props.myDrink.strDrink}</h4>
                
                <IngredientsList myDrink={props.myDrink}/>
                
            </div>
        )
    } else if (drinkFront === true){
        return(
            <div data-id={props.thisId} onClick={()=>{setDrinkFront(!drinkFront)}}>
                <h3 data-id={props.thisId}>{props.myDrink.strDrink}</h3>
                <img data-id={props.thisId} src={props.myDrink.strDrinkThumb} alt ={props.myDrink.strDrink}/>
            </div>
        )} else {
            return (<h1>Oops!</h1>)
        }
    }

    export default Cocktails