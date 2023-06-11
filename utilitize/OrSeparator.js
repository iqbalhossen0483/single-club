import React from "react";
import { View } from "react-native";
import { colors } from "../variants/colors";
import { Text } from "react-native";

const OrSeparator = ({ style }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...style,
        width: 180,
        alignSelf: "center",
      }}
    >
      <View style={{ flex: 1, height: 1, backgroundColor: colors.gray }} />
      <View>
        <Text style={{ width: 40, textAlign: "center" }}>Or</Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.gray }} />
    </View>
  );
};

export default OrSeparator;
