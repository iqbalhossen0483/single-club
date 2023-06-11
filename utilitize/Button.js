import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { colors } from "../variants/colors";
import { common } from "../css/common";

const Button = ({ icon = null, text, onPress, primaryBtn, styles }) => {
  const style = primaryBtn
    ? {
        ...common.button,
        backgroundColor: colors.primary,
        justifyContent: "center",
      }
    : common.button;
  return (
    <Pressable onPress={onPress} style={{ ...style, styles }}>
      {icon && (
        <Image
          style={{ height: 16, width: 16 }}
          resizeMode='contain'
          source={icon}
        />
      )}
      <Text
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: primaryBtn && colors.white,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
