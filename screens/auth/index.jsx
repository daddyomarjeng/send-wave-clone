import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PhoneInput from "../../components/PhoneInput";
import AppButton from "../../components/AppButton";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Welcome to Wave! Enter your mobile to start
      </Text>
      <PhoneInput phone={phone} setPhone={setPhone} />
      <AppButton title="Next" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
