import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";

import ImgFundo from '../../../assets/fundo.jpg';
import ImgCapa from '../../../assets/foto-capa.jpg';
import { styles } from "./style";

const InitialScreen = () => (
    <ImageBackground source={ImgFundo} style={styles.container} blurRadius={10}>
        <Image 
            style={styles.imgCapa}
            source={ImgCapa}
        />
        <View style={styles.box}>
            <Text style={styles.title}>Ayrton Senna</Text>
            <Text style={styles.description}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
        </View>
    </ImageBackground>
);

export default InitialScreen;