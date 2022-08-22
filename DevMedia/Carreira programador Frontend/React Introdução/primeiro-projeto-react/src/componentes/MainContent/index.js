import React from 'react';
import SecaoCapa from '../SecaoCapa/';
import SecaoProdutos from '../SecaoProdutos/';
import SecaoSobre from '../SecaoSobre';
import SecaoContato from '../SecaoContato';
import './style.css'

function Main(){
    return(
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    )
}

export default Main