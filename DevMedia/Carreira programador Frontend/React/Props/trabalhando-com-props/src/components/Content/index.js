import React from "react";
import './style.css';

const Content = (props) => {

    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <img src={props.caminho} alt={'Foto do signo de ' + props.title} />
            <p className="data">{props.data}</p>
        </div>
    )
}

export default Content;