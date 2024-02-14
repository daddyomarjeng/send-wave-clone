import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendMoneyLayout from "../../layouts/SendMoneyLayout";
import AppTextInput from "../../components/AppTextInput";
import PhoneInput from "../../components/PhoneInput";

const NewNumberScreen = () => {
  return (
    <SendMoneyLayout>
      <AppTextInput label={"Full Name"} autoFocus style={styles.fullName} />
      <PhoneInput />
    </SendMoneyLayout>
  );
};

export default NewNumberScreen;

const styles = StyleSheet.create({
  fullName: {
    marginTop: 30,
  },
});
