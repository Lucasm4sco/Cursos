import React from "react";
import './style.css';

const Header = (props) => (
    <header>
        <div className="container">
            <h2 className="logo">
                CuriousPet
            </h2>
            <button className="mudar-animal" onClick={props.event}>
                Mudar Animal <img src='./icon-pata.jpg' alt="icone pata"/>
            </button>
        </div>
    </header>
)

export default Header;