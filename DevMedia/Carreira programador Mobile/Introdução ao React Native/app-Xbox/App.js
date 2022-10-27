import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './src/components/TelaInicial';
import TelaConsoles from './src/components/TelaConsoles';
import TelaJogos from './src/components/TelaJogos';
import TelaNuvem from './src/components/TelaNuvem';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Tela inicial'>
      <Stack.Screen name="Tela inicial" component={TelaInicial} />
      <Stack.Screen name="Consoles" component={TelaConsoles} />
      <Stack.Screen name="Jogos" component={TelaJogos} />
      <Stack.Screen name="Nuvem" component={TelaNuvem} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;