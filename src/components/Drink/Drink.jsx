import React from 'react';

class Drink extends React.Component {
    componentDidMount(){
        fetch('www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
        .then(res=>res.json())
        .then(data=>{

        })
    }
    render(){
        return (
            <div>DRINK</div>
        )
    }
}

export default Drink;