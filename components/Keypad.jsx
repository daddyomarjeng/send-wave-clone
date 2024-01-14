import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NumberPad = ({ number, ...rest }) => {
  return (
    <TouchableOpacity style={styles.numPad} {...rest}>
      <Text style={styles.numPadText}>{number}</Text>
    </TouchableOpacity>
  );
};

const Keypad = ({ phone, setPhone }) => {
  const handleChange = (input) => {
    if (phone?.length >= 7 && input !== "-1") return;
    let val;
    if (input === "-1") {
      if (phone?.length <= 0 || !phone) {
        val = "";
      } else {
        val = phone.toString().substring(0, phone.length - 1);
      }
    } else if ((!phone && input === "0") || (!phone && input === "00")) {
      val = "";
    } else {
      val = phone ? phone + input : input;
    }

    setPhone(val);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <NumberPad number={1} onPress={() => handleChange("1")} />
        <NumberPad number={2} onPress={() => handleChange("2")} />
        <NumberPad number={3} onPress={() => handleChange("3")} />
      </View>
      <View style={styles.row}>
        <NumberPad number={4} onPress={() => handleChange("4")} />
        <NumberPad number={5} onPress={() => handleChange("5")} />
        <NumberPad number={6} onPress={() => handleChange("6")} />
      </View>
      <View style={styles.row}>
        <NumberPad number={7} onPress={() => handleChange("7")} />
        <NumberPad number={8} onPress={() => handleChange("8")} />
        <NumberPad number={9} onPress={() => handleChange("9")} />
      </View>
      <View style={styles.row}>
        <NumberPad number={"\t\t\t\t\t"} disabled />
        <NumberPad number={0} onPress={() => handleChange("0")} />
        <NumberPad
          number={<Ionicons name="backspace" size={30} />}
          onPress={() => handleChange("-1")}
        />
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  container: {
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
});
