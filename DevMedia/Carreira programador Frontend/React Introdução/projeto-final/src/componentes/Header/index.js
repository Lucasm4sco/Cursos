import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => (
    <header>
        <div className='content'>

            <img className='logo' src='/assets/logo.png' alt='Logo da página' />
           

            <nav className='links'>
                <Link to='/' className='link'> Home </Link>
                <Link to='/Sabores' className='link'> Sabores </Link>
                <Link to='/Sobre' className='link'> Sobre </Link>
            </nav>
        </div>
        
    </header>
)

export default Header