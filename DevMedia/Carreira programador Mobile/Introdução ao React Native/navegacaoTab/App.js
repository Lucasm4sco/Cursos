import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Text} from "react-native";

import TelaInicial from "./src/componentes/TelaInicial";
import TelaCatalogo from "./src/componentes/TelaCatalogo";
import TelaContato from "./src/componentes/TelaContato";

const Tabs = createBottomTabNavigator();

const T = () => (
  <Text>Hello</Text>
);

const App = () => (
  <NavigationContainer>
    <Tabs.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#400303' },
        headerTitleStyle: { 
          color: '#fff', 
          fontSize: 22 
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          height: 70,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
          marginBottom: 10
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ab887c',
        tabBarActiveBackgroundColor: '#400303'
      }}
      >
      <Tabs.Screen 
        name="Início" 
        component={ TelaInicial }
        options={{
          tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />
        }}
        />
        <Tabs.Screen 
        name="Catálogo" 
        component={ TelaCatalogo }
        options={{
          tabBarIcon: ({color}) => <FontAwesome5 name="wine-bottle" size={24} color={color} />
        }}
        />
        <Tabs.Screen 
        name="Contato" 
        component={ TelaContato }
        options={{
          tabBarIcon: ({color}) => <AntDesign name="contacts" size={24} color={color} />
        }}
        />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default App;