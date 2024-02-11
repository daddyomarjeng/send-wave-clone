import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Numpad from "../../components/Numpad";
import AppBackButton from "../../components/AppBackButton";

const PinScreen = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState(null);
  return (
    <View style={styles.container}>
      <AppBackButton />
      <Text style={styles.heading}>Create a new secret code</Text>
      {/* <Text style={styles.pin}>{pin}</Text> */}
      <Numpad
        number={pin}
        setNumber={setPin}
        maxLength={4}
        onMaxLength={() => navigation.navigate("Dashboard")}
      />
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
