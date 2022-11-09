import React from "react";
import { View, ScrollView, Text, Image } from 'react-native';

import ImgAyrton from '../../../assets/foto-capa.jpg';
import ImgReiDaChuva from '../../../assets/rei-da-chuva.png';
import ImgReiDeMonaco from '../../../assets/rei-de-monaco.png';
import ImgSilvastone from '../../../assets/silvastone.png';
import ImgPreparacao from '../../../assets/preparacao.png';
import { styles } from "./style";

const AboutScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.boxView}>
            <Text style={[styles.title, styles.limitContentView]}>Ayrton Senna</Text>
            <Image 
                style={[styles.img, styles.limitContentView]}
                source={ImgAyrton}
            />
            <Text style={[styles.description, styles.limitContentView]}>
                No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.
            </Text>
        </View>
        <ScrollView contentContainerStyle={styles.boxScrollview}>
            <View style={styles.boxAbout}>
                <Image
                    style={styles.imgBox} 
                    source={ImgReiDaChuva}/>
                <View style={styles.textBox}>
                    <Text style={styles.subtitle}>Rei da chuva</Text>
                    <Text style={styles.descriptionBox}>
                        Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.
                    </Text>
                </View>
            </View>
            <View style={styles.boxAbout}>
                <Image
                    style={styles.imgBox} 
                    source={ImgReiDeMonaco}/>
                <View style={styles.textBox}>
                    <Text style={styles.subtitle}>Rei da Mônaco</Text>
                    <Text style={styles.descriptionBox}>
                        Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.
                    </Text>
                </View>
            </View>
            <View style={styles.boxAbout}>
                <Image
                    style={styles.imgBox} 
                    source={ImgSilvastone}/>
                <View style={styles.textBox}>
                    <Text style={styles.subtitle}>Silvastone</Text>
                    <Text style={styles.descriptionBox}>
                        Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.
                    </Text>
                </View>
            </View>
            <View style={styles.boxAbout}>
                <Image
                    style={styles.imgBox} 
                    source={ImgPreparacao}/>
                <View style={styles.textBox}>
                    <Text style={styles.subtitle}>Preparação</Text>
                    <Text style={styles.descriptionBox}>
                        Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.
                    </Text>
                </View>
            </View>
        </ScrollView>
    </ScrollView>
);

export default AboutScreen;