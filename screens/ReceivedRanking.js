import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../variants/colors";
import AnchorProfile from "../components/anchors/AnchorProfile";
import { Image } from "react-native";
import TopAnchors from "../components/anchors/TopAnchors";
import ScreenHeader from "../utilitize/ScreenHeader";
import Menus from "../components/anchors/Menus";
import { View } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import IconsSection from "../components/anchors/IconsSection";

const ReceivedRanking = ({ navigation }) => {
  return (
    <View>
      <ScreenHeader
        action={() => navigation.goBack()}
        title='Receive Ranking'
      />
      <Menus />

      <View style={style.topHighlightWrapper}>
        <Image
          style={{ width: 26, height: 18 }}
          source={require("../public/icons/ruby-orange.png")}
        />
        <Text style={style.topHighlightText}>1754.75 M</Text>
      </View>

      <View>
        <TopAnchors
          radio={false}
          color={colors.orange}
          dimond={require(`../public/icons/ruby-orange.png`)}
        />
        <IconsSection />
      </View>

      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-1.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={2}
          user
          color={colors.orange}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-2.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={3}
          sendRequest
          color={colors.orange}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-3.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={4}
          group
          color={colors.orange}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-4.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={5}
          sendRequest
          color={colors.orange}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-5.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={6}
          sendRequest
          color={colors.orange}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-6.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={7}
          user
          color={colors.orange}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("popularAnchors")}
        style={style.profileContainer}
      >
        <AnchorProfile
          profile={require("../public/resources/user-1.png")}
          dimond={require(`../public/icons/ruby-orange.png`)}
          name='Gina Rodriquez'
          id={2}
          group
          color={colors.orange}
        />
      </Pressable>
    </View>
  );
};

export default ReceivedRanking;

const style = StyleSheet.create({
  topHighlightWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: colors.white,
    paddingVertical: 3,
  },
  topHighlightText: { color: colors.orange, fontSize: 18, fontWeight: 600 },
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
});
