import React from "react";
import './style.css'

function SecaoSobre(){
    return(
        <section id="Sobre">
            <div className="content-sobre">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                </p>

                <div className="box-sobre">

                    <img className="img-box" src="/assets/loja.png" alt="foto da loja" />

                    <div className="content-box">
                        <h3>
                            NOSSAS FILIAIS
                        </h3>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e na América
                        </p>
                    </div>

                    <div className="content-box">
                        <h3>
                            ATENDIMENTO FLEXÍVEL
                        </h3>
                        <p>
                            Nossa equipe possui treinamento para te atender
                        </p>
                    </div>

                    <img className="img-box" src="/assets/atendimento.png" alt="foto de uma pessoa sendo atendida" />
                    
                </div>
            </div>
        </section>
    )
}

export default SecaoSobre;