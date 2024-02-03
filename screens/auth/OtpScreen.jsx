import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Numpad from "../../components/Numpad";
import BackButton from "../../components/BackButton";
import { COLORS } from "../../constant/colors";

const OtpScreen = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) return;
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>
        Enter the validation code that we texted to 3540237
      </Text>
      {/* <Text style={styles.pin}>{pin}</Text> */}
      <Numpad
        showPlainPin
        number={pin}
        setNumber={setPin}
        maxLength={4}
        onMaxLength={() => navigation.navigate("LegalName")}
        topComponent={
          <View>
            {timer > 0 ? (
              <Text style={styles.resend}>Resend SMS in {timer}</Text>
            ) : (
              <TouchableOpacity onPress={() => setTimer(30)}>
                <Text style={[styles.resend, { color: COLORS.primary }]}>
                  Resend
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
      />
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
  bottom: { flex: 1, justifyContent: "flex-end" },
  pin: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 20,
    borderStyle: "dashed",
  },
  resend: {
    color: "#ccc",
    fontSize: 17,
    textAlign: "center",
  },
});
