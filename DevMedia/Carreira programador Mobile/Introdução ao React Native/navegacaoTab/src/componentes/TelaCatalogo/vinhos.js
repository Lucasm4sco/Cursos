import imgVinhoBranco from '../../assets/vinho-branco.jpg';
import imgVinhoRose from '../../assets/vinho-rose.jpg';
import imgVinhoTinto from '../../assets/vinho-tinto.jpg';
import imgVinhoEspecial from '../../assets/vinho-especial.jpg';

const vinhos = [
    {
        vinho: 'Chatigny Chardonnay',
        descricao: 'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
        img: imgVinhoBranco
    },
    {
        vinho: 'Concha y Toro Exportacion',
        descricao: 'Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.',
        img: imgVinhoRose
    },
    {
        vinho: `Portada Winemaker's`,
        descricao: 'Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.',
        img: imgVinhoTinto
    },
    {
        vinho: 'Elvio Cogno Ravera Barolo',
        descricao: 'Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.',
        img: imgVinhoEspecial
    },
];

export default vinhos;