import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../variants/colors";
import { Pressable } from "react-native";

const ScreenHeader = ({ title, action }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: colors.white,
      }}
    >
      <Pressable onPress={action}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../public/icons/arrow.png")}
        />
      </Pressable>
      <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 26 }}>
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
