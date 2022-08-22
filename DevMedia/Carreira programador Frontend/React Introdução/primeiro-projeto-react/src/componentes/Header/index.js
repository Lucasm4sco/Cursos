import React from 'react';
import './style.css'

function Header(){
    return(
        <header>
            <div className='content'>
                <img className='img-logo' src='/assets/logo.png' alt="logo página"/>

                <nav>
                    <a href="#Produtos">PRODUTOS</a>
                    <a href="#Sobre">SOBRE</a>
                    <a href="#Contato">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}

export default Header