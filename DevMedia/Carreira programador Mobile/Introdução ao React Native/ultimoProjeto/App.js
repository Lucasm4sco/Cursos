import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, FontAwesome } from '@expo/vector-icons'; 

import InitialScreen from "./src/screens/Initial";
import AboutScreen from "./src/screens/about";
import VictoriesScreen from "./src/screens/victories";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eecb00'
          },
          tabBarStyle: {
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 14
          },
          tabBarActiveBackgroundColor: '#ffffff',
          tabBarInactiveBackgroundColor: '#eecb00',
          tabBarInactiveTintColor: '#000',
          tabBarActiveTintColor: '#b9181a',
        }}>
        <Tab.Screen 
          name="Início" 
          component={InitialScreen} 
          options={{
            tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />
          }}/>
        <Tab.Screen 
          name="Sobre" 
          component={AboutScreen} 
          options={{
            tabBarIcon: ({color}) => <FontAwesome5 name="question-circle" size={24} color={color} />
          }}
          />
        <Tab.Screen 
          name="Vitórias" 
          component={VictoriesScreen} 
          options={{
            tabBarIcon: ({color}) => <FontAwesome name="trophy" size={24} color={color} />
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
