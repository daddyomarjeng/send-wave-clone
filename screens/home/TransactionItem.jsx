import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constant/colors";

const TransactionItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text} numberOfLines={2}>
          Withdrawal
        </Text>
        <Text style={styles.textLight}>Jul 04, 2023</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>1,000</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {},
  right: {},
  text: { fontSize: 20, color: "darkblue", fontWeight: "bold" },
  textLight: {
    fontSize: 16,
    color: "#999",
  },
});
