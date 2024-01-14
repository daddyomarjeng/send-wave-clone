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
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COUNTRIES } from "../constant/data";
import { COLORS } from "../constant/colors";
import Numpad from "./Numpad";

const NumberPad = ({ number, ...rest }) => {
  return (
    <TouchableOpacity style={styles.numPad} {...rest}>
      <Text style={styles.numPadText}>{number}</Text>
    </TouchableOpacity>
  );
};
const PhoneInput = ({ phone, setPhone }) => {
  const [showBlinker, setShowBlinker] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

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
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowModal(false);
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
        <TouchableOpacity
          style={styles.left}
          onPress={() => setShowModal(true)}
        >
          <Image source={selectedCountry.flag} style={styles.image} />
          <Text style={styles.text}>{selectedCountry.countryCode}</Text>
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
      <Numpad number={phone} setNumber={setPhone} />

      <Modal transparent visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.h1}>Selcet Country</Text>
              {COUNTRIES.map((country) => (
                <TouchableOpacity
                  style={[styles.row, { paddingVertical: 15 }]}
                  key={country.id}
                  onPress={() => handleCountrySelect(country)}
                >
                  <View style={styles.row}>
                    <Image style={styles.image} source={country.flag} />
                    <Text style={styles.modalText}>
                      {country.name}
                      <Text style={[styles.modalTextSmall]}>
                        {country.countryCode}
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.radio,
                      {
                        borderColor:
                          selectedCountry.id === country.id
                            ? COLORS.primary
                            : "#111",
                      },
                    ]}
                  >
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 10,
                        backgroundColor:
                          selectedCountry.id === country.id
                            ? COLORS.primary
                            : "transparent",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
