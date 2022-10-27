import React from "react";
import { Image, Text, View, Pressable} from 'react-native';
import estilo from "./estilo";

import Logo from '../../assets/logo3.png';
import Console from '../../assets/console-1.png';
import imgJogo from '../../assets/jogo-1.png';
import imgXCloud from '../../assets/xcloud-1.png';

const TelaInicial = ({navigation}) => (
    <View style={estilo.container}>
        <Image 
            style={estilo.logo}
            source={Logo}
        />
        <Text style={estilo.title}>Xbox</Text>
        <Text style={estilo.description}>Xbox é uma marca de consoles criada pela Microsoft.</Text>
        <Text style={estilo.description}>Toque nos cards para conhecer</Text>
        <View style={estilo.buttons}>
            <Pressable 
            style={estilo.button} 
            onPress={() => navigation.navigate('Consoles')}
            >
                <Image 
                    style={estilo.imgButton}
                    source={Console}
                />
                <Text style={estilo.textButton}>Conheça os consoles</Text>
            </Pressable>
            <Pressable 
                style={estilo.button} 
                onPress={() => navigation.navigate('Jogos')}
            >
                <Image 
                    style={estilo.imgButton}
                    source={imgJogo}
                />
                <Text style={estilo.textButton}>Conheça os jogos</Text>
            </Pressable>
            <Pressable 
                style={estilo.button} 
                onPress={() => navigation.navigate('Nuvem')}
            >
                <Image 
                    style={estilo.imgButton}
                    source={imgXCloud}
                />
                <Text style={estilo.textButton}>Conheça o xCloud</Text>
            </Pressable>
        </View>
        
    </View>
);

export default TelaInicial;