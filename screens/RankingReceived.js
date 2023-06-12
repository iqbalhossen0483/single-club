import React, { useState } from "react";
import { Text, View } from "react-native";
import ScreenHeader from "../utilitize/ScreenHeader";
import Menus from "../components/anchors/Menus";
import { style } from "./SendRanking";
import TopAnchors from "../components/anchors/TopAnchors";
import { colors } from "../variants/colors";
import { Pressable } from "react-native";
import AnchorProfile from "../components/anchors/AnchorProfile";
import IconsSection from "../components/anchors/IconsSection";

const RankingReceived = ({ navigation }) => {
  const [selected, setSelected] = useState("Receive");
  const data = ["Receive", "Send", "Winner"];

  const headerContainer = {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: 320,
    alignSelf: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 30,
    paddingVertical: 4,
    height: 52,
  };
  const headerItem = {
    fontSize: 13,
    fontWeight: 500,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    width: 100,
    textAlign: "center",
  };

  return (
    <View style={{ backgroundColor: colors.white }}>
      <ScreenHeader
        action={() => navigation.goBack()}
        title='Ranking Receive'
      />

      <View style={headerContainer}>
        {data.map((d) => (
          <Pressable onPress={() => setSelected(d)} key={d}>
            <Text
              style={{
                ...headerItem,
                backgroundColor: selected === d ? colors.primary : "#EEEEEE",
                color: selected === d ? colors.white : colors.dark,
              }}
            >
              {d}
            </Text>
          </Pressable>
        ))}
      </View>

      <Menus />

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

export default RankingReceived;
