import React from "react";
import { View, TextInput, Image } from "react-native";
import { common } from "../css/common";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../variants/colors";

const InputFeild = ({
  placeholder,
  icon = null,
  secondIcon = null,
  keyboardType,
}) => {
  return (
    <View style={{ ...common.button, height: 40 }}>
      {icon && (
        <Image
          style={{
            height: 16,
            width: 16,
            marginTop: 3,
          }}
          resizeMode='contain'
          source={icon}
        />
      )}
      <TextInput placeholder={placeholder} keyboardType={keyboardType} />
      {secondIcon && (
        <Ionicons
          style={{
            marginTop: 3,
            marginLeft: 20,
          }}
          name='md-eye'
          size={16}
          color={colors.primary}
        />
      )}
    </View>
  );
};

export default InputFeild;
