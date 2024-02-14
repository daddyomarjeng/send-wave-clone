import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import { COUNTRIES } from "../constant/data";
import { COLORS } from "../constant/colors";
import Numpad from "./Numpad";
import AppCountryPicker from "./AppCountryPicker";

const PhoneInput = ({ phone, setPhone }) => {
  const [showBlinker, setShowBlinker] = useState(true);

  const handleCountrySelect = (country) => {
    console.log("====================================");
    console.log(country);
    console.log("====================================");
  };

  // useEffect(() => {
  //   // Change the state every second or the time given by User.
  //   console.log("====================================");
  //   console.log("Innn");
  //   console.log("====================================");
  //   const interval = setInterval(() => {
  //     setShowBlinker((showBlinker) => !showBlinker);
  //   }, 800);
  //   return () => {
  //     console.log("====================================");
  //     console.log("out");
  //     console.log("====================================");
  //     clearInterval(interval);
  //   };
  // }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("====================================");
      console.log("Innn");
      console.log("====================================");
      const interval = setInterval(() => {
        setShowBlinker((showBlinker) => !showBlinker);
      }, 800);
      return () => {
        console.log("====================================");
        console.log("out");
        console.log("====================================");
        clearInterval(interval);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <AppCountryPicker onSelect={handleCountrySelect} />
        <View style={styles.right}>
          <Text
            style={[styles.text, { color: phone ? "#111" : "#ccc" }]}
            placeholder="phone number"
          >
            {phone || "XXX XXXX"}
          </Text>
          {showBlinker && <View style={styles.blinker} />}
        </View>
      </View>
      <Numpad number={phone} setNumber={setPhone} showOtpInputs={false} />
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 22,
  },
  image: {
    width: 20,
    height: 20,
  },
  blinker: {
    width: 2,
    backgroundColor: "lightblue",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numPad: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  numPadText: {
    fontSize: 32,
    color: "#777",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 15,
    // borderRadius: 10,
  },
  radio: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
  },
  modalTextSmall: {
    color: "#ccc",
    fontSize: 12,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
