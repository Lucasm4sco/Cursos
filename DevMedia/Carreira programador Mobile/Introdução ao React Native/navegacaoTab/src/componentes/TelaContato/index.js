import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FontAwesome, MaterialIcons, FontAwesome5  } from '@expo/vector-icons'; 

import estilos from "./estilo";

const TelaContato = () => (
    <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.title}>Entre em contato conosco para comprar nossos produtos</Text>
        <View style={estilos.cards}>
            <View style={estilos.card}>
                <FontAwesome name="phone" size={40} color="#400303" />
                <Text style={estilos.titleCard}>Telefone: </Text>
                <Text style={estilos.infoCard}>+55 21 000000000</Text>
            </View>
            <View style={estilos.card}>
                <FontAwesome name="map-marker" size={40} color="#400303" />
                <Text style={estilos.titleCard}>Endereço: </Text>
                <Text style={estilos.infoCard}>Av. 123, 222 - Rio de Janeiro RJ</Text>
            </View>
            <View style={estilos.card}>
                <MaterialIcons name="email" size={40} color="#400303" />
                <Text style={estilos.titleCard}>Email: </Text>
                <Text style={estilos.infoCard}>preferida@adega.com.br</Text>
            </View>
            <View style={estilos.card}>
                <FontAwesome5 name="instagram" size={40} color="#400303" />
                <Text style={estilos.titleCard}>Instagram: </Text>
                <Text style={estilos.infoCard}>@adegapreferida</Text>
            </View>
        </View>
    </ScrollView>
);

export default TelaContato;