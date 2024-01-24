import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import QrCode from "./QrCode";
import { useNavigation } from "@react-navigation/native";

const DashboardIcons = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Send")}
      >
        <View style={[styles.icon, { backgroundColor: "#B0B1ED" }]}>
          <Ionicons name="person" size={30} color="#0D1C99" />
        </View>
        <Text style={styles.label}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <View style={[styles.icon, { backgroundColor: "#FBF8D5" }]}>
          <FontAwesome5 name="lightbulb" size={30} color="#FDBC32" />
        </View>
        <Text style={styles.label}>Bills</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <View style={[styles.icon, { backgroundColor: "#E5F7FA" }]}>
          <FontAwesome5 name="mobile-alt" size={30} color="#01BFFA" />
        </View>
        <Text style={styles.label}>Credit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <View style={[styles.icon, { backgroundColor: "#FCE1EC" }]}>
          <MaterialCommunityIcons name="safe" size={30} color="#BE008C" />
        </View>
        <Text style={styles.label}>Kondaneh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardIcons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 150,
    paddingHorizontal: 15,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
});
