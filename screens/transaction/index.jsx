import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";
import { TRANSACTIONS } from "../../constant/data";
import useAmount from "../../hooks/useAmount";
import TransactionIcon from "./TransactionIcon";
import TransactionRow from "./TransactionRow";
import AmountRow from "./AmountRow";

const TransactionScreen = () => {
  const transaction = TRANSACTIONS[0];
  const amount = useAmount(transaction);
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.top}>
        <View style={styles.row}>
          <View style={styles.topLeft}>
            <Text style={styles.amount}>{amount?.value}</Text>
            <Text style={styles.label}>{amount?.label}</Text>
          </View>
          <View style={styles.topRight}>
            <TransactionIcon transaction={transaction} />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <AmountRow transaction={transaction} />
        <TransactionRow left="Fee" right={`${transaction.fee} GMD`} />
        <TransactionRow left="Status" right={transaction?.status} />
        <TransactionRow left="Agent Name" right={transaction?.agentName} />
        <TransactionRow left="Date & Time" right={transaction?.dateTime} />
        <TransactionRow
          left="New Balance"
          right={`${transaction?.newBalance} GMD`}
        />
        <TransactionRow
          left="Transaction ID"
          right={`${transaction?.transactionId}`}
        />
      </View>
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    backgroundColor: "#f1f1f0",
  },
  top: {
    // marginVertical: 10,
    marginTop: 20,
  },
  bottom: {
    backgroundColor: "#FFF",
    padding: 10,
    minHeight: 200,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
