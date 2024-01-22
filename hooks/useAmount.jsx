const useAmount = (transaction) => {
  if (!transaction) return;
  const amount =
    transaction?.type === "withdrawal"
      ? { label: "Withdrawal", value: `-${transaction?.amount} GMD` }
      : transaction?.type === "receive"
      ? {
          label: `Received from ${transaction?.from}`,
          value: `${transaction?.amount} GMD`,
        }
      : transaction?.type === "send"
      ? {
          label: `Transfer to ${transaction?.to}`,
          value: `-${transaction?.total} GMD`,
        }
      : transaction?.type === "deposit"
      ? {
          label: `Deposit`,
          value: `${transaction?.amount} GMD`,
        }
      : { label: "", value: "" };
  return amount;
};

export default useAmount;
