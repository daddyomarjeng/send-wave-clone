import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import SendMoneyLayout from "../../layouts/SendMoneyLayout";
import AppTextInput from "../../components/AppTextInput";

const SendMoneyAmountScreen = () => {
  const { params } = useRoute();
  const { receiver } = params;

  console.log("====================================");
  console.log("Receiver:", receiver);
  console.log("====================================");
  return (
    <SendMoneyLayout>
      <View style={styles.toContainer}>
        <Text style={styles.label}>To</Text>
        <Text style={styles.name}>{receiver?.name}</Text>
        <Text style={styles.phone}>{receiver?.phone}</Text>
      </View>
      <AppTextInput label="Send Amount" />
    </SendMoneyLayout>
  );
};

export default SendMoneyAmountScreen;

const styles = StyleSheet.create({});
