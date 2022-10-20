import React from "react";
import { View, Text, Image, Pressable } from "react-native";

import estilo from "./estilo";
import imgParaty from '../../../assets/01.png'

const TelaInicial = ({navigation}) => (
    <View style={estilo.container}>
        <View style={estilo.card}>
            <Text style={estilo.title}>Paraty</Text>
            <Text style={estilo.paragrafo}>Saiba o que visitar em paraty.</Text>
            <Image
                style={estilo.img}
                source={imgParaty}
            />
            <Pressable
                style={estilo.button}
                onPress={() => navigation.navigate('Restaurantes')}
            >
                <Text style={estilo.textButton}>Ver Restaurantes</Text>
            </Pressable>

            <Pressable
                style={estilo.button}
                onPress={() => navigation.navigate('Restaurantes')}
            >
                <Text style={estilo.textButton}>Ver Passeios</Text>
            </Pressable> 

            <Pressable
                style={estilo.button}
                onPress={() => navigation.navigate('Restaurantes')}
            >
                <Text style={estilo.textButton}>Ver Hospedagens</Text>
            </Pressable>
        </View>
    </View>
);

export default TelaInicial;