import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SettingsButton = () => {
  return (
    <Ionicons
      name="md-settings-sharp"
      size={32}
      color="#FFF"
      style={styles.icon}
    />
  );
};

export default SettingsButton;

const styles = StyleSheet.create({
  icon: {
    marginTop: 30,
    marginLeft: 20,
  },
});
