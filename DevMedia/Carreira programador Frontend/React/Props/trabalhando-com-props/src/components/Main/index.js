import React from "react";
import Content from '../Content'
import listaSignos from "../../Signos/listaSignos";
import './style.css';

const Main = () => (
    <section>
        <div className="container-list">
            { 
                listaSignos.map( signo => (
                    <Content 
                        title={signo.signo}
                        caminho={signo.imagem}
                        data={signo.data}
                    />
                ))
            }
        </div>
    </section>
)

export default Main;