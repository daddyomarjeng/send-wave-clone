import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constant/colors";

const RecentTransactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Deposit and Withdraw for free!</Text>
        <Text style={[styles.infoText, { color: COLORS.primary }]}>
          Call 1222 toll free to find your nearest wave agent
        </Text>
      </View>
    </View>
  );
};

export default RecentTransactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 8,
  },
  infoContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    gap: 20,
  },
  infoText: {
    fontSize: 18,
    textAlign: "center",
  },
});
