import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import ScreenHeader from "../utilitize/ScreenHeader";
import Menus from "../components/anchors/Menus";
import { colors } from "../variants/colors";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import TopAnchors from "../components/anchors/TopAnchors";
import AnchorProfile from "../components/anchors/AnchorProfile";
import { Pressable } from "react-native";
import IconsSection from "../components/anchors/IconsSection";

const SendRanking = ({ navigation }) => {
  return (
    <View>
      <ScreenHeader action={() => navigation.goBack()} title='Send Ranking' />
      <Menus />

      <View style={style.topHighlightWrapper}>
        <Image
          style={{ width: 26, height: 18 }}
          source={require("../public/icons/ruby-green.png")}
        />
        <Text style={style.topHighlightText}>1754.75 M</Text>
      </View>

      <View>
        <TopAnchors
          radio={false}
          color={colors.primary}
          dimond={require(`../public/icons/ruby-green.png`)}
        />
        <IconsSection />
      </View>

      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-1.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={2}
          user
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-2.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={3}
          sendRequest
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-3.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={4}
          group
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-4.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={5}
          sendRequest
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-5.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={6}
          sendRequest
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-6.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={7}
          user
          color={colors.primary}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("receivedRanking")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-1.png")}
          dimond={require(`../public/icons/ruby-green.png`)}
          name='Gina Rodriquez'
          id={2}
          group
          color={colors.primary}
        />
      </Pressable>
    </View>
  );
};

export default SendRanking;

export const style = StyleSheet.create({
  topHighlightWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: colors.white,
    paddingVertical: 3,
  },
  topHighlightText: { color: colors.primary, fontSize: 18, fontWeight: 600 },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 6,
    elevation: 7,
  },
  iconsWrapper: {
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
  },
});
