import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constant/colors";

const TransactionItem = ({ transaction }) => {
  const label =
    transaction?.type === "withdrawal"
      ? "Withdrawal"
      : transaction?.type === "receive"
      ? `Received from ${transaction?.from}`
      : transaction?.type === "send"
      ? `Sent to ${transaction.to}`
      : transaction.type === "deposit"
      ? "Deposit"
      : "";
  return (
    <Pressable style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text} numberOfLines={2}>
          {label}
        </Text>
        <Text style={styles.textLight}>{transaction?.date}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>{transaction?.amount} GMD</Text>
      </View>
    </Pressable>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 10,
  },
  left: {
    flex: 1,
  },
  right: {
    width: 120,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "darkblue",
    fontWeight: "bold",
    // letterSpacing: 1.5,
  },
  textLight: {
    fontSize: 12,
    color: "#999",
    // letterSpacing: 1.5,
  },
});
