import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";

const TransactionIcon = ({ transaction }) => {
  if (transaction?.type === "send" || transaction?.type === "receive")
    return (
      <View style={styles.iconContainer}>
        <View style={[styles.icon, { backgroundColor: "#B0B1ED" }]}>
          <Ionicons name="person" size={30} color="#0D1C99" />
        </View>
      </View>
    );
  if (transaction?.type === "deposit")
    return (
      <Ionicons
        name="arrow-up-circle"
        size={60}
        color={COLORS.primary}
        style={{ opacity: 0.4 }}
      />
    );
  if (transaction?.type === "withdrawal")
    return (
      <Ionicons
        name="arrow-down-circle"
        size={60}
        color={COLORS.primary}
        style={{ opacity: 0.4 }}
      />
    );

  return null;
};

export default TransactionIcon;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
