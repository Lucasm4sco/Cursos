import React from "react";
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import './style.css';

const PaginaSabores = () => (
    <div>
        <Header />
        <main>
            <section className="banner banner-sabores">
                <div className="content-banner">
                    <h1>Nossos sabores</h1>
                </div>
            </section>

            <section className="section-sabores">
                <h2 className="subtitulo-sabores">sabores de sorvete</h2>
                <div className="cards-sabores">

                    <div className="card-sabor">

                        <img src="/assets/sabor-oreo.png" alt="foto sorvete sabor oreo" />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo, Uma explosão de sabor</p>
                    </div>
                    <div className="card-sabor">

                        <img src="/assets/sabor-pistache.png" alt="foto sorvete sabor pistache" />
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                    </div>
                    <div className="card-sabor">

                        <img src="/assets/sabor-cookies-avela.png" alt="foto sorvete sabor cookies e avelã" />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="card-sabor">

                        <img src="/assets/sorbet-kiwi.png" alt="foto sorvete sabor kiwi" />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="card-sabor">

                        <img src="/assets/sorbet-morango.png" alt="foto sorvete sabor morango" />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="card-sabor">

                        <img src="/assets/sorbet-limao.png" alt="foto sorvete sabor limão" />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
    
)

export default PaginaSabores