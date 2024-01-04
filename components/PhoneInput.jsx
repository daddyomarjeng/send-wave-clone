import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const PhoneInput = () => {
  const [phone, setPhone] = useState("");
  const [showBlinker, setShowBlinker] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowBlinker((showBlinker) => !showBlinker);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <Image source={require("../assets/gambia.png")} style={styles.image} />
        <Text style={styles.text}>+220</Text>
        <Ionicons name="chevron-down" size={20} />
      </TouchableOpacity>
      <View style={styles.right}>
        <Text
          style={[styles.text, { color: phone ? "#111" : "#ccc" }]}
          placeholder="phone number"
        >
          {phone || "XXX XXX X"}
        </Text>
        {showBlinker && <View style={styles.blinker} />}
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    marginVertical: 20,
  },
  left: {
    borderBottomWidth: 1,
    borderColor: "#888",
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  right: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: "lightblue",
    paddingBottom: 5,
    flexDirection: "row",
    gap: 5,
  },
  text: {
    // fonts
  },
  image: {
    width: 25,
    height: 25,
  },
  blinker: {
    width: 2,
    backgroundColor: "lightblue",
  },
});
