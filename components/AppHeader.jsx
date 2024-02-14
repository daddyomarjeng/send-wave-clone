import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppBackButton from "./AppBackButton";

const AppHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <AppBackButton />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    fontWeight: "500",
  },
});
