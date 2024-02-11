import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constant/colors";

const AppButton = ({ title, disabled, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});
