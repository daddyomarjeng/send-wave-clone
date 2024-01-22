import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TransactionRow = ({ left, right }) => {
  if (!left || !right) return null;
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{left}</Text>
      <Text style={styles.text}>{right}</Text>
    </View>
  );
};

export default TransactionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
