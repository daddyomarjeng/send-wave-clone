import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Numpad from "../../components/Numpad";

const OtpScreen = () => {
  const [pin, setPin] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Enter the vlidation code that we texted to 3540237
      </Text>
      <Text style={styles.pin}>{pin}</Text>
      <Numpad
        number={pin}
        setNumber={setPin}
        maxLength={4}
        topComponent={
          <TouchableOpacity>
            <Text style={styles.resend}>Resend SMS in 0.09</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
  bottom: { flex: 1, justifyContent: "flex-end" },
  pin: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 20,
    borderStyle: "dashed",
  },
  resend: {
    color: "#ccc",
    fontSize: 17,
    textAlign: "center",
  },
});
