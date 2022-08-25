import React from "react";
import './style.css'

function SecaoContato(){
    return(
        <section className="section-contato" id="Contato">
            <div className="content-contato">
                <h2>FALE CONOSCO</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>

                <div className="info-contatos">
                    <div className="box-contato">
                        <h3>
                            Contato
                        </h3>
                        <div className="container">
                            <img src="/assets/local.png"></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className="container">
                            <img src="/assets/telefone.png"></img>
                            <p>(20) 9999-99</p>
                        </div>
                        <div className="container">
                            <img src="/assets/email.png"></img>
                            <p>contato@oticavida.com</p>
                        </div>

                    </div>
                    <div className="box-contato">
                        <h3>Nossas Redes Sociais</h3>
                        <div className="container">
                            <img src="/assets/fb.png"></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className="container">
                            <img src="/assets/ig.png"></img>
                            <p>@oticavidarj</p>
                        </div>
                        <div className="container">
                            <img src="/assets/tt.png"></img>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecaoContato