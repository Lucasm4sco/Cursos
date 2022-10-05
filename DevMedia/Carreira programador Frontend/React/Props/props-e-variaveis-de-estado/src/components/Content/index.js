import React from "react";
import './style.css';

const Content = (props) => (
    <section>
        <div className="content">
            <h1> 6 curiosidades sobre o seu {props.pet.pet} que você deveria saber!</h1>
            <ol>
                {
                    props.pet.curiosidades.map(curiosidade => (
                        <li>{curiosidade}</li>
                    ))
                }
            </ol>
        </div>
    </section>
)

export default Content;