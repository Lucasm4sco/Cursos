import React from "react";
import './style.css';

const Footer = () => (
    <footer>
        <address className="footer-content">

            <img src="/assets/logo.png" />

            <div className="box-footer">
                <h3>Endereço</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div className="box-footer">
                <h3>Contato</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 34567890</p>
            </div>
            <div className="box-footer">
                <h3>Horários</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p> 10:00 - 22:00 </p>
            </div>
            
        </address>
        <div>
            <p className="autor">
                Gelateria. Orgulhosamente desenvolvido por Lucas Polles
            </p>
        </div>
    </footer>
)

export default Footer