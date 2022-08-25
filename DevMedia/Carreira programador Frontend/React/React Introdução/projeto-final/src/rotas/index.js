import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import PaginaSabores from "../paginas/Sabores";
import PaginaSobre from "../paginas/Sobre";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/Sabores" element={ <PaginaSabores/> } />
            <Route path="/Sobre" element={ <PaginaSobre /> } />
        </Routes>
    </BrowserRouter>
)

export default Rotas