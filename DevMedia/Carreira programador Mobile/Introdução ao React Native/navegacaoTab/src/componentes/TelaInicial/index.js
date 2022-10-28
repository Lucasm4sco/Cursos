import React from "react";
import { ImageBackground, Text } from "react-native";

import imgFundo from '../../assets/capa.jpg';
import estilos from "./estilo";

const TelaInicial = () => (
    <ImageBackground
        source={imgFundo}
        style={estilos.container}
        blurRadius={8}
    >
        <Text style={estilos.title}>
            Adega Preferida
        </Text>
        <Text style={estilos.paragraph}>
            Aqui você encontra os melhores e mais saborosos vinhos
        </Text>
    </ImageBackground>
);

export default TelaInicial;