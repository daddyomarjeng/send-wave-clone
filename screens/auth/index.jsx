import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PhoneInput from "../../components/PhoneInput";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Welcome to Wave! Enter your mobile to start
      </Text>
      <PhoneInput />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
  },
});
