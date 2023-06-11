import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../variants/colors";
import AnchorProfile from "../components/anchors/AnchorProfile";
import { Image } from "react-native";
import TopAnchors from "../components/anchors/TopAnchors";
import { FlatList } from "react-native";
import { topAnchors } from "../services/data";
import ScreenHeader from "../utilitize/ScreenHeader";
import Menus from "../components/anchors/Menus";
import { View } from "react-native";
import { Text } from "react-native";

const ReceivedRanking = ({ navigation }) => {
  return (
    <View>
      <ScreenHeader action={() => navigation.goBack()} title='Send Ranking' />
      <Menus />

      <View style={style.topHighlightWrapper}>
        <Image
          style={{ width: 26, height: 18 }}
          source={require("../public/icons/ruby-orange.png")}
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
              color={colors.orange}
              dimond={require(`../public/icons/ruby-orange.png`)}
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
          <View
            style={{
              ...style.profileContainer,
              backgroundColor:
                index % 2 === 0 ? colors.white : colors.secondaryGray,
            }}
          >
            <AnchorProfile
              dimond={require(`../public/icons/ruby-orange.png`)}
              item={item}
              icon
              color={colors.orange}
            />
          </View>
        )}
      />
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
