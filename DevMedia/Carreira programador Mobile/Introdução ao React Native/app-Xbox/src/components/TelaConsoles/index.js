import React from "react";
import { ScrollView, Text, Image } from "react-native";
import estilo from "./estilo";

import imgConsole1 from '../../assets/console-1-2.png';
import imgConsole2 from '../../assets/console-2.png';

const TelaConsoles = () => (
    <ScrollView contentContainerStyle={estilo.container}>
        <Image 
            style={estilo.imgConsole}
            source={imgConsole1}
        />
        <Text style={estilo.title}>XBOX SERIES S</Text>
        <Text style={estilo.subtitle}>
            Desempenho de última geração no menor Xbox de todos os tempos.
        </Text>
        <Text style={estilo.description}>
            O Series S é pra quem busca jogos de nova geração gastanto pouco. é o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e perfomance
        </Text>
        <Image 
            style={estilo.imgConsole}
            source={imgConsole2}
        />
        <Text style={estilo.title}>XBOX SERIES X</Text>
        <Text style={estilo.subtitle}>
            O Xbox mais rápido e poderoso de todos os tempos.
        </Text>
        <Text style={estilo.description}>
            O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e perfomance.
        </Text>
    </ScrollView>
);

export default TelaConsoles;