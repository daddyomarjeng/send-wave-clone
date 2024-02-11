import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../constant/colors";

const AppTextInput = ({
  onBlur,
  onFocus,
  label,
  error,
  onChangeText,
  value,
  blurColor = "#ccc",
  focusColor = COLORS.primary,
  errorColor = "red",
  ...rest
}) => {
  const [inputBorderColor, setInputBorderColor] = useState(blurColor);
  const [showLabelToTop, setshowLabelToTop] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (text) => {
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleBlur = () => {
    setInputBorderColor(blurColor);
    if (onBlur) {
      onBlur();
    }
  };
  const handleFocus = () => {
    setInputBorderColor(focusColor);
    if (onFocus) {
      onFocus();
    }
  };

  useEffect(() => {
    if (error) {
      setInputBorderColor(errorColor);
    } else {
      if (inputRef?.current?.isFocused()) {
        setInputBorderColor(focusColor);
      } else {
        setInputBorderColor(blurColor);
      }
    }
  }, [error]);
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
              top: showLabelToTop ? 0 : 25,
              color: error
                ? errorColor
                : showLabelToTop
                ? focusColor
                : blurColor,
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

      {error && (
        <Text style={[styles.error, { color: errorColor }]}>{error}</Text>
      )}
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
  error: {},
});
