import React from 'react';

class LoadDrinks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drinks:[],
            img:[]
        }
    }
    componentDidMount(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.ingredient}`)
        .then(res=>res.json())
        .then(data=>{
            
            data.drinks.map((index) => {
                console.log(index)
                this.setState((prevState)=>({
                     drinks: [...prevState.drinks, index.strDrink],
                     img: [...prevState.img, index.strDrinkThumb]
                }))
                return this.state
                
            }) 
            
        })
    
       
        
    }
    
    render(){
       
        var drinks = this.state.drinks.map((item, i)=>{return <h3 key={i}>{item}</h3>}); 
        var img = this.state.img.map((item, i)=>{return <img key={i} src={item} alt={drinks} />});
        console.log(img);
        return (
            <div>
               {drinks} 
               {img}
               
            </div>
        );
    }
}

export default LoadDrinks;