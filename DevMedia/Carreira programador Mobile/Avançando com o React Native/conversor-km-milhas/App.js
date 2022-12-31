import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import ConvertKmToMiles from "./src/components/ConvertKmToMiles";
import ConvertMilesToKm from "./src/components/ConvertMilesToKm";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 5
          }
        }}
      >
        <Tabs.Screen
          name="Quilômetros para Milhas"
          component={ConvertKmToMiles}
          options={{
            tabBarIcon: () => <Entypo name="ruler" size={24} color="black" />
          }}
        />
        <Tabs.Screen
          name="Milhas para quilômetros"
          component={ConvertMilesToKm}
          options={{
            tabBarIcon: () => <FontAwesome5 name="ruler-combined" size={24} color="black" />
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
