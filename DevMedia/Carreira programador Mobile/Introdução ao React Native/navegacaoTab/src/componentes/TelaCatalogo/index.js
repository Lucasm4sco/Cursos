import React from "react";
import { ScrollView, Text, Image, View } from "react-native";

import estilos from "./estilo";
import vinhos from "./vinhos";

const TelaCatalogo = () => (
    <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.title}>
            Nossos vinhos
        </Text>
        <Text style={estilos.paragraph}>
            Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
        </Text>
        <View style={estilos.containerVinhos}>
            {vinhos.map(vinho => (
                <View key={vinho.vinho} style={estilos.card}>
                    <Image 
                        style={ estilos.imgVinho }
                        source={ vinho.img }
                    />
                    <View style={estilos.viewInfo}>
                        <Text style={estilos.nomeVinho}> {vinho.vinho} </Text>
                        <Text style={estilos.descricaoVinho}> {vinho.descricao} </Text>
                    </View>
                </View>  
            ))}
        </View>
    </ScrollView>
);

export default TelaCatalogo;
