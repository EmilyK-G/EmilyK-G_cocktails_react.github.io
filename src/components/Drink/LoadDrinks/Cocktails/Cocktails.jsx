import React, {useState} from 'react';

const Cocktails = (props) => {
    const [drinkFront, setDrinkFront] = useState(true);
    
    if (drinkFront === false){
    
        return (
            <div data-id={props.thisId} onClick={()=>{setDrinkFront(!drinkFront)}}>
            <h4 data-id={props.thisId}>{props.myDrink.strDrink}</h4>
            <ul data-id={props.thisId}>{props.myDrink.strIngredient1} ({props.myDrink.strMeasure1})</ul>
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