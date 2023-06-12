import React from "react";
import { Dimensions, Image } from "react-native";
import { View } from "react-native";
import { colors } from "../../variants/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Footer = () => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const iconSize = width < 375 ? 24 : 30;

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        bottom: 40,
        backgroundColor: colors.white,
        zIndex: 100,
        width: "100%",
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 49,
        columnGap: width < 375 ? 22 : 26,
      }}
    >
      <Pressable onPress={() => navigation.navigate("rankingReceived")}>
        <Entypo name='home' size={iconSize} color={colors.primary} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("sendReceived")}>
        <Image
          style={{
            width: width < 375 ? 20 : 25,
            height: width < 375 ? 20 : 25,
            marginBottom: 3,
          }}
          source={require("../../public/icons/story.png")}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("footPrint")}>
        <MaterialCommunityIcons
          name='file-music-outline'
          size={iconSize}
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        style={{
          borderWidth: 2,
          borderColor: "#655d611a",
          borderRadius: 40,
          width: 56,
          height: 56,
          backgroundColor: "#655d610f",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 50,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name='video-camera' size={30} color={colors.white} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("friends")}>
        <MaterialCommunityIcons
          name='play-box-outline'
          size={iconSize}
          color={colors.primary}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("visitors")}>
        <Image
          style={{ width: iconSize, height: iconSize, resizeMode: "contain" }}
          source={require("../../public/icons/messenger.png")}
        />
      </Pressable>
      <SimpleLineIcons
        style={{ marginBottom: 4 }}
        name='user'
        size={iconSize - 4}
        color={colors.primary}
      />
    </View>
  );
};

export default Footer;
