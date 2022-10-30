import { View, Text } from "react-native";
import React from "react";
import { HomeScreen, DetailsScreen, OnBoardingScreen } from "../Screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        {/* <Stack.Screen name="SPLASH" component={OnBoardingScreen} /> */}
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="DETAIL" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
