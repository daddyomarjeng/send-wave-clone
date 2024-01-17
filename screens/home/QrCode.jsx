import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const QrCode = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/qr.png")} style={styles.img} />
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({
  container: {},
  img: {
    borderRadius: 20,
    height: 150,
    width: 290,
    resizeMode: "contain",
  },
});
