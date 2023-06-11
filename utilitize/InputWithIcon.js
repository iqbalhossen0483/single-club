import React from "react";
import { View, TextInput, Image } from "react-native";
import { common } from "../css/common";

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
        <Image
          style={{
            height: 16,
            width: 16,
            marginTop: 3,
            marginLeft: 15,
          }}
          resizeMode='contain'
          source={secondIcon}
        />
      )}
    </View>
  );
};

export default InputFeild;
