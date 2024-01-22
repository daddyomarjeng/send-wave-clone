import React from "react";
import TransactionRow from "./TransactionRow";

const AmountRow = ({ transaction }) => {
  if (!transaction) return;
  const label =
    transaction?.type === "withdrawal"
      ? "Withdrawal amount"
      : transaction?.type === "receive"
      ? `Received amount`
      : transaction?.type === "send"
      ? `Received amount`
      : transaction?.type === "deposit"
      ? `Deposit Amount`
      : "";
  return <TransactionRow left={label} right={`${transaction?.amount} GMD`} />;
};

export default AmountRow;
