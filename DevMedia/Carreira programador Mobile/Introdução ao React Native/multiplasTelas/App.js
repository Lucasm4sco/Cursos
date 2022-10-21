import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/components/TelaInicial";
import TelaRestaurantes from "./src/components/TelaRestaurantes";
import TelaPasseios from "./src/components/TelaPasseios";
import TelaHospedagem from "./src/components/TelaHospedagem";

const Stack = createStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Tela Inicial">
      <Stack.Screen name="Tela Inicial" component={ TelaInicial } />
      <Stack.Screen name="Restaurantes" component={ TelaRestaurantes } />
      <Stack.Screen name="Passeios" component={ TelaPasseios } />
      <Stack.Screen name="Hospedagens" component={ TelaHospedagem } />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;