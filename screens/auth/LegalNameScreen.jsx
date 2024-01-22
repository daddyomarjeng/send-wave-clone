import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import { COLORS } from "../../constant/colors";
import AppButton from "../../components/AppButton";

const LegalNameScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>Please enter your full legal name</Text>
      <TextInput
        style={styles.name}
        placeholder="Full Name"
        placeholderTextColor="#ccc"
      />
      <Text style={styles.tac}>
        By signing up, I agree to Waves's{" "}
        <Text style={styles.underline}>Terms and Conditions</Text>
      </Text>
      <View style={styles.bottom}>
        <AppButton title={"Next"} onPress={() => navigation.navigate("Pin")} />
      </View>
    </View>
  );
};

export default LegalNameScreen;

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
  name: {
    borderBottomWidth: 2,
    borderColor: COLORS.primary,
    padding: 10,
    marginVertical: 15,
  },
  tac: { color: "#ccc", fontSize: 12 },
  underline: { textDecorationLine: "underline" },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
