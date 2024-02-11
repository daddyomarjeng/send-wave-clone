import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { COLORS } from "../constant/colors";

const AppTextInput = ({ onBlur, onFocus, label, onChangeText, ...rest }) => {
  const [inputBorderColor, setInputBorderColor] = useState("#111");
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const showLabelToTop = inputRef?.current?.isFocused() || value?.length > 0;

  const handleChange = (text) => {
    setValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleBlur = () => {
    setInputBorderColor("#ccc");
    if (onBlur) {
      onBlur();
    }
  };
  const handleFocus = () => {
    setInputBorderColor(COLORS.primary);
    if (onFocus) {
      onFocus();
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              //   top: inputRef?.current?.isFocused() ? 0 : 25,
              //   color: inputRef?.current?.isFocused() ? COLORS.primary : "#ccc",
              top: showLabelToTop ? 0 : 25,
              color: showLabelToTop ? COLORS.primary : "#888",
            },
          ]}
        >
          {label}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        style={[
          styles.input,
          {
            borderColor: inputBorderColor,
          },
        ]}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChangeText={handleChange}
        {...rest}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    maxWidth: 380,
    alignSelf: "center",
    marginVertical: 10,
  },
  input: {
    paddingTop: 25,
    paddingBottom: 1,
    // backgroundColor: "#fff",
    marginBottom: 10,
    borderBottomWidth: 1.5,
  },
  label: {
    position: "absolute",
  },
});
