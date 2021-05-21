import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarsList from "./Screens/CarsList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CarsDetails from "./Screens/CarsDetails";
import TravelList from "./Screen/TravelList";
import iconsBar from "./foodicons/iconsBar";
import Flat from "./flat/Flat";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="iconsBar" component={iconsBar} />
        <Stack.Screen name="TravelList" component={TravelList} />
        <Stack.Screen name="CarsList" component={CarsList} />
        <Stack.Screen name="CarsDetails" component={CarsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
