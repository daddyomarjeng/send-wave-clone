import { StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AppBackButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="arrow-back-outline"
      size={35}
      style={styles.button}
      onPress={() => navigation.goBack()}
    />
  );
};

export default AppBackButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    // backgroundColor: "red",
    width: 40,
  },
});
