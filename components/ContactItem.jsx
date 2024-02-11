import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ContactItem = ({ item, onPress }) => {
  // console.log(item.phoneNumbers[0].number);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress(item)}
        activeOpacity={0.6}
      >
        <View style={styles.left}>
          <Ionicons name="person" size={24} color="#777" />
        </View>
        <View style={styles.right}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.number}>
            {item.phoneNumbers
              ? item.phoneNumbers[0].number
              : "No Phone Number"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#ccc",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  right: {},
  name: {
    fontWeight: "bold",
  },
  number: { color: "#888" },
});
