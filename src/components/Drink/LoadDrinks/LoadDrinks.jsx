import React from 'react';

class LoadDrinks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drinksData:{},
        }
    }
    componentDidMount(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.ingredient}`)
        .then(res=>res.json())
        .then(data=>{
            
            this.setState((prevState)=>({...prevState, drinksData:data.drinks}))
            
        })    
    }
    
    render(){
        var drinksData = this.state;
        console.log(drinksData)
        return (
            <div>
               hi
            </div>
        );
    }
}

export default LoadDrinks;