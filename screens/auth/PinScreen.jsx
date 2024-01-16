import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Numpad from "../../components/Numpad";
import BackButton from "../../components/BackButton";

const PinScreen = () => {
  const [pin, setPin] = useState(null);
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>Create a new secret code</Text>
      <Text style={styles.pin}>{pin}</Text>
      <Numpad number={pin} setNumber={setPin} maxLength={4} />
    </View>
  );
};

export default PinScreen;

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
});
