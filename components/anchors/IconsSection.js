import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { View } from "react-native";
import { colors } from "../../variants/colors";

const IconsSection = () => {
  const iconsWrapper = {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 6,
    elevation: 4,
  };

  return (
    <View style={iconsWrapper}>
      <MaterialCommunityIcons
        name='signal-variant'
        size={24}
        color={colors.primary}
      />
      <FontAwesome name='commenting' size={22} color={colors.primary} />
      <FontAwesome5 name='user-friends' size={22} color={colors.primary} />
      <FontAwesome name='commenting' size={22} color={colors.primary} />
      <FontAwesome5 name='user-alt' size={22} color={colors.primary} />
      <FontAwesome name='commenting' size={22} color={colors.primary} />
    </View>
  );
};

export default IconsSection;
