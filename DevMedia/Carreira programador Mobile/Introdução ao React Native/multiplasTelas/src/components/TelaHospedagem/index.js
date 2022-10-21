import React from "react";
import { View, Text, Image} from 'react-native';

import estilo from "../../estiloComponents";

import pousada1 from '../../../assets/hospedagens/hospedagem01.png';
import pousada2 from '../../../assets/hospedagens/hospedagem02.png';
import pousada3 from '../../../assets/hospedagens/hospedagem03.png';

const TelaHospedagem = ({navigation}) => (
    <View style={{...estilo.container, backgroundColor: '#afd7ef'}}>
        <Text style={estilo.title}>Pousadas e Hotéis em Paraty</Text>
        <Text style={estilo.descricao}>
            Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
        </Text>
        <View style={estilo.card}>
            <Image 
                style={estilo.imgCard}
                source={pousada1}
            />
            <Text style={{...estilo.nameCard, fontSize: 17, lineHeight: 35}}>Pousada Missanga</Text>
            <Text>Valor médio: R$ 350,00</Text>
            <Text>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>
        <View style={estilo.card}>
            <Image 
                style={estilo.imgCard}
                source={pousada2}
            />
            <Text style={{...estilo.nameCard, fontSize: 17, lineHeight: 35}}>Pousada Morro do Forte</Text>
            <Text>Valor médio: R$ 450,00</Text>
            <Text>Localização: Próximo à Praia - Pontal</Text>
        </View>
        <View style={estilo.card}>
            <Image 
                style={estilo.imgCard}
                source={pousada3}
            />
            <Text style={{...estilo.nameCard, fontSize: 17, lineHeight: 35}}>Pousada Porto Imperial</Text>
            <Text>Valor médio: R$ 550,00</Text>
            <Text>Localização: Centro Histórico</Text>
        </View>
    </View>
);

export default TelaHospedagem;