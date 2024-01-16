import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const UserBalance = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
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
  );
};

export default UserBalance;

const styles = StyleSheet.create({
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
