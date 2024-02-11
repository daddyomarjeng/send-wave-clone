import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import SendMoneyLayout from "../../layouts/SendMoneyLayout";
import AppTextInput from "../../components/AppTextInput";
import { COLORS } from "../../constant/colors";
import AppButton from "../../components/AppButton";

const USER_BALANCE = 400;

const SendMoneyAmountScreen = () => {
  const { params } = useRoute();
  const { receiver } = params;
  const [sendAmount, setSendAmount] = useState();
  const [receiveAmount, setReceiveAmount] = useState();
  const [errorMessage, setErrorMessage] = useState({
    sendAmount: null,
    receiveAmount: null,
  });

  const handleChange = (field, text) => {
    if (text[text.length - 1] === ".") return; // to avoid decimals

    const amount = parseInt(text);
    const serviceFee = amount >= 1000 ? 0.01 * amount : 5;

    validateAmount(field, text);

    if (amount) {
      if (field === "sendAmount") {
        setSendAmount(text);
        setReceiveAmount(`${amount - serviceFee}`);
      }
      if (field === "receiveAmount") {
        setSendAmount(`${amount + serviceFee}`);
        setReceiveAmount(text);
      }
    } else {
      setSendAmount();
      setReceiveAmount();
      //   setErrorMessage({receiveAmount:null, sendAmount:null})
    }
  };

  const validateAmount = (field, amount) => {
    if (parseInt(amount) > USER_BALANCE) {
      setErrorMessage((prev) => ({
        ...prev,
        [field]:
          "Insufficient balance, Your account Balance is " +
          USER_BALANCE +
          " GMD",
      }));
    } else {
      setErrorMessage((prev) => ({ ...prev, [field]: null }));
    }
  };
  //   useEffect(() => {}, []);
  return (
    <SendMoneyLayout>
      <View style={styles.toContainer}>
        <Text style={styles.label}>To</Text>
        <Text style={styles.name}>{receiver?.name}</Text>
        <Text style={styles.phone}>{receiver?.phone}</Text>
      </View>
      <AppTextInput
        label="Send Amount"
        keyboardType="numeric"
        value={sendAmount}
        onChangeText={(text) => handleChange("sendAmount", text)}
        error={errorMessage?.sendAmount}
      />
      <AppTextInput
        label="Receive Amount"
        keyboardType="numeric"
        value={receiveAmount}
        onChangeText={(text) => handleChange("receiveAmount", text)}
        error={errorMessage?.receiveAmount}
      />
      <View style={styles.bottom}>
        <AppButton title="Send" disabled />
      </View>
    </SendMoneyLayout>
  );
};

export default SendMoneyAmountScreen;

const styles = StyleSheet.create({
  toContainer: {
    borderBottomWidth: 1.2,
    borderColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 6,
  },
  label: {
    color: "#888",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
    marginBottom: 3,
  },
  phone: {
    color: "#888",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
