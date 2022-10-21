import React from "react";
import { View, Text, Image} from 'react-native';

import estilo from "../../estiloComponents";

import AmarzenMar from '../../../assets/restaurantes/restaurante01.png';
import BenditaRestaurant from '../../../assets/restaurantes/restaurante02.png';
import SereiaDoMar from '../../../assets/restaurantes/restaurante03.png';

const TelaRestaurantes = () => (
    <View style={{...estilo.container, backgroundColor: '#a5e3ce'}}>
        <Text style={estilo.title}>Bares e Restaurantes</Text>
        <Text style={estilo.descricao}>
            O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
        </Text>
        <View style={estilo.card}>
            <Image 
                style={estilo.imgCard}
                source={AmarzenMar}
            />
            <Text style={estilo.nameCard}>Armazén Mar</Text>
            <Text>Localização: Rod Rio-Santos</Text>
        </View>
        <View style={estilo.card}>
            <Image 
                style={estilo.imgCard}
                source={BenditaRestaurant}
            />
            <Text style={estilo.nameCard}>Bendita's Restaurante</Text>
            <Text>Localização: Centro Histórico</Text>
        </View>
        <View style={estilo.card}>
            <Image 
                style={estilo.imgCard}
                source={SereiaDoMar}
            />
            <Text style={estilo.nameCard}>SEREIA DO MAR PIZZA-BAR</Text>
            <Text>Localização: Praia do Jabaquara</Text>
        </View>
    </View>
);

export default TelaRestaurantes;