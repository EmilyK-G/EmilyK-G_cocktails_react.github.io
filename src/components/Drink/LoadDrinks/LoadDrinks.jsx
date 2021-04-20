import React, {useState} from 'react';


function LoadDrinks() {
    const [state, setDrinks] = useState([]);


    //Fetching the cocktails' data from the ingredient clicked
    function pageReload(e){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.value}`)
        .then(res=>res.json())
        .then(data=>{
            setDrinks(data.drinks)
        })   
    }
    
   
    //Fetching the drink's data from the drink's id
    function handleDrinkClick(id){
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            
             var drinkName = data.drinks[0];
             //Getting drink details
              function drinkDetails() { for (let i=1; i<=15; i+=1){
                var ingredient = `strIngredient${i}`;
                var measure = `strMeasure${i}`;
                
                if (typeof ingredient === "string"){
                    
                    return (
                        <li>{drinkName[ingredient]} - {drinkName[measure] || "-" } </li>  
                    )
                }
              }   
            }
            
             return (
                 <>
                     <h3>{drinkName.strDrink}</h3>
                     <ul>{drinkDetails()}</ul>
                 </>
             )
            
        })
        //Get rid of the front and show backside ---> continue here <-------
    }
    


    

    var drinkFront = state.map((obj, i) => {
        var id = obj.idDrink;
        return (
        <div key={i}  data-id={id} onClick={handleDrinkClick.bind(null,id)}>
        <div data-id={id}>{obj.strDrink}</div>
        <img src={obj.strDrinkThumb} data-id={id} alt={obj.strDrink}/>
        </div>
        )
    });
    
   
    var ingredients = ["Gin", "Vodka", "Rum", "Whiskey", "Tequila", "Brandy"];

    return (
        <>
            <select onChange={pageReload}>
                {ingredients.map((ingredient, i)=>{return (<option key={i}>{ingredient}</option>)})}
            </select>
            <div>
                {drinkFront}
            </div>
        </>
    )
} 

export default LoadDrinks;