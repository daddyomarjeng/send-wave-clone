import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COUNTRIES } from "../constant/data";
import { COLORS } from "../constant/colors";

const AppCountryPicker = ({ countries = COUNTRIES, onSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowModal(false);
    if (onSelect) {
      onSelect(country);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.CountryContainer}
        onPress={() => setShowModal(true)}
      >
        <Image source={selectedCountry.flag} style={styles.image} />
        <Text style={styles.text}>{selectedCountry.countryCode}</Text>
        <Ionicons name="chevron-down" size={20} />
      </TouchableOpacity>

      <Modal transparent visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.h1}>Selcet Country</Text>
              {countries.map((country) => (
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

export default AppCountryPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    marginVertical: 20,
  },
  CountryContainer: {
    borderBottomWidth: 1,
    borderColor: "#888",
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    // fonts
    fontSize: 22,
  },
  image: {
    width: 20,
    height: 20,
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
