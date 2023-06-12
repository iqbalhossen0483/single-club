import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../variants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { FriendList } from "../components/anchors/popular";

const VoiceChatRoom = () => {
  return (
    <View>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={colors.secondaryGray}
      />
      <ScrollView horizontal style={style.friendWrapper}>
        <Profile color='#D991C5' />
        <Profile color='#8EFBF4' />
        <Profile color='#1877F2' />
        <Profile color='#FFA3BA' />
        <Profile color='#FF2472' />
        <Profile color='#D991C5' />
        <Profile color='#D991C5' />
        <Profile color='#8EFBF4' />
        <Profile color='#1877F2' />
        <Profile color='#FFA3BA' />
      </ScrollView>

      <View style={{ paddingHorizontal: 18 }}>
        <Text style={{ color: "#46475A", fontSize: 20, fontWeight: 600 }}>
          Audio Chat Room
        </Text>

        <ItemLinst profile={require("../public/resources/user-2.png")} />
        <ItemLinst profile={require("../public/resources/user-1.png")} />
        <ItemLinst profile={require("../public/resources/user-3.png")} />
      </View>
    </View>
  );
};

export default VoiceChatRoom;

function Profile({ color }) {
  return (
    <View style={{ ...style.activeFriendWrapper, borderColor: color }}>
      <Image
        style={style.activeFriend}
        source={require("../public/resources/user-1.png")}
      />
    </View>
  );
}

function ItemLinst({ profile }) {
  return (
    <View style={style.itemContainer}>
      <View style={style.profile}>
        <View style={style.profileWarp}>
          <Image
            style={{ width: 90, height: 90, borderRadius: 70 }}
            source={profile}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.name}>Pow Of Chakma</Text>
            <View style={{ flexDirection: "row", marginLeft: 73, gap: 11 }}>
              <Image source={require("../public/icons/Voice-wave.png")} />
              <Text style={style.flower}>186</Text>
            </View>
          </View>
          <View style={style.gamNflower}>
            <Image source={require("../public/icons/ruby-orange.png")} />
            <Text style={{ fontSize: 14, color: colors.orange }}>
              75,48,654
            </Text>

            <View style={{ marginLeft: 16 }}>
              <FriendList />
            </View>
          </View>
          <Text style={style.tag}>Amak Kew Valobashe Na</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  friendWrapper: {
    backgroundColor: colors.white,
    marginTop: 8,
    marginBottom: 4,
    paddingVertical: 5,
  },
  activeFriend: {
    width: 57,
    height: 57,
    borderRadius: 50,
  },
  activeFriendWrapper: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
    marginHorizontal: 3,
  },
  itemContainer: {
    backgroundColor: colors.white,
    paddingTop: 8,
    borderRadius: 21,
    marginLeft: 45,
    marginTop: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -30,
  },
  name: { color: "#46475A", fontSize: 14, fontWeight: 600 },
  flower: { color: "#434860", fontSize: 14, fontWeight: 600 },
  tag: {
    color: "#575465",
    fontSize: 11,
    fontWeight: 500,
    marginLeft: 7,
  },
  gamNflower: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginLeft: 7,
  },
  profileWarp: {
    width: 90,
    height: 90,
    borderRadius: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 6,
    elevation: 8,
  },
});
