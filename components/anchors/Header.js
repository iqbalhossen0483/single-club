import React from "react";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { colors } from "../../variants/colors";
import { Text } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ setShowFilter, setShowNotification }) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor={colors.primary} barStyle='light-content' />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colors.primary,
          paddingTop: 10,
          paddingBottom: 6,
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 700, color: colors.white }}>
          Home
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 700, color: colors.white }}>
          News
        </Text>
        <Pressable onPress={() => navigation.navigate("popularMultiAnchors")}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: colors.white }}>
            Multi
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("voiceCahtRoom")}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: colors.white }}>
            Audio
          </Text>
        </Pressable>
        <Text style={{ fontSize: 14, fontWeight: 700, color: colors.white }}>
          V/S
        </Text>
        <Image
          style={{ width: 27, height: 22, marginBottom: 2 }}
          source={require("../../public/icons/vip.png")}
        />

        <AntDesign name='search1' size={18} color={colors.white} />
        <Pressable onPress={() => setShowNotification(true)}>
          <Feather name='bell' size={18} color={colors.white} />
        </Pressable>
        <Pressable onPress={() => setShowFilter(true)}>
          <MaterialCommunityIcons
            name='filter-outline'
            size={20}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
