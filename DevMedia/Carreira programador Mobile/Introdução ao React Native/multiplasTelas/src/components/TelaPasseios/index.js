import React from "react";
import { View, Text, Image } from "react-native";

import estilo from "../../estiloComponents";

import imgTirolesa from '../../../assets/passeios/passeio01.png';
import imgRafting from '../../../assets/passeios/passeio02.png';
import imgCanoagem from '../../../assets/passeios/passeio03.png';

const TelaPasseios = () => (
    <View style={{...estilo.container, backgroundColor: '#edeb93'}}>
        <Text style={estilo.title}>Passeios em Paraty</Text>
        <Text style={estilo.descricao}>
            O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja alguns exemplos:
        </Text>
        <View style={estilo.card}>
            <Text style={{...estilo.title, fontSize: 18}}>Tirolesa</Text>
            <Image 
                style={estilo.imgCard}
                source={imgTirolesa}
            />
        </View>
        <View style={estilo.card}>
            <Text style={{...estilo.title, fontSize: 18}}>Rafting</Text>
            <Image 
                style={estilo.imgCard}
                source={imgRafting}
            />
        </View>
        <View style={estilo.card}>
            <Text style={{...estilo.title, fontSize: 18}}>Canoagem no mangue</Text>
            <Image 
                style={estilo.imgCard}
                source={imgCanoagem}
            />
        </View>
    </View>
);

export default TelaPasseios;