import React, {useState} from 'react';

var initialState = {
    drinksData: ""
}


function LoadDrinks2(props) {
    const [state, setState] = useState(initialState);
    function pageReload(e){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.value}`)
        .then(res=>res.json())
        .then(data=>{
            setState({drinksData:data.drinks})
        })    
    }
    
    console.log(state.drinksData);
    var drinkData = "";
    var ingredients = ["Gin", "Vodka", "Rum", "Whiskey", "Tequila", "Brandy"];

    return (
        <>
            <select onChange={pageReload}>
                {ingredients.map((ingredient, i)=>{return (<option key={i}>{ingredient}</option>)})}
            </select>
            {drinkData}
        </>
    )
} 

export default LoadDrinks2;