import React from "react";
import './style.css';

const Banner = (props) => (
    <section className="banner">
        <img src={props.imagem} alt="imagem do pet" />
    </section>
)

export default Banner;