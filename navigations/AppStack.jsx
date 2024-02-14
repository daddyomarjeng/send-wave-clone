import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/home";
import LoginScreen from "../screens/auth";
import OtpScreen from "../screens/auth/OtpScreen";
import LegalNameScreen from "../screens/auth/LegalNameScreen";
import PinScreen from "../screens/auth/PinScreen";
import TransactionScreen from "../screens/transaction";
import SendMoneyScreen from "../screens/send";
import SendMoneyAmountScreen from "../screens/send/SendMoneyAmount";
import NewNumberScreen from "../screens/send/NewNumber";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      // initialRouteName="Send"
    >
      {/* Auth */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OtpScreen} />
      <Stack.Screen name="LegalName" component={LegalNameScreen} />
      <Stack.Screen name="Pin" component={PinScreen} />

      {/* Dashboard */}
      <Stack.Screen name="Dashboard" component={DashboardScreen} />

      {/* Transactions */}
      <Stack.Screen name="Transaction" component={TransactionScreen} />

      {/* Send Money */}
      <Stack.Screen name="Send" component={SendMoneyScreen} />
      <Stack.Screen name="SendAmount" component={SendMoneyAmountScreen} />
      <Stack.Screen name="NewNumber" component={NewNumberScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
