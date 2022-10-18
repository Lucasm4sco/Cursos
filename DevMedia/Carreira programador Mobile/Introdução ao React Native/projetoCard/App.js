import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

import Capa from './assets/capa.jpg';
import Perfil from './assets/perfil.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Capa} style={styles.capa} />
      <Image source={Perfil} style={styles.perfil} />
      <Text style={styles.nome}>Lucas Polles</Text>
      <Text style={styles.descricao}>Estudante em desenvolvimento Web e Mobile, aprendendo React Native com objetivo de virar FullStack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  capa: {
    height: '40%',
    width: '100%',
    resizeMode: 'cover'
  },
  perfil: {
    width: 130,
    height: 130,
    borderRadius: 65,
    bottom: 50
  },
  nome: {
    fontSize: 28,
    bottom: 22,
    fontWeight: '700',
    color: '#e5e5d5'
  },
  descricao: {
    fontSize: 18,
    width: '92%',
    textAlign: 'center',
    top: 20
  }
});
