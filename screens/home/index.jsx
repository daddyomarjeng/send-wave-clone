import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constant/colors";
import SettingsButton from "./SettingsButton";
import UserBalance from "./UserBalance";
import DashboardIcons from "./DashboardIcons";
import QrCode from "./QrCode";
import RecentTransactions from "./RecentTransactions";

const DashboardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <StatusBar style="light" />
      <SettingsButton />
      <View style={styles.container}>
        <View style={styles.top}>
          <UserBalance />
          <View style={styles.qrCodeContainer}>
            <QrCode />
          </View>
        </View>

        <View style={styles.bottom}>
          <DashboardIcons />
          <RecentTransactions />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 30,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
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
  qrCodeContainer: {
    position: "absolute",
    bottom: -70,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 999,
  },
});
