import React from "react";
import { FlatList, Text } from "react-native";
import { View } from "react-native";
import ScreenHeader from "../utilitize/ScreenHeader";
import Menus from "../components/anchors/Menus";
import { colors } from "../variants/colors";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import TopAnchors from "../components/anchors/TopAnchors";
import { topAnchors } from "../services/data";
import AnchorProfile from "../components/anchors/AnchorProfile";
import { Pressable } from "react-native";

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

      <FlatList
        data={topAnchors}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <TopAnchors
              radio={false}
              color={colors.primary}
              dimond={require(`../public/icons/ruby-green.png`)}
            />
            <View style={style.iconsWrapper}>
              <Image source={require("../public/icons/send-request.png")} />
              <Image source={require("../public/icons/ic_chat.png")} />
              <Image source={require("../public/icons/double-user.png")} />
              <Image source={require("../public/icons/ic_chat.png")} />
              <Image source={require("../public/icons/user.png")} />
              <Image source={require("../public/icons/ic_chat.png")} />
            </View>
          </View>
        )}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigation.navigate("receivedRanking")}
            style={{
              ...style.profileContainer,
              backgroundColor:
                index % 2 === 0 ? colors.white : colors.secondaryGray,
            }}
          >
            <AnchorProfile
              dimond={require(`../public/icons/ruby-green.png`)}
              item={item}
              icon
              color={colors.primary}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default SendRanking;

const style = StyleSheet.create({
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
    marginHorizontal: 5,
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
