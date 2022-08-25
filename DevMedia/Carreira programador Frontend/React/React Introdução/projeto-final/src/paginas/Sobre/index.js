import React from 'react';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import './style.css';

const PaginaSobre = () => (
    <div>
        <Header />
        <main>
            <section className='banner banner-sobre'>
            <div className="content-banner">
                    <h1>A Gelateria</h1>
                </div>
            </section>
            <section className='content-section section-sobre'>
                <h2>Sobre Nós</h2>
                <span> Nós simplesmente amamos sorvete! </span>
                <p className='text-center'>
                
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                </p>

                <p className='text-center'>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </section>

            <section className='section-imagens'>
                <img src='/assets/sobre-image.jpg' alt='foto de pessoas com sorvetes'/>
                <img src='/assets/sorveteria.jpg' alt='foto da sorveteria' />
            </section>
        </main>
        <Footer />
    </div>
)

export default PaginaSobre