import React from "react";
import { ScrollView, ImageBackground, Text, View } from "react-native";
import estilo from "./estilo";

import imgForza from '../../assets/jogo-3.png';
import imgCyberpunk from '../../assets/jogo-2.png';
import imgHalo from '../../assets/jogo-4.png';

const TelaJogos = () => (
    <ScrollView contentContainerStyle={estilo.container}>
        <Text style={estilo.title}>Jogos em 4k</Text>
        <Text style={estilo.paragraph}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>
        <View style={estilo.card}>
            <ImageBackground
                style={estilo.imgJogo}
                source={imgForza}
            >
                <Text style={estilo.nameGame}>Forza Horizon 5</Text>
            </ImageBackground>
            <Text style={estilo.description}>
                Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.
            </Text>
        </View>
        <View style={estilo.card}>
            <ImageBackground
                style={estilo.imgJogo}
                source={imgCyberpunk}
            >
                <Text style={estilo.nameGame}>Cyberpunk 2077</Text>
            </ImageBackground>
            <Text style={estilo.description}>
                Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD projekt.
            </Text>
        </View>
        <View style={estilo.card}>
            <ImageBackground
                style={estilo.imgJogo}
                source={imgHalo}
            >
                <Text style={estilo.nameGame}>Halo 5: Guardians</Text>
            </ImageBackground>
            <Text style={estilo.description}>
                Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.
            </Text>
        </View>
    </ScrollView>
);

export default TelaJogos;
