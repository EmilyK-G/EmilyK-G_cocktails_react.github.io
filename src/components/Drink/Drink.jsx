import React from 'react';

class Drink extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cocktailData: {}
        }
    }
    componentDidMount(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.drinkId}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({ cocktailData:data.drinks[0]})
        });
    }
    render(){
        const cocktailData = this.state.cocktailData; 
        
        return (
            <div>
                <h3>{cocktailData.strDrink}</h3>
                <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
            </div>
        );
    }
}

export default Drink;