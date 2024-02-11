import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppHeader from "../components/AppHeader";

const SendMoneyLayout = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <AppHeader title="Send Money" />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SendMoneyLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
});
