import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constant/colors";
import SettingsButton from "./SettingsButton";
import UserBalance from "./UserBalance";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.top}>
        <SettingsButton />
        <UserBalance />
      </View>

      <View style={styles.bottom}></View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.bg,
  },
  top: {
    minHeight: 200,
  },

  bottom: {
    flex: 1,
    backgroundColor: "#ddd",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
});
