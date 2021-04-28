import React from 'react';
import './Header.css';

function Header(){

    return(
        
        <section className="container">
            <div className="container-fluid header-container">
                <header><h1 className="header-size">Cocktails</h1></header>
            </div>
            <div className="container intro-container p-sm-5 py-2">
                <h2 className="text-light text_shadow h-2"> Living day and night</h2>
                <p className="text-light text_shadow main-p">One cup at a time</p>
            </div>  
        </section>
        
    )
}



export default Header