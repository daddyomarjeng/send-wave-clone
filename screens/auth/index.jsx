import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "../../components/PhoneInput";
import AppButton from "../../components/AppButton";
import { Button } from "react-native";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Welcome to Wave! Enter your mobile to start
      </Text>
      <PhoneInput phone={phone} setPhone={setPhone} />
      <AppButton title="Next" onPress={() => navigation.navigate("OTP")} />
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
