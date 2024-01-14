import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  return (
    <Ionicons
      name="arrow-back-outline"
      size={35}
      style={styles.button}
      onPress={() => Alert.alert("Back")}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
