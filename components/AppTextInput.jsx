import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../constant/colors";

const AppTextInput = ({
  onBlur,
  onFocus,
  label,
  onChangeText,
  value,
  ...rest
}) => {
  const [inputBorderColor, setInputBorderColor] = useState("#ccc");
  const [showLabelToTop, setshowLabelToTop] = useState(false);
  const inputRef = useRef(null);

  console.log("====================================");
  console.log(value);
  console.log("====================================");
  const handleChange = (text) => {
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

  useEffect(() => {
    if (inputRef?.current?.isFocused() || value?.length > 0) {
      setshowLabelToTop(true);
    } else {
      setshowLabelToTop(false);
    }
  }, [inputRef?.current?.isFocused(), value]);
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
              fontSize: showLabelToTop ? 12 : 16,
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
        value={value}
        {...rest}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    maxWidth: 380,
    alignSelf: "center",
    // marginVertical: 5,
  },
  input: {
    paddingTop: 25,
    paddingBottom: 1,
    // backgroundColor: "#fff",
    marginBottom: 10,
    borderBottomWidth: 1.2,
  },
  label: {
    position: "absolute",
  },
});
