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

const NumberPad = ({ number, ...rest }) => {
  return (
    <TouchableOpacity style={styles.numPad} {...rest}>
      <Text style={styles.numPadText}>{number}</Text>
    </TouchableOpacity>
  );
};
const PhoneInput = () => {
  const [phone, setPhone] = useState("");
  const [showBlinker, setShowBlinker] = useState(true);

  const handleChange = (input) => {
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

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowBlinker((showBlinker) => !showBlinker);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.left}>
          <Image
            source={require("../assets/gambia.png")}
            style={styles.image}
          />
          <Text style={styles.text}>+220</Text>
          <Ionicons name="chevron-down" size={20} />
        </TouchableOpacity>
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
      <View style={styles.bottom}>
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
    fontSize: 22,
  },
  image: {
    width: 25,
    height: 25,
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
});
