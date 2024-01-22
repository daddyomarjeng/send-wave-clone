import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
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

export default BackButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
