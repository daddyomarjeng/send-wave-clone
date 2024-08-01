import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendMoneyLayout from "../../layouts/SendMoneyLayout";
import AppTextInput from "../../components/AppTextInput";
import PhoneInput from "../../components/PhoneInput";
import AppCountryPicker from "../../components/AppCountryPicker";
import { COLORS } from "../../constant/colors";

const NewNumberScreen = () => {
  return (
    <SendMoneyLayout>
      <AppTextInput label={"Full Name"} autoFocus style={styles.fullName} />
      {/* <PhoneInput /> */}
      <View style={styles.row}>
        <AppCountryPicker
          // onSelect={(country) => console.log(country)}
          onSelect={(country) => {
            // setCallingCode(country?.callingCode)
          }}
          callingCodeSize={1}
          flagSize={16}
          br={5}
          py={14}
          initialCountry={"+220"}
        />
        <AppTextInput
          style={styles.input}
          placeholder="354XXXX"
          onChangeText={(text) => {
            //
          }}
          keyboardType="numeric"
        />
      </View>
    </SendMoneyLayout>
  );
};

export default NewNumberScreen;

const styles = StyleSheet.create({
  fullName: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    marginBottom: 8,
  },
});
