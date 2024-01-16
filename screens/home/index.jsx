import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";

const DashboardScreen = () => {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.top}>
        <Ionicons
          name="md-settings-sharp"
          size={32}
          color="#FFF"
          style={styles.icon}
        />
        <View style={styles.balanceContainer}>
          {showBalance ? (
            <>
              <Text style={styles.balance}>0 GMD</Text>
              <Ionicons
                name="md-eye-off"
                size={28}
                color="#FFF"
                onPress={() => setShowBalance(!showBalance)}
              />
            </>
          ) : (
            <>
              <Text style={styles.balance}>XXXXX GMD</Text>
              <Ionicons
                name="md-eye"
                size={28}
                color="#FFF"
                onPress={() => setShowBalance(!showBalance)}
              />
            </>
          )}
        </View>
      </View>

      <View style={styles.bottom}></View>
    </View>
  );
};
<Text>DashboardScreen</Text>;

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
    paddingTop: 30,
    backgroundColor: COLORS.bg,
  },
  top: {
    minHeight: 200,
  },
  icon: {
    marginTop: 30,
    marginLeft: 20,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "900",
  },
});
