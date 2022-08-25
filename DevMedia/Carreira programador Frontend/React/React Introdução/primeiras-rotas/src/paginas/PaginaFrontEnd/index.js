import React from "react";
import BotaoVoltar from "../../componentes/BotaoVoltar";
import './style.css'

const PaginaFrontEnd = () => (
    <div className="content">
        <h1>
            React.Js
        </h1>

        <p>
        React é uma biblioteca JavaScript para a criação de interfaces de usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo mercado. No guia abaixo você aprenderá quais são os pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs com ela.
        </p>

        <a href="https://www.devmedia.com.br/react/">
            Guia de React
        </a>

        <BotaoVoltar />
    </div>
);

export default PaginaFrontEnd;