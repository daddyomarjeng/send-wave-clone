import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constant/colors";
import SettingsButton from "./SettingsButton";
import UserBalance from "./UserBalance";
import DashboardIcons from "./DashboardIcons";
import QrCode from "./QrCode";
import RecentTransactions from "./RecentTransactions";

const DashboardScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  const handleRefresh = () => {
    setTimeout(() => {
      setShowTransactions(true);
      console.log("Hii");
      setRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
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
          <RecentTransactions showTransactions={showTransactions} />
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
    // minHeight: 200,
    minHeight: 150,
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
