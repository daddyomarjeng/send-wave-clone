import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransactionItem from "./TransactionItem";
import { TRANSACTIONS } from "../../constant/data";

const TransactionList = () => {
  return (
    <View style={styles.container}>
      {TRANSACTIONS.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
