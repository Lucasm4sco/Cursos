import React from "react";
import { Text, ImageBackground, Image } from "react-native";
import estilo from "./estilo";

import imgCloud from '../../assets/fundo-xcloud.png';
import imgCloud2 from '../../assets/xcloud-2.png';

const TelaNuvem = () => (
    <ImageBackground
        source={imgCloud}
        style={estilo.container}
    >
        <Text style={estilo.title}>Xbox Cloud Gaming</Text>
        <Text style={estilo.subtitle}>
            Serviço de streaming de jogos
        </Text>
        <Text style={estilo.paragraph}>
            Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.
        </Text>
        <Text style={estilo.paragraph}>
            Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.
        </Text>
        <Text style={estilo.paragraph}>
            Através de uma assinatura você terá um XBOX virtual sempre que precisar.
        </Text>
        <Image
            source={imgCloud2}
            style={estilo.imgPlataformas}
        />
    </ImageBackground>
);

export default TelaNuvem;