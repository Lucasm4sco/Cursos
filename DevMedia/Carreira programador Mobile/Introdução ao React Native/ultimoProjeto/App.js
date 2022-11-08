import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InitialScreen from "./src/screens/Initial";
import AboutScreen from "./src/screens/about";
import VictoriesScreen from "./src/screens/victories";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="inicio" component={InitialScreen} />
        <Tab.Screen name="inicio2" component={AboutScreen} />
        <Tab.Screen name="inicio3" component={VictoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
