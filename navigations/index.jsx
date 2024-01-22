import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import { StatusBar } from "expo-status-bar";

const AppNav = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNav;
