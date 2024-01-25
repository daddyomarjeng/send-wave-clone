import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "./BackButton";

const AppHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  title: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    fontWeight: "500",
  },
});
