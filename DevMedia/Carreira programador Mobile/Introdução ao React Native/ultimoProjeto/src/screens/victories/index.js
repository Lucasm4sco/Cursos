import React from "react";
import { ScrollView, ImageBackground, View, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import ImgCapa from '../../../assets/corrida1.jpg';
import ImgMundial1 from '../../../assets/vitoria1.jpg';
import ImgMundial2 from '../../../assets/vitoria2.jpg';
import ImgMundial3 from '../../../assets/vitoria3.jpg';
import { styles } from "./style";


const VictoriesScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
            style={styles.imgCapa}
            source={ImgCapa}
            blurRadius={5}
        >
            <View style={styles.box}>
                <Text style={styles.title}>Senna em Números</Text>
                <Text style={styles.text}>
                    Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.
                </Text>
                <View style={styles.viewTrophy}>
                    <FontAwesome5 name="trophy" size={25} color="#eecb01" />
                    <Text style={styles.numberTrophy}>161</Text>
                    <Text style={styles.descriptionTrophy}>GPS DISPUTADOS</Text>
                </View>
                <View style={styles.viewTrophy}>
                    <FontAwesome5 name="trophy" size={25} color="#eecb01" />
                    <Text style={styles.numberTrophy}>65</Text>
                    <Text style={styles.descriptionTrophy}>POLE POSITIONS</Text>
                </View>
                <View style={styles.viewTrophy}>
                    <FontAwesome5 name="trophy" size={25} color="#eecb01" />
                    <Text style={styles.numberTrophy}>41</Text>
                    <Text style={styles.descriptionTrophy}>VITÓRIAS</Text>
                </View>
                <View style={styles.viewTrophy}>
                    <FontAwesome5 name="trophy" size={25} color="#eecb01" />
                    <Text style={styles.numberTrophy}>3X</Text>
                    <Text style={styles.descriptionTrophy}>CAMPEÃO MUNDIAL</Text>
                </View>
            </View>
            <View style={styles.cardVictory}>
                <Text style={styles.cardTitle}>Campeonato Mundial – 1988</Text>
                <Image
                    style={styles.cardImg}
                    source={ImgMundial1}
                />
            </View>
            <View style={styles.cardVictory}>
                <Text style={styles.cardTitle}>Campeonato Mundial – 1990</Text>
                <Image
                    style={styles.cardImg}
                    source={ImgMundial2}
                />
            </View>
            <View style={styles.cardVictory}>
                <Text style={styles.cardTitle}>Campeonato Mundial – 1991</Text>
                <Image
                    style={styles.cardImg}
                    source={ImgMundial3}
                />
            </View>
        </ImageBackground>
    </ScrollView>
);

export default VictoriesScreen;