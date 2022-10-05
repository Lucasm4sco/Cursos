import React,{ useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import imagemCachorro from './assets/cachorro.jpg';
import imagemGato from './assets/gatos.jpg'
import curiosidades from './curiosidadesPets';
import './App.css';
import Content from './components/Content';


const App = () => {

  const cachorro = curiosidades.filter( animal => animal.pet === 'cachorro' )[0];
  const gato = curiosidades.filter( animal => animal.pet === 'gato' )[0];

  const [imagem, setImagem] = useState(imagemCachorro);
  const [pet, setPet] = useState(cachorro);

  const mudarAnimal = () => {

    if(imagem === imagemCachorro){
      setImagem(imagemGato);
      setPet(gato);
      return
    }
    
    setImagem(imagemCachorro);
    setPet(cachorro);
  }

  return (
    <div className="App">
      <Header event={mudarAnimal}/>
      <Banner imagem={imagem} />
      <Content pet={pet} />
    </div>
  );
}

export default App;
