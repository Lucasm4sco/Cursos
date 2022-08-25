import logo from './logo.svg';
import './App.css';

function header(){
  return(
    <header className="topo">
      <p className="logo">React JS</p>
    </header>
  )
}

function main(){
  return (
    <main>
      {secao1()}
      {secao2()}
    </main>
  )
}

function secao1(){
  return(
    <section className="section-titulo">
      <h1>React JS</h1>
      <p>Biblioteca JavaScritp para criar SPAs</p>
      <a href='https://reactjs.org/' target="_blank">Site Oficial</a>
    </section>
  )
}

function secao2(){
  return(
    <section className="section-requisitos">
      <h2>Requisitos</h2>
      <p> Veja abaixo os requisitos mínimos para aprender React JS: </p>
      <div className="box-cards">
        {linguagens("HTML", "Aprender a estruturar os elementos da página com HTML")}
        {linguagens("CSS", "Aprender a estilizar os elementos da página com CSS")}
        {linguagens("JavaScript", "Aprender a linguagem utilizada pelo React JS, o JavaScript")}
      </div>
      

    </section>
  )
}

function linguagens(título, paragráfo){
  return(
    <div className="card">  
      <h3> {título} </h3>
      <p> {paragráfo} </p>
    </div>
  )
}

function footer(){
  return(
    <footer>
      <p className="autor">
        Curso de introdução de React JS
      </p>
    </footer>
  )
}

function App(){
  return(
    <div className="container">
      {header()}
      {main()}
      {footer()}
    </div>
  )
}

export default App;
