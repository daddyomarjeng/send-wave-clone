import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginScreen from "./screens/auth";
import OtpScreen from "./screens/auth/OtpScreen";
import LegalNameScreen from "./screens/auth/LegalNameScreen";
import PinScreen from "./screens/auth/PinScreen";
import DashboardScreen from "./screens/home";
import TransactionScreen from "./screens/transaction";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      {/* <OtpScreen /> */}
      {/* <LegalNameScreen /> */}
      {/* <PinScreen /> */}
      {/* <DashboardScreen /> */}
      <TransactionScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
