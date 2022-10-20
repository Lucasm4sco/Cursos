import React from "react";
import { View, Text, Image} from 'react-native';

import estilo from "./estilo";

import AmarzenMar from '../../../assets/restaurantes/restaurante01.png';
import BenditaRestaurant from '../../../assets/restaurantes/restaurante02.png';
import SereiaDoMar from '../../../assets/restaurantes/restaurante03.png';

const TelaRestaurantes = ({navigation}) => (
    <View style={estilo.container}>
        <Text style={estilo.title}>Bares e Restaurantes</Text>
        <Text style={estilo.descricao}>
            O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
        </Text>
        <View style={estilo.cardRestaurant}>
            <Image 
                style={estilo.imgRestaurant}
                source={AmarzenMar}
            />
            <Text style={estilo.nameRestaurant}>Armazén Mar</Text>
            <Text>Localização: Rod Rio-Santos</Text>
        </View>
        <View style={estilo.cardRestaurant}>
            <Image 
                style={estilo.imgRestaurant}
                source={BenditaRestaurant}
            />
            <Text style={estilo.nameRestaurant}>Bendita's Restaurante</Text>
            <Text>Localização: Centro Histórico</Text>
        </View>
        <View style={estilo.cardRestaurant}>
            <Image 
                style={estilo.imgRestaurant}
                source={SereiaDoMar}
            />
            <Text style={estilo.nameRestaurant}>SEREIA DO MAR PIZZA-BAR</Text>
            <Text>Localização: Praia do Jabaquara</Text>
        </View>
    </View>
);

export default TelaRestaurantes;